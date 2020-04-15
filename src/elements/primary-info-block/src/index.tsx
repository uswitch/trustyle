/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: string
  value: string
  label: string
  suffix?: string
  className?: string
}

const valueWithDecimals = (value: string) => {
  const valueInt = value.split('.')[0]
  const valueDecimals = value.split('.')[1]

  return (
    <span>
      {valueInt}.<small>{valueDecimals}</small>
    </span>
  )
}

const renderValue = (value: string) => {
  if (value.includes('.')) {
    return valueWithDecimals(value)
  } else if (isNaN(parseInt(value))) {
    return <span sx={{ fontSize: 'xs' }}>{value}</span>
  } else {
    return value
  }
}

const PrimaryInfoBlock: React.FC<Props> = ({
  prefix,
  value,
  label,
  suffix,
  className = ''
}) => {
  const mainText = (
    <React.Fragment>
      <strong
        sx={{
          fontFamily: 'heading',
          fontSize: 'xl',
          lineHeight: 'heading'
        }}
      >
        {prefix}
        {renderValue(value)}
      </strong>
      {suffix && (
        <small
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold'
          }}
        >
          {suffix}
        </small>
      )}
      {label && (
        <p
          sx={{
            fontFamily: 'base',
            fontWeight: 'base',
            fontSize: 'xs',
            color: 'grey-80',
            margin: 0
          }}
        >
          {label}
        </p>
      )}
    </React.Fragment>
  )

  return (
    <div
      className={className}
      sx={{
        padding: 'sm',
        backgroundColor: 'grey-05',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div>{mainText}</div>
    </div>
  )
}

export default PrimaryInfoBlock
