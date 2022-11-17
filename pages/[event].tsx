import { Layout } from 'components'
import AXIOS from 'config/axios.config'
import { API_URLS } from 'constants/api.constants'
import { AppContext } from 'context'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'


type HomeProps = {
  data: any
}
const Home: NextPage<HomeProps> = ({ data }) => {
  const { socket, auth } = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;
  const router = useRouter();

  // connect to socket here if token is provided 
  useEffect(() => {
    if (auth.accessToken && auth.username) {
      socket?.connect()
    } else {
      // we have to redirect to get token again 
      router.push('/arpa?event_name=' + data.name)
    }
    return () => {
      socket?.disconnect()
      socket?.off()
    }
  }, [])

  return (
    <Layout>
    </Layout>
  )
}

export default Home

export const getServerSideProps = async (ctx: any) => {
  let response;
  try {
    const x = parseCookies(ctx)
    console.log(x);
    // we just check event is available or not !
    response = await AXIOS.post(`${API_URLS.ARPA_AUTH_URL}`, {
      event_name: ctx.query.event
    })
  } catch (error) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: response.data?.data || null
    }
  }
}
