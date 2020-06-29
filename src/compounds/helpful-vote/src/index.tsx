/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Button, Variant } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

export interface ButtonProps {
  text: string
  showIcon?: boolean
  onClick?: () => void
}

interface Props {
  confirmButton?: ButtonProps
  dismissButton?: ButtonProps
  question?: string
}
const HelpfulVote: React.FC<Props> = ({
  confirmButton = {
    text: 'Yes',
    showIcon: true
  },
  dismissButton = {
    text: 'No',
    showIcon: true
  },
  question = 'Did you find this guide useful?'
}) => {
  const btnVariant: Variant = 'secondary'
  const btnSx = {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    border: 'none',
    svg: {
      marginRight: 12
    },
    backgroundColor: 'grey05-hover',
    padding: 'sm',
    fontFamily: 'sofia-pro, -apple-system, sans-serif',
    fontWeight: 'bold',
    variant: 'compounds.helpful-vote.button'
  }
  const btnContent = {
    display: 'flex',
    alignItems: 'center',
    color: 'uswitch-navy'
  }

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        alignItems: 'center',
        padding: ['sm', 'md'],
        border: '1px solid',
        width: '100%',
        height: 'fit-content',
        boxSizing: 'border-box',
        maxWidth: 611,
        minHeight: 104,
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: 'md',
        lineHeight: 'heading',
        borderColor: 'grey-20',
        color: '#000000',
        variant: 'compounds.helpful-vote.container'
      }}
    >
      <div
        sx={{
          marginRight: ['sm', 'md'],
          flex: 'none',
          marginBottom: ['md', 0],
          fontFamily: 'Helvetica',
          variant: 'compounds.helpful-vote.question'
        }}
      >
        {question}
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          variant: 'compounds.helpful-vote.button.container'
        }}
      >
        <Button
          onClick={confirmButton.onClick}
          sx={{ ...btnSx, marginRight: 8 }}
          variant={btnVariant}
        >
          <div sx={btnContent}>
            {confirmButton.showIcon && (
              <Icon color="uswitch-navy" glyph="check" size={16} />
            )}
            {confirmButton.text}
          </div>
        </Button>
        <Button onClick={dismissButton.onClick} sx={btnSx} variant={btnVariant}>
          <div sx={btnContent}>
            {dismissButton.showIcon && (
              <Icon color="uswitch-navy" glyph="close" size={16} />
            )}
            {dismissButton.text}
          </div>
        </Button>
      </div>
    </div>
  )
}

export default HelpfulVote
