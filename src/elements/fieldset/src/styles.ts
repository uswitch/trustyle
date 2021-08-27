import { css, SerializedStyles } from '@emotion/react'
import { typography } from '@uswitch/trustyle.styles'

export const root: SerializedStyles = css({
  border: 0
})

export const label: SerializedStyles = css([typography.label])
