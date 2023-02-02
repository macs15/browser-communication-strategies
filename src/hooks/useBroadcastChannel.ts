import { useEffect, useState } from 'react'

type Channels = 'iframe-connection' | 'auth'

export const useBroadcastChannel = (channel: Channels) => {
  const [broadcast] = useState(() => {
    if (typeof window === 'undefined') return undefined
    return new BroadcastChannel(channel)
  })

  useEffect(() => {
    () => {
      broadcast?.close()
    }
  })

  return broadcast
}
