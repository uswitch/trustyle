/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<any> {
  icon: React.ReactNode
  className?: string
}
const IconTile: React.FC<Props> = ({ icon, children, className }) => {
  return (
    <div
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        height: [136, 136, 95],
        backgroundColor: 'white',
        padding: ['sm', 'sm', 'lg'],
        paddingTop: 0,
        textAlign: 'center',
        borderRadius: 8,
        color: 'grey-100',
        textDecoration: 'none',
        variant: 'elements.icon-tile.main',
        ':hover': {
          opacity: 0.9
        },
        alignItems: 'center'
      }}
      className={className}
    >
      <div
        sx={{
          flex: [1, null, 0],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {icon}
      </div>
      <Styled.p
        sx={{
          flex: [null, null, 1],
          fontSize: 'md',
          marginY: 0,
          variant: 'elements.icon-tile.text'
        }}
      >
        {children}
      </Styled.p>
    </div>
  )
}

export default IconTile
