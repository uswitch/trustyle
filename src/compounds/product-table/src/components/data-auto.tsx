/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

interface FormattedText {
  size: 'big' | 'small'
  word: string
}

/**
 * Attempts to automatically format data. Bit of a hack - use formatted data
 * where possible.
 *
 * Doesn't work with all data, test before using.
 */
function autoFormat(text?: string): FormattedText[] {
  if (typeof text !== 'string') {
    return [{ size: 'small', word: '-' }]
  }

  return text
    .replace(/\b\//g, ' /')
    .split(/(?!\(.*)\s(?![^(]*?\))/g)
    .map(
      (word): FormattedText => ({
        word,
        size:
          !hasSubscript(word) && (/\d/.test(word) || word === '-')
            ? 'big'
            : 'small'
      })
    )
    .reduce((words, word, i) => {
      if (i !== 0 && word.size === words[words.length - 1].size) {
        words[words.length - 1].word += ` ${word.word}`
        return words
      }

      return words.concat(word)
    }, [] as FormattedText[])
}

const hasSubscript = (text: string) => {
  const subscript = /\(([^)]+)\)/.exec(text)
  return subscript
}

export interface DataAutoProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  headerImage?: boolean
}
const ProductTableDataAuto: React.FC<DataAutoProps> = ({
  text,
  headerImage
}) => {
  return (
    <div>
      {autoFormat(text).map(({ word, size }, index) =>
        size === 'small' ? (
          <span
            sx={{
              margin: '0 5px',
              variant: `compounds.product-table.${headerImage &&
                'variants.redesign.'}cellContent.content.small`
            }}
            key={index}
          >
            {word}
          </span>
        ) : (
          word
        )
      )}
    </div>
  )
}

const PlainProductTableDataAuto = (props: DataAutoProps) => {
  const { text } = props
  return text
}

export default ProductTableDataAuto
export const Rich = ProductTableDataAuto
export const Plain = PlainProductTableDataAuto
