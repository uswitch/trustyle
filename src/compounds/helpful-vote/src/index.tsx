/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Button, Variant } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

interface Button {
  text: string
  showIcon?: boolean
  onClick?: () => void
}

interface Props {
  confirmButton?: Button
  dismissButton?: Button
  question?: string
}
const HelpfulVote: React.FC<Props> = ({
  confirmButton = {
    text: 'Yes',
    showIcon: false
  },
  dismissButton = {
    text: 'No',
    showIcon: false
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
      marginRight: 'xs'
    },
    variant: 'compounds.helpful-vote.button'
  }

  const btnContent = {
    display: 'flex',
    alignItems: 'center'
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
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: 'md',
        lineHeight: 'heading',
        variant: 'compounds.helpful-vote.container'
      }}
    >
      <div
        sx={{
          marginRight: ['sm', 'md'],
          flex: 'none',
          marginBottom: ['md', 0]
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
          sx={{ ...btnSx, marginRight: 'xs' }}
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
