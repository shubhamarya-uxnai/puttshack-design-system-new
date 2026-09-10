import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Design-system foundations only — no Storybook chrome. Same tokens/fonts/text
// styles every component in src/components relies on.
import '../src/styles/fonts.css'
import '../src/styles/tokens.css'
import '../src/styles/text-styles.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
