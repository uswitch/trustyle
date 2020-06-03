/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { number } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import { LinkList, LinkListItem } from './'

export default {
  title: 'Elements|Link List'
}

export const PrimaryVariant = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <LinkList title="Link list">
      <LinkListItem href="https://www.jonathanfielding.com">
        Jonathans Blog
      </LinkListItem>
      <LinkListItem href="https://www.performancebudget.io">
        Performance Budget Tool
      </LinkListItem>
      <LinkListItem href="https://www.duckduckgo.com">
        Ethical search engine
      </LinkListItem>
    </LinkList>
  </div>
)

PrimaryVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <PrimaryVariant />
    </AllThemes>
  )
}
