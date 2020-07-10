## Development

All commands can be run from individual packages, but it is not necessary to do so.

- Run `npm install` at the project root to install the dev dependencies.
- Run `npx lerna bootstrap` to link package dependencies to each other.

To run storybook locally `npm start`.

The packages are all built using the same build step. Run `npm run build` to build all the packages using `tsc`. All files matching `src/**/*.{ts,tsx}` are included and output is written to the `lib` directory within each package.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.
 
## Publishing

Publishing is done through an automated process using Lerna and GitHub Actions. The next version is determined by the commit messages in the PR following the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) approach.

Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix: adjust width to match design`                                                                                                                             | Patch Release              |
| `feat: add icon to buttons`                                                                                                                                                       | Feature Release  |
| `major: remove variant prop`<br><br>`BREAKING CHANGE: You can no longer add a variant prop to buttons, this is handled by the theme prop`| Breaking Release |
| `chore: Add new check for commits`| N/A |
| `docs: Update docs to include information about automatic publishing`| N/A |

DangedJS is setup to check commits inside PRs to ensure that they follow the rules above.

## TODO:

- Make grid columns automatically take space. so 3 columns would automatically render 1/3 on each column, each device by default.
- Make grid s={1/2} auto populate the rest of the sizes. so if you do s={1/2} and leave m and l blank, m and l should also be 1/2
- Generate column sizes based on number of columns and gutter widths.
