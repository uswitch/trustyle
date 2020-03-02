## Development
All commands can be run from individual packages, but it is not necessary to do so.

- Run `npm install` at the project root to install the dev dependencies.
- Run `npx lerna bootstrap` to link package dependencies to each other.

To run storybook locally `npm start`.

To run each package’s build script, run `npx lerna run build`. You don't usually have to do this as you don't need it for local development and the publish script runs it for you on publish.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.

## Publishing
To preview which packages have changed, you can run `npx lerna changed` without publishing.

Once happy with the code changes, run `npx lerna version` and bump the versions accordingly.

Lerna will generate a publish commit. Push that commit to your remote branch and once it gets merged to master, CI will publish the new versions to `npm`.

## TODO:
- Make grid columns automatically take space. so 3 columns would automatically render 1/3 on each column, each device by default.
- Make grid s={1/2} auto populate the rest of the sizes. so if you do s={1/2} and leave m and l blank, m and l should also be 1/2
- Generate column sizes based on number of columns and gutter widths.
