import { useBroadcastChannel } from '@/hooks/useBroadcastChannel'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef } from 'react'

export default function BroadcastPage() {
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
        <title>Broadcast Channel API</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Broadcast Channel API</h1>
      </main>
    </>
  )
}
