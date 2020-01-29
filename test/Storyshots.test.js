import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots'
import serializer from 'jest-emotion'

initStoryshots({
  test: multiSnapshotWithOptions(),
  snapshotSerializers: [serializer],
  storyKindRegex: /^((?!.*?Legacy Styles\|Typography).)*$/
})
