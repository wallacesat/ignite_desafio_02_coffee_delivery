import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { CheckoutContextProvider } from './contexts/CheckoutContext'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
