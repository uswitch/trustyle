#!/bin/bash
for path in $(npx lerna list --json | jq -r 'map(.location) | .[]'); do
  # cat "$path/package.json" | jq 'del(.scripts)' > tmp.json && mv tmp.json "$path/package.json"
  rm "$path/tsconfig.json"
done
