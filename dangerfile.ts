import { danger, warn } from 'danger'

// Commits should start with feat, fix, major or chore
danger.git.commits.forEach(commit => {
  if (
    !commit.message.match(
      /^(feat:)|(fix:)|(major:)|(chore:)|(docs:)|Merge branch/g
    )
  ) {
    warn(
      `Commit message '${commit.message}' does match the correct format. Please follow [conventional commits](https://www.conventionalcommits.org)`
    )
  }
})
