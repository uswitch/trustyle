## Development

All commands can be run from individual packages, but it is not necessary to do so.

- Run `npm install` at the project root to install the dev dependencies.
- Run `npx lerna bootstrap` to link package dependencies to each other.

To run storybook locally `npm start`.

The packages are all built using the same build step. Run `npm run build` to build all the packages using `tsc`. All files matching `src/**/*.{ts,tsx}` are included and output is written to the `lib` directory within each package.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.
 
## Publishing

**Do not do this until you are ready to merge and your PR has been approved!** Justification below.

To preview which packages have changed, you can run `npx lerna changed` without publishing.

Once happy with the code changes, run `npx lerna version` and bump the versions accordingly.

Lerna will generate a publish commit. Push that commit to your remote branch and once it gets merged to master, CI will publish the new versions to `npm`.

Why you shouldn't publish until ready to merge:

- You will block anyone else who wants to change that package or any dependents or dependencies until your PR is merged.
- If changes are requested, you will have to update the version again after making the changes.
- If you have to merge in master, you will have to update the version again.

## Accessibility checks

We run automated accessibility tests as part of our pre-merge CI checks. You can run these tests locally as follows:

1. Run storybook: `npm run storybook`
2. Run the tests: `npm run a11y`

## Palette & Margin Collapse

In order to prevent margin collapse on palette components, you should
add the following snippet as high up in your document as possible

```html
<style>.palette{padding-top:0.05px;padding-bottom:0.05px;}</style>
```

This will be the least specific settings for `padding` properties, and
will therefore prevent margin collapse for elements that don't have
padding, but will also respect the padding of an element if it is
already set

