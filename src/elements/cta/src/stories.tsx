/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import CTA from './'

export default {
  title: 'Elements|CTA'
}

export const Example = () => {
  const titleText = text(
    'CTA title',
    'Find the best credit card for your needs'
  )
  const textText = text(
    'CTA text',
    "Find the best credit card for you, whether you're looking for a 0% card for balance transfers or purchases or day to day spending and rewards."
  )
  const buttonText = text('Button text', 'Compare credit cards')

  return (
    <div css={css({ padding: 10 })}>
      <CTA
        title={titleText}
        text={textText}
        buttonText={buttonText}
        buttonLink="https://google.com"
      />
    </div>
  )
}
