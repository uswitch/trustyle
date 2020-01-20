#!/bin/bash -ex

git checkout master
git pull origin --rebase
npx lerna exec npm install
npx lerna bootstrap
npx lerna run build

v=$(git rev-parse --short HEAD)
publish_branch=publish_$v

git checkout -b $publish_branch
git push origin $publish_branch

npx lerna publish --no-push

# Run `npm install` to update the package-lock.json files, copying over the git tags to the
# new commit.
tags=$(git tag --points-at HEAD)
message=$(git log -1 HEAD --pretty=%B)
npx lerna exec "npm install --ignore-scripts --package-lock-only"
git commit --all --amend -m "(With package-lock.json changes) ${message}"
echo "$tags" | xargs -L 1 git tag -d
echo "$tags" | xargs -L 1 git tag
git push origin $publish_branch
git push origin $publish_branch --tags
