/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'
// @ts-ignore
import { Badge } from '@uswitch/spark.badge'
import { UswReceiptFill } from '@uswitch/spark-icons/usw'

import { AwardIcon } from './helper'
import * as st from './styles'

export interface UspBroadbandProps {
  label: string
  color: string
  styling?: ThemeUIStyleObject
  hideIcon?: boolean
}

export const UspBroadband: React.FC<UspBroadbandProps> = ({
  label,
  color,
  hideIcon
}) => {
  const [icon, setIcon] = React.useState<JSX.Element | undefined>(undefined)

  React.useEffect(() => {
    if (color === 'black-friday') {
      setIcon(<UswReceiptFill color="#ffd555" />)
    }
    if (color === 'award') {
      setIcon(<AwardIcon />)
    }
  }, [color])

  return (
    <Badge
      leftIcon={hideIcon ? undefined : icon}
      size="medium"
      sx={st.generateBadgeStyle({ color })}
    >
      <div className="usp-label">{label}</div>
    </Badge>
  )
}

export default UspBroadband
