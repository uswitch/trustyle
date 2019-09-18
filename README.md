## Development
All commands can be run from individual packages, but it is not necessary to do so.

Run `npm install` at the project root to install the dev dependencies.
Run `npx lerna bootstrap` to install each package’s dependencies.
Run `npx lerna run build` to run each package’s build script.

To run storybook locally `npm start`.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.

## Publishing
All changes should first be merged into the master branch. When you are ready to publish the master branch, run the `./publish.sh` script. When finished publishing, raise a PR to merge the new version numbers into master.

To preview which packages have changed, you can run `npx lerna changed` without publishing.
