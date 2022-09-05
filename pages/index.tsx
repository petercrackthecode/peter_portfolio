import type { NextPage } from 'next'
import FavoriteProjects from '../components/FavoriteProjects'
import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'
import { getLatestRepos } from '../lib/getLatestRepos'

const Home: NextPage<{ repositories: [any] }> = ({ repositories }) => {
  return (
    <>
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </>
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN || ''
  const repositories = await getLatestRepos(token)

  return {
    props: {
      repositories,
    },
  }
}

export default Home
