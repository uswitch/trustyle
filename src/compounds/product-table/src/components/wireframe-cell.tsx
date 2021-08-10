/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from '../generics'
import ProductTable from '../index'

import { ROWS } from './cell-split'
// import { wireFrameCellCss } from '../../../../styles/src/wireframe-animation'

interface WireFrameCellProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: any
}

export const WireFrameCell: React.FC<WireFrameCellProps> = ({ styles }) => (
  <span
    // css={wireFrameCellCss}
    sx={{
      display: 'block',
      backgroundColor: 'grey-20',
      ...styles
    }}
  >
    <span
      className={'load'}
      sx={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    ></span>
  </span>
)

interface WireFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'header' | 'info' | 'example'
}

export const WireFrame: React.FC<WireFrameProps> = ({ type }) => {
  const containerStyles: {
    header: object
    info: object
  } = {
    header: { width: '100%' },
    info: { margin: '18px 0' }
  }

  const defaultStyles: {
    header: object
    info: object
    example: object
  } = {
    header: {
      width: ['93%', '35%'],
      height: '14px'
    },
    info: {
      height: '10px',
      width: ['90%', '70%'],
      marginLeft: '0',
      marginTop: '10px'
    },
    example: {
      height: '11px',
      width: ['90%', '70%'],
      marginLeft: '0',
      marginTop: '8px'
    }
  }

  const rowStyles: {
    header: any[]
    info: any[]
    example: any[]
  } = {
    header: [
      { ...defaultStyles.header },
      {
        ...defaultStyles.header,
        width: '45%',
        display: ['block', 'none'],
        marginTop: '11px',
        marginBottom: '20px'
      }
    ],
    info: [
      {
        ...defaultStyles.info,
        marginTop: '14px'
      },
      { ...defaultStyles.info },
      {
        ...defaultStyles.info,
        width: '45%',
        display: ['block', 'none']
      }
    ],
    example: [
      { ...defaultStyles.example },
      { ...defaultStyles.example },
      {
        ...defaultStyles.example,
        width: '86%',
        display: ['block', 'none']
      },
      {
        ...defaultStyles.example,
        width: '86%',
        display: ['block', 'none']
      },
      {
        ...defaultStyles.example,
        width: '25%',
        display: ['block', 'none']
      }
    ]
  }

  const contextProviderWrapper = (children: any, type: string) => {
    if (type === 'header') {
      return children
    }

    return (
      <CellContext.Provider
        value={{
          gridRowStart: ROWS + (type === 'info' ? 5 : 6),
          gridRowSpan: 1,
          gridColumnStart: 1,
          gridColumnSpan: 6
        }}
      >
        <ProductTable.cells.Base>{children}</ProductTable.cells.Base>
      </CellContext.Provider>
    )
  }

  return contextProviderWrapper(
    <div sx={(type !== 'example' && containerStyles[type]) || {}}>
      {rowStyles[type].map((item: object, key: number) => {
        return <WireFrameCell key={key} styles={item} />
      })}
    </div>,
    type
  )
}
