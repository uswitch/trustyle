/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface DataRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  from: string
  to: string
  helpText?: string
}
const RateTableDataRange: React.FC<DataRangeProps> = ({
  from,
  to,
  helpText
}) => (
  <div>
    <p>
      {from} to {to}
    </p>
    {helpText && <a>?</a>}
  </div>
)

export default RateTableDataRange
