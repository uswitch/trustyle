/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { boolean, number, select, text } from '@storybook/addon-knobs'

import CallOut from './'

export default {
  title: 'Elements|Call Out'
}

export const ExampleAndSnapshot = () => {
  const padding = number('Padding', 10)
  const titleText = text(`Call out title`, `This is a call out`)
  const textText = text(
    `Call out text`,
    `Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.`
  )
  const showIcon = boolean('Show icon?', true)
  const iconGlyph = select(
    'Icon',
    ['arrow', 'caret', 'close', 'edit', 'email'],
    'close'
  )

  return (
    <div css={css({ padding })}>
      <CallOut
        title={titleText}
        text={textText}
        icon={showIcon ? iconGlyph : undefined}
      />
    </div>
  )
}
