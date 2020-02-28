import React from 'react'
import { render } from 'react-dom'
import AppProvider from './clam-apollo'
import App from './components/App'

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
)
