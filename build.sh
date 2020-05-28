#!/bin/bash
REFERENCES=$(npx lerna list --json | jq 'map(.location) | map({path: .}) | {references: .}')
echo "$(cat tsconfig.json)$REFERENCES" | jq -s '.[0] * .[1]' > tsconfig.build.json
npx tsc --build tsconfig.build.json
