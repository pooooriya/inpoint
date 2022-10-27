import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='fa' dir='rtl' className='dark'>
            <Head />
            <body>
                <div id="inpoint_notification" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}