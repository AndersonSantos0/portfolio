import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '@/styles/themes/default'

import '@/styles/fonts.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer style={{ top: `5rem` }} position="top-right" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
