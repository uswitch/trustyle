/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ratingImg: React.ReactElement
  quote: string
  authorName: string
  authorImg?: React.ReactElement
  className?: string
}

const TestimonialCard: React.FC<Props> = ({
  ratingImg,
  quote,
  authorName,
  authorImg,
  className
}) => (
  <div sx={{ variant: 'compounds.testimonial-card' }} className={className}>
    <ratingImg.type {...ratingImg.props} />
    <Themed.h5>{quote}</Themed.h5>
    <div sx={{ variant: 'compounds.testimonial-card.author' }}>
      <div
        sx={{ variant: 'compounds.testimonial-card.author-image-container' }}
      >
        {authorImg ? (
          <authorImg.type {...authorImg.props} />
        ) : (
          <div
            sx={{ variant: 'compounds.testimonial-card.author-placeholder' }}
          >
            <Icon glyph={'person'} color={'#141424'} size={24} />
          </div>
        )}
      </div>

      <Themed.p>{authorName}</Themed.p>
    </div>
  </div>
)

export default TestimonialCard
