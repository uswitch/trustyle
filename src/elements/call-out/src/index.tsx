/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: Glyph
  title?: string
  text: string
  orientation?: string
  bold?: boolean
  className?: string
}

const CallOut: React.FC<Props> = ({
  title,
  text,
  icon,
  orientation = 'left',
  bold = false,
  className
}) => {
  const flexDirection = orientation === 'left' ? 'row' : 'column'

  const mainText = (
    <React.Fragment>
      {title && (
        <Styled.h3
          sx={{
            marginTop: '-3px',
            marginBottom: 'xxs',
            variant: 'elements.call-out.heading'
          }}
        >
          {title}
        </Styled.h3>
      )}
      <Palette
        as={Styled.p}
        sx={{
          marginY: 0,
          variant: 'elements.call-out.text',
          fontWeight: bold ? 'bold' : 'normal'
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
        variant: 'elements.call-out.main'
      }}
      px={{
        backgroundColor: 'accentColor'
      }}
      className={className}
    >
      {icon ? (
        <div
          sx={{
            display: 'flex',
            flexDirection: flexDirection
          }}
        >
          <div
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: ({ space }: any) => space.sm,
              marginRight: 'xs',
              marginBottom: 'sm',
              variant: 'elements.call-out.icon-container'
            }}
          >
            <div
              sx={{
                borderRadius: '50%',
                padding: '20%',
                variant: 'elements.call-out.icon'
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
