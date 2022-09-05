import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import ContainerBlock from '../components/ContainerBlock'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <title>Petercrackthecode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Peter Nguyen's personal website" />
        <link rel="icon" href="/portfolio_image.ico" />
      </Head>
      <ContainerBlock>
        <Component {...pageProps} />
      </ContainerBlock>
    </ThemeProvider>
  )
}

export default MyApp
