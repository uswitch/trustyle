#!/bin/bash -ex

git pull origin master --tags
npx lerna exec npm install
npx lerna bootstrap
npx lerna run build

npx lerna version --no-push
git push origin --tags
