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
  autoPlay?: boolean
}

const vimeoParameters = '?autoplay=1&loop=1&muted=1&background=1'
const youtubeParameters =
  '?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1'

const youtubeVideoId = (url: string) => {
  return url.slice(-11)
}

const constructUrl = (url: string) => {
  return url.includes('youtube')
    ? `${url}${youtubeParameters}&playlist=${youtubeVideoId(url)}`
    : url + vimeoParameters
}

const EmbeddedVideo: React.FC<Props> = ({
  source,
  allowFullScreen = true,
  hasAccordion = true,
  accordionTitle = '',
  accordionContent = '',
  autoPlay = false
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
        src={autoPlay ? constructUrl(source) : source}
        frameBorder="0"
        allowFullScreen={allowFullScreen}
        allow="autoplay"
      />
    </div>
    {hasAccordion && (
      <Accordion title={accordionTitle}>{accordionContent}</Accordion>
    )}
  </div>
)

export default EmbeddedVideo
