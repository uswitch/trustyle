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

npx lerna publish

# Update package-lock.json files as well
npx lerna exec npm install
git commit --all --amend --no-edit
git push -f origin $publish_branch
