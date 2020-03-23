/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../../../elements/icon/src'
import { ButtonLink } from '../../../elements/button-link/src'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  image: React.ReactElement
  firstInfoBlock: React.ReactElement
  secondInfoBlock: React.ReactElement
  uspTag: React.ReactElement
}

const MobileAd: React.FC<Props> = ({
  title,
  image,
  firstInfoBlock,
  secondInfoBlock,
  uspTag
}) => {
  return (
    <div
      sx={{
        width: 345,
        height: 245,
        border: '1px solid grey-30'
      }}
    >
      <div
        sx={{
          display: 'flex'
        }}
      >
        {image && (
          <image.type
            {...image.props}
            sx={{
              width: 59.72,
              height: 100,
              marginLeft: 12,
              marginTop: -19
            }}
          />
        )}
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginX: 8
          }}
        >
          <p
            sx={{
              fontSize: 'xxs',
              color: 'grey-60',
              marginBottom: 0
            }}
          >
            Sponsored
          </p>
          <p
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              marginTop: 'xs'
            }}
          >
            {title}
          </p>
        </div>
        <ButtonLink
          variant="primary"
          href="https://www.uswitch.com/mobiles/"
          target="_blank"
          sx={{
            padding: 0,
            width: 32,
            height: 48,
            marginTop: 16,
            marginRight: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon
            color="white"
            direction="right"
            glyph="caret"
            size={20}
            sx={{
              flexShrink: 0
            }}
          />
        </ButtonLink>
      </div>
      <div
        sx={{
          display: 'flex',
          marginBottom: 'sm'
        }}
      >
        {firstInfoBlock && (
          <div
            sx={{
              flex: 1,
              marginRight: 4
            }}
          >
            {firstInfoBlock}
          </div>
        )}
        {secondInfoBlock && (
          <div
            sx={{
              flex: 1,
              marginLeft: 4
            }}
          >
            {secondInfoBlock}
          </div>
        )}
      </div>
      {uspTag}
    </div>
  )
}

export default MobileAd
