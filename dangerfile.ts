import { danger, fail, message } from 'danger'

const modifiedMD = danger.git.modified_files.join('- ')
message('Changed Files in this PR: \n - ' + modifiedMD)

// Commits should start with feat, fix, major or chore
danger.git.commits.forEach(commit => {
  if (!commit.message.match(/^(feat:)|(fix:)|(major:)|(chore:)/g)) {
    fail(
      `Commit message '${commit.message}' does match the correct format. Please follow [conventional commits](https://www.conventionalcommits.org)`
    )
  }
})
