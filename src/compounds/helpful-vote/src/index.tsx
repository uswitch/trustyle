/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
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

const getVariant = (element: string) => 'compounds.helpful-vote.' + element

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
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 'sm',
    minWidth: 144,
    borderWidth: 1,
    boxSizing: 'border-box',
    svg: {
      marginRight: 'xs'
    },
    span: {
      marginLeft: 'xxs',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'md',
      lineHeight: 'heading'
    },
    variant: getVariant('button')
  }

  return (
    <div
      sx={{
        maxWidth: 'fit-content',
        display: 'flex',
        flexDirection: ['column', 'row'],
        border: '1px solid',
        borderColor: 'grey-20',
        boxSizing: 'border-box',
        marginBottom: 'md',
        padding: ['sm', 'md'],
        justifyContent: 'space-between',
        variant: getVariant('container')
      }}
    >
      <div
        sx={{
          alignItems: 'center',
          marginRight: [0, 'md'],
          marginBottom: ['xs', 0],
          flex: 'none'
        }}
      >
        <Styled.h6
          sx={{
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 'md',
            lineHeight: 'heading',
            variant: getVariant('question')
          }}
        >
          {question}
        </Styled.h6>
      </div>
      <div sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onClick={confirmButton.onClick}
          sx={{ ...btnSx, marginRight: 'xs' }}
          variant={btnVariant}
        >
          {confirmButton.showIcon && (
            <Icon color="uswitch-navy" glyph="check" size={16} />
          )}
          <span>{confirmButton.text}</span>
        </Button>
        <Button onClick={dismissButton.onClick} sx={btnSx} variant={btnVariant}>
          {dismissButton.showIcon && (
            <Icon color="uswitch-navy" glyph="close" size={16} />
          )}
          <span>{dismissButton.text}</span>
        </Button>
      </div>
    </div>
  )
}

export default HelpfulVote
