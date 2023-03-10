import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const iframeSrc = 'http://localhost:5173/iframe'
const channel = new MessageChannel()

const MessagingPage = () => {
  const [count, setCount] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!iframeRef.current) return

    const { current: iframe } = iframeRef

    const onLoad = () => {
      channel.port1.onmessage = e => {
        if (e.data.type === 'increment') {
          setCount(current => current + 1)
        }

        if (e.data === 'connected') {
          console.log(e.data)
        }
      }

      iframe.contentWindow?.postMessage('Connecting to iframe', '*', [channel.port2])
    }

    iframe.addEventListener('load', onLoad)

    return () => {
      iframe.removeEventListener('load', onLoad)
    }
  }, [])

  const handleDispatch = () => {
    channel.port1.postMessage({ type: 'increment' })
  }

  return (
    <>
      <Head>
        <title>Channel Messaging API</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Channel Messaging API</h1>
        <br />
        <h2>
          Dispatched from iframe: <b>{count}</b>
        </h2>
        <button onClick={handleDispatch}>Dispatch to iframe app</button>
        <br />

        <iframe ref={iframeRef} src={iframeSrc} width='100%' height='100%' />
      </main>
    </>
  )
}

export default MessagingPage
