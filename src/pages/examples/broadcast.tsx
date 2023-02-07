/* eslint-disable react-hooks/exhaustive-deps */
import { useBroadcastChannel } from '@/hooks/useBroadcastChannel'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

type MessageEventTypes =
  | { type: 'logout' }
  | { type: 'login' }
  | { type: 'update-counter'; payload: number }

export default function BroadcastPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [count, setCount] = useState(0)
  const broadcast = useBroadcastChannel('iframe-connection')

  useEffect(() => {
    const token = Cookies.get('temp-token')
    token && setIsAuthenticated(true)
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    Cookies.set('temp-token', 'abc-123')
  }

  const logout = () => {
    setIsAuthenticated(false)
    Cookies.remove('temp-token')
  }

  const handleAuth = () => {
    if (isAuthenticated) {
      logout()
      broadcast?.postMessage({ type: 'logout' })
      return
    }

    login()
    broadcast?.postMessage({ type: 'login' })
  }

  const handleEvent = ({ data }: MessageEvent<MessageEventTypes>) => {
    const { type } = data

    if (type === 'logout') {
      logout()
    }

    if (type === 'login') {
      login()
    }

    if (type === 'update-counter') {
      setCount(prevVal => prevVal + data.payload)
    }

    console.log('dispatched', type)
  }

  useEffect(() => {
    if (!broadcast) return

    broadcast.addEventListener('message', handleEvent)

    return () => {
      broadcast.removeEventListener('message', handleEvent)
    }
  }, [broadcast])

  const updateCount = (value: number) => {
    broadcast?.postMessage({ type: 'update-counter', payload: value })
    setCount(prev => prev + value)
  }

  return (
    <>
      <Head>
        <title>Broadcast Channel API</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='broadcast'>
        <h1>Broadcast Channel API example</h1>
        <div className='box-horizontal'>
          <p>Logged: {JSON.stringify(isAuthenticated)}</p>
          <button type='button' onClick={handleAuth}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>
        <hr />
        {isAuthenticated ? (
          <>
            <h3>
              Current count: <b>{count}</b>
            </h3>
            <div className='box-horizontal'>
              <button onClick={() => updateCount(1)}>Increment</button>
              <button onClick={() => updateCount(-1)}>Decrement</button>
            </div>
          </>
        ) : (
          <h3>First log in to access</h3>
        )}
      </main>
    </>
  )
}
