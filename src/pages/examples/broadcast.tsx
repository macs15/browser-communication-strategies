import { useBroadcastChannel } from '@/hooks/useBroadcastChannel'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function BroadcastPage() {
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
