/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: Glyph
  title?: string
  text: string
}

const CallOut: React.FC<Props> = ({ title, text, icon }) => {
  const { theme }: any = useThemeUI()

  const mainText = (
    <React.Fragment>
      {title && (
        <Styled.h3
          sx={{
            marginTop: '-3px',
            marginBottom: 'xxs',
            ...theme.callOut?.heading
          }}
        >
          {title}
        </Styled.h3>
      )}
      <Styled.p sx={{ marginY: 0, ...theme.callOut?.text }}>{text}</Styled.p>
    </React.Fragment>
  )

  return (
    <div
      sx={{
        borderRadius: 4,
        paddingX: 'sm',
        paddingY: 'sm',
        ...theme.callOut?.main
      }}
    >
      {icon ? (
        <div sx={{ display: 'flex' }}>
          <div sx={{ flex: '0 0 16px', marginRight: '8px' }}>
            <div
              sx={{
                backgroundColor: 'primary',
                borderRadius: '50%',
                padding: '20%',
                ...theme.callOut?.icon
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
    </div>
  )
}

export default CallOut
