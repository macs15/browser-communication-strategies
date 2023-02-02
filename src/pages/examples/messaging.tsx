import { useBroadcastChannel } from '@/hooks/useBroadcastChannel'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const iframeSrc = 'http://localhost:3000/iframe'

const MessagingPage = () => {
  const router = useRouter()
  const [channel, setChannel] = useState(() => {
    if (typeof window === 'undefined') return
    return new MessageChannel()
  })

  useEffect(() => {
    // TODO: Add message channel logic
  }, [])

  // const broadcast = useBroadcastChannel('iframe-connection')

  // const handleRedirect = ({
  //   data
  // }: MessageEvent<{ type: string; payload: Record<string, string> }>) => {
  //   if (data.type !== 'redirect') return

  //   router.push(data.payload.route)
  // }

  // useEffect(() => {
  //   if (!broadcast) return

  //   broadcast.addEventListener('message', handleRedirect)

  //   return () => {
  //     broadcast.removeEventListener('message', handleRedirect)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [broadcast])

  return (
    <>
      <Head>
        <title>Channel Messaging API</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Channel Messaging API</h1>

        <iframe src={iframeSrc} width='100%' height='100%' />
      </main>
    </>
  )
}

export default MessagingPage
