import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { withLoader } from '../../helpers/with-loader'

const Example = () => <p>All finished.</p>

const WithLoader = withLoader(Example)

storiesOf('Elements|withLoader HOC', module).add('Example', () => (
  <WithLoader loading={boolean('Loading', true)} />
))
