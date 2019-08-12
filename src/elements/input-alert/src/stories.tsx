import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { InputAlert } from '.'

storiesOf('Elements|InputAlert', module)
  .add('notification', () => (
    <InputAlert type="notification">
      {text(
        'Message',
        `This is an example of a long notification, these notifications should
          be used in order to give users an instruction, or make users aware of
          a consequence of their decision. These should be used only if
          needed.`
      )}
    </InputAlert>
  ))
  .add('error', () => (
    <InputAlert type="alert">
      {text(
        'Message',
        `Error messages should be used to tell users both what the problem is
          and how they can resolve it. Error messages are best suited to
          senarios when users need to take action to continue.`
      )}
    </InputAlert>
  ))
