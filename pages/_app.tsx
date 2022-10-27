import 'styles/globals.css'
import 'styles/font.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from 'context'
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic'
const NotificationPortal = dynamic(() => import('../components/NotificationPortal/index')
  .then(res => res.NotificationPortal), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <NotificationPortal />
    </AppContextProvider>
  )
}

export default MyApp
