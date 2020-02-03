/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface Props {
  source: string
  allowFullScreen?: boolean
  hasAccordion?: boolean
  accordionTitle?: string
  accordionContent?: string
}

const EmbeddedVideo: React.FC<Props> = ({
  source,
  allowFullScreen = true,
  hasAccordion = true,
  accordionTitle = '',
  accordionContent = ''
}) => (
  <div>
    <div
      sx={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: '56.25%',
        overflow: 'hidden',
        maxWidth: '100%'
      }}
    >
      <iframe
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%'
        }}
        src={source}
        frameBorder="0"
        allowFullScreen={allowFullScreen}
      />
    </div>
    {hasAccordion && (
      <Accordion title={accordionTitle}>{accordionContent}</Accordion>
    )}
  </div>
)

export default EmbeddedVideo
