/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface FaqContent {
  title: string
  content: string
}

interface Props {
  faqTitle: string
  faqContents: FaqContent[]
}

const Faqs: React.FC<Props> = ({ faqTitle, faqContents = [] }) => {
  return (
    <div>
      <h3 sx={{ margin: '8px 0' }}>{faqTitle}</h3>
      {faqContents.map(({ title, content }, i) => (
        <Accordion title={title} key={i}>
          {content}
        </Accordion>
      ))}
    </div>
  )
}

export default Faqs
