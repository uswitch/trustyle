import { danger, message } from 'danger'

const modifiedMD = danger.git.modified_files.join('- ')
message('Changed Files in this PR: \n - ' + modifiedMD)

const addedFiles = danger.git.created_files.join(', ')
message('Added Files in this PR: \n - ' + addedFiles)

const removedFiles = danger.git.deleted_files.join(', ')
message('Removed files in this PR: \n - ' + removedFiles)

// Commits should start with feat, fix, major or chore
danger.git.commits.forEach(commit => {
  if (
    !commit.message.match(
      /^(feat:)|(fix:)|(major:)|(chore:)|(docs:)|Merge branch/g
    )
  ) {
    message(
      `Commit message '${commit.message}' does match the correct format. Please follow [conventional commits](https://www.conventionalcommits.org)`
    )
  }
})
