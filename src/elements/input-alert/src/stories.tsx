import * as React from 'react'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import { InputAlert } from '.'

export default {
  title: 'Elements/InputAlert'
}

export const Notification = () => (
  <InputAlert type="notification">
    {text(
      'Message',
      `This is an example of a long notification, these notifications should
          be used in order to give users an instruction, or make users aware of
          a consequence of their decision. These should be used only if
          needed.`
    )}
  </InputAlert>
)

Notification.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const Error = () => (
  <InputAlert type="alert">
    {text(
      'Message',
      `Error messages should be used to tell users both what the problem is
          and how they can resolve it. Error messages are best suited to
          senarios when users need to take action to continue.`
    )}
  </InputAlert>
)

Error.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Notification />
      <Error />
    </AllThemes>
  )
}
