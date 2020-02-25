#!/bin/bash -ex

# HOW TO NOT BREAK THIS SCRIPT:
#
# [1]: npm install is being ran in the packages twice - once before lerna
# publish to make sure everything is up to date, and then again afterwards to
# update the package-lock.json files, which are then committed.
#
# [2]: Lerna uses the git tags to work out what has changed. They must be
# annotated tags or lerna will think every package has always been updated:
# https://github.com/lerna/lerna/issues/1357#issuecomment-438162152

git pull origin master --tags
npx lerna exec npm install
npx lerna bootstrap
npx lerna run build

publish_branch=$(git rev-parse --abbrev-ref HEAD)

npx lerna version --no-push

tags=$(git tag --points-at HEAD)
message=$(git log -1 HEAD --pretty=%B)
npx lerna exec "npm install --ignore-scripts --package-lock-only" # [1]
git commit --all --amend -m "(With package-lock.json changes) ${message}"
while IFS= read -r tag; do
  git tag -d "$tag"
  git tag "$tag" -m "$tag" # [2]
done <<< "$tags"
git push origin $publish_branch
git push origin $publish_branch --tags
