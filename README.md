
## Deploying
Run `npx run build-all` to build all of the packages as well as the collected library. Then `npx lerna publish` to upload to NPM.

## Development
Run `npm install` at the project root. It is not necessary at any time to descend into individual packages to install modules, lint or build — it is all done from the root.

To run storybook: run `npx lerna bootstrap` to install dependencies for each package, and `npm start` to start storybook locally.
