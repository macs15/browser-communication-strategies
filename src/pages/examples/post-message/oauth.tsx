import React from 'react'

const OAuthPage = () => {
  const handleClick = () => {
    const data = {
      name: 'Maykell Carrillo',
      email: 'maykell@testing.com'
    }
    postMessage({ type: 'oauth', data })
    window.close()
  }

  return (
    <main>
      <h1>Some kind of oAuth example</h1>
      <p>Let&apos;s pretend that is a google oAuth</p>
      <br />
      <button className='oauth-btn' onClick={handleClick}>
        <b>Maykell Carrillo</b>
        <span>maykell@testing.com</span>
      </button>
    </main>
  )
}

export default OAuthPage
