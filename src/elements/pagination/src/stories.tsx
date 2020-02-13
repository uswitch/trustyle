/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Pagination from './'

const PaginationStory = ({ type }: any) => {
  const currentPageKnob = number('Current page', 5)
  const totalPages = number('Total pages', 10)

  const [currentPage, setCurrentPage] = React.useState(currentPageKnob)

  const handlePageChange = (number: number) => {
    action(`number clicked: ${number}`)()
    setCurrentPage(number)
  }

  let props: any = {}
  if (type === 'onClick') {
    props.onPageChange = handlePageChange
  } else {
    props.numberToLink = (number: number) => `http://uswitch.com/page/${number}`

    if (type === 'both') {
      props.onPageChange = (number: number, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(number)
      }
    }
  }

  return (
    <Pagination currentPage={currentPage} totalPages={totalPages} {...props} />
  )
}

storiesOf('Elements|Pagination', module)
  .add('Example with onClick', () => <PaginationStory type="onClick" />)
  .add('Example with href', () => <PaginationStory type="href" />)
  .add('Example with both', () => <PaginationStory type="both" />)
