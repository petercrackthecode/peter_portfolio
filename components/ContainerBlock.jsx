import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

const MY_WEBSITE = 'https://www.petercrackthecode.com'

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Peter Nguyen- Software Engineer, Marathon Runner, and Life Long Learner',
    description: `I'm Peter Nguyen, a software engineer based in the Bay Area, CA. I specialize in building fast & beautiful websites, applications, and everything in between.`,
    image: 'portfolio_image.jpg',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="min-w-screen min-h-screen relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${MY_WEBSITE}${router.asPath}`} />
        <link rel="canonical" href={`${MY_WEBSITE}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Peter Nguyen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@petercrackstuff" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
