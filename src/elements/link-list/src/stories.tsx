/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { LinkList, LinkListItem } from './'

storiesOf('Elements|Link List', module).add('primary variant', () => (
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
))
