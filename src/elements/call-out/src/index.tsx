/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  text: string
}

const CallOut: React.FC<Props> = ({ title, text }) => {
  const mainText = (
    <React.Fragment>
      {title && (
        <Styled.h3
          sx={{
            marginTop: '-3px',
            marginBottom: 'xxs',
            variant: 'callOut.heading'
          }}
        >
          {title}
        </Styled.h3>
      )}
      <Palette
        as={Styled.p}
        sx={{
          marginY: 0,
          variant: 'callOut.text'
        }}
        px={{
          color: 'accentColorText'
        }}
      >
        {text}
      </Palette>
    </React.Fragment>
  )

  return (
    <Palette
      as="div"
      sx={{ variant: 'callOut.main' }}
      px={{
        backgroundColor: 'accentColor'
      }}
    >
      {mainText}
    </Palette>
  )
}

export default CallOut
