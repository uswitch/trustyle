/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<any> {
  icon: React.ReactNode
}
const IconTile: React.FC<Props> = ({ icon, children }) => {
  return (
    <div
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: 136,
        backgroundColor: 'white',
        padding: 'sm',
        paddingTop: 0,
        textAlign: 'center',
        borderRadius: 8,
        color: 'grey-100',
        textDecoration: 'none'
      }}
    >
      <div
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {icon}
      </div>
      <Styled.p sx={{ fontSize: 'md', marginY: 0 }}>{children}</Styled.p>
    </div>
  )
}

export default IconTile
