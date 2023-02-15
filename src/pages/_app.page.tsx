import { defaultTheme } from '../styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { Inter } from '@next/font/google'
import { SelectedDateProvider } from '@/contexts/SelectedDateContext/SelectedDateProvider'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ThemeProvider theme={defaultTheme}>
        <SelectedDateProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </SelectedDateProvider>
      </ThemeProvider>
    </div>
  )
}
