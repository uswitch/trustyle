/** @jsx jsx */

import * as React from 'react'
// This ignore should be removed when types PR is merged
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
// @ts-ignore
import { css, jsx, useThemeUI } from 'theme-ui'
import { Direction, Glyph, Icon } from '@uswitch/trustyle.icon'

type PaginationNumbers = (number | '...')[]
interface SelectPages {
  [key: number]: number[]
}

const selectReducer = (
  pageNumbers: (number | '...')[],
  totalPages: number
): SelectPages =>
  pageNumbers.reduce<SelectPages>((r, current, i) => {
    if (current === '...') {
      const start = pageNumbers[i - 1] ? (pageNumbers[i - 1] as number) + 1 : 1
      const end = pageNumbers[i + 1]
        ? (pageNumbers[i + 1] as number)
        : totalPages + 1

      r[i] = Array.from<number>({ length: end - start }).map(
        (v, i) => i + start
      )
    }

    return r
  }, {})

function getNumbers(
  currentPage: number,
  totalPages: number,
  isMinimized: boolean = false
): PaginationNumbers {
  const AROUND_CURRENT = 1
  const END_LENGTH = isMinimized ? 2 : 5 + AROUND_CURRENT * 2

  if (totalPages <= END_LENGTH) {
    return new Array(totalPages).fill('').map((_, i) => i + 1)
  }

  if (isMinimized) {
    return currentPage < totalPages - 1
      ? [currentPage, currentPage + 1, '...']
      : currentPage === totalPages - 1
      ? ['...', currentPage, currentPage + 1]
      : ['...', currentPage - 1, currentPage]
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

const InlineIcon = ({
  direction,
  glyph = 'caret'
}: {
  direction: Direction
  glyph?: Glyph
}) => {
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
      <Icon glyph={glyph} color={color} direction={direction} size={14} />
    </span>
  )
}

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  currentPage: number
  totalPages: number
  onPageChange?: (
    number: number,
    e?: React.MouseEvent | React.ChangeEvent
  ) => any
  numberToLink?: (number: number) => string
  showFirstAndLastArrows?: boolean
  minimized?: boolean
  className?: string
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange = () => {},
  numberToLink,
  showFirstAndLastArrows = false,
  minimized = false,
  className
}) => {
  const { theme }: any = useThemeUI()
  const morePage = React.useRef<HTMLSelectElement | null>(null)

  const [numbers, setNumbers] = React.useState<PaginationNumbers>(
    getNumbers(currentPage, totalPages, minimized)
  )

  const [selectPages, setSelectPages] = React.useState<SelectPages>(
    selectReducer(numbers, totalPages)
  )

  React.useEffect(
    () => setNumbers(getNumbers(currentPage, totalPages, minimized)),
    [minimized, currentPage]
  )

  React.useEffect(() => setSelectPages(selectReducer(numbers, totalPages)), [
    numbers
  ])

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

  const selectStyling = {
    appearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    mx: 0,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: 'transparent',
    ':focus': {
      outline: 'none'
    },
    ':hover': {
      color: 'transparent'
    }
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
      {showFirstAndLastArrows && (
        <li
          sx={{
            ...theme.elements.pagination?.[
              currentPage === 1 ? 'arrowDisabled' : 'arrow'
            ],
            ...liStyling
          }}
        >
          {currentPage === 1 ? (
            <InlineIcon direction="left" glyph="caretFinal" />
          ) : (
            <a
              onClick={e => onPageChange(1, e)}
              href={numberToLink && numberToLink(1)}
              sx={anchorStyling}
            >
              <InlineIcon direction="left" glyph="caretFinal" />
            </a>
          )}
        </li>
      )}

      <li
        sx={{
          ...theme.elements.pagination?.[
            currentPage === 1 ? 'arrowDisabled' : 'arrow'
          ],
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
            <div
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {number}

              <select
                ref={morePage}
                onChange={e => {
                  onPageChange(parseInt(e.currentTarget.value), e)
                  e.currentTarget.value = '...'
                }}
                sx={{
                  ...theme.elements.pagination?.nonCurrentPage,
                  ...selectStyling
                }}
              >
                {selectPages[i]?.map(option => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
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
          ...theme.elements.pagination?.[
            currentPage === totalPages ? 'arrowDisabled' : 'arrow'
          ],
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

      {showFirstAndLastArrows && (
        <li
          sx={{
            ...theme.elements.pagination?.[
              currentPage === totalPages ? 'arrowDisabled' : 'arrow'
            ],
            ...liStyling
          }}
        >
          {currentPage === totalPages ? (
            <InlineIcon direction="right" glyph="caretFinal" />
          ) : (
            <a
              onClick={e => onPageChange(totalPages, e)}
              href={numberToLink && numberToLink(totalPages)}
              sx={anchorStyling}
            >
              <InlineIcon direction="right" glyph="caretFinal" />
            </a>
          )}
        </li>
      )}
    </ul>
  )
}

export default Pagination
