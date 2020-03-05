/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: Glyph
  title?: string
  text: string
}

const CallOut: React.FC<Props> = ({ title, text, icon }) => {
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
      sx={{
        borderRadius: 4,
        paddingX: 'sm',
        paddingY: 'sm',
        marginTop: 'xs',
        marginBottom: 'md',
        variant: 'callOut.main'
      }}
      px={{
        backgroundColor: 'accentColor'
      }}
    >
      {icon ? (
        <div sx={{ display: 'flex' }}>
          <div
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: ({ space }) => space.sm,
              marginRight: 'xs'
            }}
          >
            <div
              sx={{
                borderRadius: '50%',
                padding: '20%',
                variant: 'callOut.icon'
              }}
            >
              <Icon color="white" glyph={icon} />
            </div>
          </div>

          <div>{mainText}</div>
        </div>
      ) : (
        mainText
      )}
    </Palette>
  )
}

export default CallOut
