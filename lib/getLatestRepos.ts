import { Octokit } from '@octokit/core'

export const getLatestRepos = async (token: string) => {
  try {
    if (token) {
      const octokit = new Octokit({ auth: token })
      const repos = await octokit.request('GET /users/{username}/repos', { username: 'petercrackthecode' })
      const latestSixRepos = repos.data.slice(0, 6)
      return latestSixRepos
    } else throw new Error('No Github Auth token found')
  } catch (err) {
    console.log(err)
  }
}
