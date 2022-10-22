import { Layout } from 'components'
import { AppContext } from 'context'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { ChatContextActionType } from 'types'


const Home: NextPage = () => {
  const state = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;
  console.log(state);
  useEffect(() => {
    dispatch({
      type: ChatContextActionType.NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT,
      payload: {
        id: 2, text: "injaaaaaaaa"
      }
    });
    () => {
      console.log("CleanUp")
    };
  }, [])

  return (
    <Layout>hello</Layout>
  )
}

export default Home
