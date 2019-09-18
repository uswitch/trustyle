#!/bin/bash -ex

git checkout master
git pull origin --rebase
npx lerna bootstrap
npx lerna run build

v=$(git rev-parse --short HEAD)
publish_branch=publish_$v

git checkout -b $publish_branch
git push origin $publish_branch

npx lerna publish
