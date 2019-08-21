## Deploying
Run `npx lerna run build` to build all of the packages, then `npx lerna publish` to upload to NPM.

## Development
Run `npm install` at the project root. It is not necessary to descend into individual packages to install modules, lint or build — it can all be done from the root.

To run storybook: run `npx lerna bootstrap` to install dependencies for each package, and `npm start` to start storybook locally.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.

### Imports
Because we are not using Webpack + Babel to transpile the source code, only TypeScript, you *cannot use default imports*. For React, you can use `import * as React`.
