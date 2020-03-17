/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'
import Breadcrumbs from '@uswitch/trustyle.breadcrumbs'

import Category from './'

storiesOf('Elements|Category', module)
  .add('example with text', () => {
    const titleText = text('Title text', 'Title goes here')
    const textText = text('Text', 'Text goes here')

    const crumbs = [
      {
        fields: {
          path: '/',
          displayText: 'Home'
        }
      },
      {
        fields: {
          path: '/gas-electricity/',
          displayText: 'Gas & Electricity'
        }
      },
      {
        fields: {
          path: '/gas-electricity/guides',
          displayText: 'Guides'
        }
      }
    ]

    const ExampleBreadcrumbs = (
      <Breadcrumbs
        crumbs={crumbs}
        title="Understanding energy bills and electricity bills - FAQs and more"
      />
    )

    return (
      <Category
        title={titleText}
        text={textText}
        breadcrumbs={ExampleBreadcrumbs}
      />
    )
  })
  .add('example without text', () => {
    const titleText = text('Title text', 'Title goes here')

    return <Category title={titleText} />
  })
  .add('example with custom container', () => {
    const titleText = text('Title text', 'Title goes here')
    const containerWidth = number('Container width', 200)
    const Container: React.FC = ({ children }) => (
      <div style={{ width: containerWidth, margin: '0 auto' }}>{children}</div>
    )

    return <Category title={titleText} container={Container} />
  })
