import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      
      <App/>
      <GlobalStyle/>
    </ThemeProvider>

  </React.StrictMode>,
)
