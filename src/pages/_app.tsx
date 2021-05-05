import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '@/styles/themes/default'

import '@/styles/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
