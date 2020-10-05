/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { useResponsiveValue } from '@theme-ui/match-media'

import AllThemes from '../../../utils/all-themes'

import Pagination from './'

const PaginationStory = ({ type }: any) => {
  const currentPageKnob = number('Current page', 15)
  const totalPages = number('Total pages', 100)
  const isMinimized = useResponsiveValue([true, false])

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
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      showFirstAndLastArrows
      minimized={isMinimized}
      {...props}
    />
  )
}

export default {
  title: 'Elements/Pagination'
}

export const ExampleWithOnclick = () => <PaginationStory type="onClick" />

ExampleWithOnclick.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithHref = () => <PaginationStory type="href" />

ExampleWithHref.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithBoth = () => <PaginationStory type="both" />

ExampleWithBoth.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money', 'journey', 'broadband-deals']}>
      <PaginationStory type="onClick" />
    </AllThemes>
  )
}
