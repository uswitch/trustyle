/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import Accordion from '../../accordion/src'

interface Props {
  source: string
  frameborder?: number
  allowFullScreen?: boolean
}

export const EmbeddedVideo: React.FC<Props> = ({
  source,
  frameborder = 0,
  allowFullScreen = true
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
        frameBorder={frameborder}
        allowFullScreen={allowFullScreen}
      />
    </div>
    <Accordion title="accordion title">accordion content</Accordion>
  </div>
)
