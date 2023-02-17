import { defaultTheme } from '../styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { Inter } from '@next/font/google'
import { SelectedDateProvider } from '@/contexts/SelectedDateContext/SelectedDateProvider'
import { SchedulesContextProvider } from '@/contexts/SchedulesContext/SchedulesContextProvider'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ThemeProvider theme={defaultTheme}>
        <SchedulesContextProvider>
          <SelectedDateProvider>
            <Component {...pageProps} />
            <GlobalStyles />
          </SelectedDateProvider>
        </SchedulesContextProvider>
      </ThemeProvider>
    </div>
  )
}
