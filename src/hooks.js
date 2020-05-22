import { useState } from 'react'
import { wsClient } from 'clam-apollo-subscriptions'

export function useConnectionStatus(client = wsClient) {
  const [status, setStatus] = useState('disconnected')

  client.onConnecting(() => {
    setStatus('connecting')
  })

  client.onConnected(() => {
    setStatus('connected')
  })

  client.onReconnecting(() => {
    setStatus('reconnecting')
  })

  client.onReconnected(() => {
    setStatus('connected')
  })

  client.onDisconnected(() => {
    setStatus('disconnected')
  })

  return status
}
