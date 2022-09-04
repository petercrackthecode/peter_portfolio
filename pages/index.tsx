import type { NextPage } from 'next'
import Head from 'next/head'
import ContainerBlock from '../components/ContainerBlock'
import FavoriteProjects from '../components/FavoriteProjects'
import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Peter Nguyen- Software Engineer, Runner, and Life Long Learner"
      description="Welcome to Peter Nguyen's portfolio website"
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode />
    </ContainerBlock>
  )
}

export default Home
