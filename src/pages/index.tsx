import { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage = ({}) => {
  return (
    <main className='home'>
      <h1>Browser communication strategies</h1>
      <span className='horizontal-separator' />
      <ul>
        <li>
          <Link href='/examples/post-message'>postMessage</Link>
        </li>
        <li>
          <Link href='/examples/messaging'>Message channel API</Link>
        </li>
        <li>
          <Link href='/examples/broadcast'>Broadcast channel API</Link>
        </li>
      </ul>
    </main>
  )
}

export default HomePage
