import { FormEvent, useEffect } from 'react'

const PostMessagePage = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    window.postMessage('hello world', '*')
  }, [])

  const onOAuthClick = () => {
    const tab = window.open(`${window.origin}/examples/post-message/oauth`)
    tab?.addEventListener('message', e => {
      console.log(e.data)
    })
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
