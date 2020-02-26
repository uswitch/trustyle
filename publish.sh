#!/bin/bash -ex

git pull origin master --tags

npx lerna version --no-push
git push origin --tags
