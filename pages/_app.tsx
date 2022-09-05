import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import ContainerBlock from '../components/ContainerBlock'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <ContainerBlock>
        <Component {...pageProps} />
      </ContainerBlock>
    </ThemeProvider>
  )
}

export default MyApp
