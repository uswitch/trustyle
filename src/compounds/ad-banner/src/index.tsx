/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Button } from '@uswitch/trustyle.button'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content: string
  usp: string
  provider: { logo: string; name: string }
}

const AdBanner: React.FC<Props> = ({ title, content, usp, provider }) => {
  return (
    <div
      sx={{
        border: '2px solid red',
        backgroundColor: 'blue'
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div
          sx={{
            maxWidth: '148px'
          }}
        >
          <img
            src={provider.logo}
            alt={provider.name}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        </div>
        <h1
          sx={{
            fontFamily: 'heading',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: ['md', 'xxl'],
            textAlign: 'center',
            border: '2px solid green',
            marginX: 'md'
          }}
        >
          {title}
        </h1>
        <p
          sx={{
            fontFamily: 'heading',
            fontSize: 'xs',
            marginX: 'md',
            border: '2px solid green',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          {content}
        </p>
        <p
          sx={{
            fontFamily: 'heading',
            fontSize: 'xs',
            marginY: 0,
            textAlign: 'center',
            fontWeight: 'light'
          }}
        >
          {usp}
        </p>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  )
}

export default AdBanner
