/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'

import Faqs from './'

export default {
  title: 'Elements|FaqComponent'
}

export const FaqExample = () => {
  const faqContent = [
    {
      title: 'this is an accordion title',
      content: 'and this is some content'
    },
    { title: 'another title', content: 'and this is some more content' },
    { title: 'one more title', content: 'and this is even more great content' }
  ]
  return <Faqs faqTitle={'Faq title'} faqContents={faqContent} />
}
