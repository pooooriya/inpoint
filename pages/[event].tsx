import { Layout } from 'components'
import AXIOS from 'config/axios.config'
import { API_URLS } from 'constants/api.constants'
import { AppContext } from 'context'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'
import { Roles } from 'types'
import { AuthContextActionType, EventContextActionType } from 'types/context'


type HomeProps = {
  auth: any
  event: any
}
const Home: NextPage<HomeProps> = ({ auth, event }) => {
  const { socket } = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated && auth.accessToken && auth.username) {
      dispatch({ type: AuthContextActionType.AUTH_COMPLETED, payload: auth })
      dispatch({ type: EventContextActionType.EVENT_INFORMATION_COMPLETED, payload: event })
      socket?.connect()
    } else {
      // destroyCookie(null, "token");
      // destroyCookie(null, "username");
      router.push('/arpa?event_name=' + event.title)
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
  const { query } = ctx;
  try {
    const creds = parseCookies(ctx)

    if (creds.token && creds.username) {
      // we just check event is available or not !
      response = await AXIOS.post(`${API_URLS.ARPA_AUTH_URL}`, {
        event_name: query.event
      }, {
        headers: {
          "Authorization": `bearer ${creds.token}`
        }
      })

      return {
        props: {
          auth: {
            isAuthenticated: true,
            username: creds.username || '',
            role: response?.data?.data?.role,
            accessToken: creds.token || '',
          },
          event: {
            title: response?.data?.data.name || '',
            player: response?.data?.data?.player_url || '',
            settings: response?.data.data?.settings || [],
            link: response?.data?.data?.client_url || '',
            description: response?.data?.data?.event_description || 'رویداد بدون نام'
          }
        }
      }
    } else {
      // check event exist or not and treated as guest not host 
      response = await AXIOS.post(`${API_URLS.ARPA_AUTH_URL}`, {
        event_name: ctx.query.event
      }, {
      })

      return {
        redirect: {
          permanent: false,
          destination: `/arpa?event_name=${response?.data?.data?.name}`
        }
      }

    }

  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: `/arpa?event_name=${query.event}`
      }
    }
  }

}
