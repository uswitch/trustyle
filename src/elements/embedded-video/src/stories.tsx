/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'

import EmbeddedVideo from './'

const UswitchAdvert = 'https://www.youtube.com/embed/1cy0Buice_0'

storiesOf('Elements|Embedded-video', module)
  .add('primary variant', () => (
    <EmbeddedVideo
      source={UswitchAdvert}
      accordionTitle="Accordion Title"
      accordionContent="Accordion content"
    />
  ))
  .add('Video without accordion', () => (
    <EmbeddedVideo source={UswitchAdvert} hasAccordion={false} />
  ))
