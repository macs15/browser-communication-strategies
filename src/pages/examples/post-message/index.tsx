import { FormEvent, useEffect, useRef } from 'react'

const PostMessagePage = () => {
  const tabRef = useRef<Window | null>(null)

  const handleMessage = (e: MessageEvent) => {
    if (e.data.type !== 'oauth') return

    console.log(e.data)
    tabRef.current?.removeEventListener('message', handleMessage)
  }

  const onOAuthClick = () => {
    tabRef.current = window.open(`${window.origin}/examples/post-message/oauth`)
    tabRef.current?.addEventListener('message', handleMessage)
  }

  // ignore
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <main>
      <h1>postMessage</h1>

      <form onSubmit={onSubmit} className='form'>
        <h2>Login</h2>
        <button type='button' className='social-button' onClick={onOAuthClick}>
          Log with a social network
        </button>

        <input type='text' name='user' />
        <input type='password' name='password' />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default PostMessagePage
