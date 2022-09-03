import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Peter Nguyen- Software Engineer, Marathon Runner, and Life Long Learner',
    description: `I'm Peter Nguyen, a software engineer based in the Bay Area, CA. I specialize in building fast & beautiful websites, applications, and everything in between.`,
    image: '',
    type: 'website',
    ...customMeta,
  }
}
