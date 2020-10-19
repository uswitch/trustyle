import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { BulletListTimeline } from './'

storiesOf('Elements/Bullet List Timeline', module).add('Example', () => (
  <BulletListTimeline
    stages={[
      <span key="example">
        This is an example of a time line bullet point, these are used to show
        progress. It’s annoying because it wraps, it wraps, it wraps
      </span>,
      <span key="example2">
        This is an example of a time line bullet point, these are used to show
        progress.
      </span>,
      <span key="example3">
        This is an example of a time line bullet point, these are used to show
        progress.
      </span>,
      <span key="example4">
        This is an example of a time line bullet point, these are used to show
        progress.
      </span>,
      <span key="example5">
        This is an example of a time line bullet point, these are used to show
        progress. It’s annoying because it wraps
      </span>
    ]}
  />
))
