/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ratingImg: React.ReactElement
  quote: string
  authorName: string
  authorImg?: React.ReactElement
}

const TestimonialCard: React.FC<Props> = ({
  ratingImg,
  quote,
  authorName,
  authorImg
}) => (
  <div sx={{ variant: 'compounds.testimonial-card' }}>
    <ratingImg.type {...ratingImg.props} />
    <Styled.h5>{quote}</Styled.h5>
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

      <Styled.p>{authorName}</Styled.p>
    </div>
  </div>
)

export default TestimonialCard
