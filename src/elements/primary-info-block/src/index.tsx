/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: string
  value: string
  label: string
  suffix?: string
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
  } else {
    return value
  }
}

const PrimaryInfoBlock: React.FC<Props> = ({
  prefix,
  value,
  label,
  suffix
}) => {
  const mainText = (
    <React.Fragment>
      <strong
        sx={{
          fontFamily: 'heading',
          fontSize: 'xl'
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
      sx={{
        padding: 'sm',
        backgroundColor: 'grey-05',
        display: 'flex',
        alignItems: 'center',
        height: 84
      }}
    >
      <div>{mainText}</div>
    </div>
  )
}

export default PrimaryInfoBlock
