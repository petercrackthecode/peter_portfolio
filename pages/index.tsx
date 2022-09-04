import type { NextPage } from 'next'
import ContainerBlock from '../components/ContainerBlock'
import FavoriteProjects from '../components/FavoriteProjects'
import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'

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
