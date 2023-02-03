import { defaultTheme } from '../styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
