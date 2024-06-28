import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js';
import { AuthProvider } from './hooks/auth';
import ReactDOM from 'react-dom/client'
import theme from './styles/theme';
import { Routes } from './routes'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
