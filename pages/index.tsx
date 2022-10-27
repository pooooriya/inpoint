import { Layout } from 'components'
import { OverlayNotification } from 'components/OverlayNotification'
import { AppContext } from 'context'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { ChatContextActionType } from 'types'


const Home: NextPage = () => {
  const state = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;
  console.log(state);

  return (
    <Layout>
    </Layout>
  )
}

export default Home
