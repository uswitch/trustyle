/** @jsx jsx */

import * as React from 'react'
// This ignore should be removed when types PR is merged
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
// @ts-ignore
import { css, jsx, useThemeUI } from 'theme-ui'
import { Direction, Icon } from '@uswitch/trustyle.icon'

type PaginationNumbers = (number | '...')[]

function getNumbers(
  currentPage: number,
  totalPages: number
): PaginationNumbers {
  const AROUND_CURRENT = 1
  const END_LENGTH = 5 + AROUND_CURRENT * 2

  if (totalPages <= END_LENGTH) {
    return new Array(totalPages).fill('').map((_, i) => i + 1)
  }

  const numbers: PaginationNumbers = [1]

  if (currentPage > 2 + AROUND_CURRENT) {
    // The ternary is so that we don't end up with 1 … 3
    numbers.push(currentPage === 3 + AROUND_CURRENT ? 2 : '...')
  }

  for (
    let i = currentPage - AROUND_CURRENT;
    i <= currentPage + AROUND_CURRENT;
    i++
  ) {
    if (i > 1 && i < totalPages) {
      numbers.push(i)
    }
  }

  if (currentPage < totalPages - (1 + AROUND_CURRENT)) {
    numbers.push(
      currentPage === totalPages - (2 + AROUND_CURRENT) ? totalPages - 1 : '...'
    )
  }

  numbers.push(totalPages)

  // This is to ensure that the pagination always has the same number of links,
  // even if the currentPage is at the start or end
  const isFirstHalf = currentPage < totalPages / 2
  for (let i = numbers.length; i < END_LENGTH; i++) {
    const dotsIndex = numbers.indexOf('...')
    const prevNumber = numbers[dotsIndex + (isFirstHalf ? -1 : 1)] as number
    const newNumber = prevNumber + (isFirstHalf ? 1 : -1)
    numbers.splice(dotsIndex + (isFirstHalf ? 0 : 1), 0, newNumber)
  }

  return numbers
}

const InlineIcon = ({ direction }: { direction: Direction }) => {
  const { theme }: any = useThemeUI()

  let color = 'black'
  if (theme.elements.pagination) {
    // This step is necessary as the icon component doesn't support themes yet
    const processedTheme: any = css(theme.elements.pagination)(theme)
    if (processedTheme.arrow && processedTheme.arrow.color) {
      color = processedTheme.arrow.color
    }
  }

  return (
    <span sx={{ svg: { display: 'inline-block' } }}>
      <Icon glyph="caret" color={color} direction={direction} size={14} />
    </span>
  )
}

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  currentPage: number
  totalPages: number
  onPageChange?: (number: number, e?: React.MouseEvent) => any
  numberToLink?: (number: number) => string
  className?: string
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange = () => {},
  numberToLink,
  className
}) => {
  const { theme }: any = useThemeUI()

  const numbers = getNumbers(currentPage, totalPages)

  const liStyling = {
    display: 'inline-block',
    padding: 'xs',
    variant: 'elements.pagination.li'
  }

  const anchorStyling = {
    color: 'inherit',
    textDecoration: 'none',
    borderBottom: 0,
    cursor: 'pointer'
  }

  return (
    <ul
      sx={{
        listStyleType: 'none',
        marginLeft: 0,
        paddingLeft: 0,
        variant: 'elements.pagination'
      }}
      className={className}
    >
      <li
        sx={{
          ...(currentPage === 1 && theme.elements.pagination?.arrowDisabled),
          ...liStyling
        }}
      >
        {currentPage === 1 ? (
          <InlineIcon direction="left" />
        ) : (
          <a
            onClick={e => onPageChange(currentPage - 1, e)}
            href={numberToLink && numberToLink(currentPage - 1)}
            sx={anchorStyling}
          >
            <InlineIcon direction="left" />
          </a>
        )}
      </li>
      {numbers.map((number, i) => (
        <li
          key={i}
          sx={{
            ...(number === currentPage
              ? theme.elements.pagination?.currentPage
              : theme.elements.pagination?.nonCurrentPage),
            ...liStyling
          }}
        >
          {number === '...' ? (
            number
          ) : (
            <a
              onClick={e => onPageChange(number, e)}
              href={numberToLink && numberToLink(number)}
              sx={anchorStyling}
            >
              {number}
            </a>
          )}
        </li>
      ))}
      <li
        sx={{
          ...(currentPage === totalPages &&
            theme.elements.pagination?.arrowDisabled),
          ...liStyling
        }}
      >
        {currentPage === totalPages ? (
          <InlineIcon direction="right" />
        ) : (
          <a
            onClick={e => onPageChange(currentPage + 1, e)}
            href={numberToLink && numberToLink(currentPage + 1)}
            sx={anchorStyling}
          >
            <InlineIcon direction="right" />
          </a>
        )}
      </li>
    </ul>
  )
}

export default Pagination
