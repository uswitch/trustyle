import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  storyNameRegex: /Snapshot/,
  test: multiSnapshotWithOptions()
});
