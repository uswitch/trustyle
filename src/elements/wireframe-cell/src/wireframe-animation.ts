import { css, keyframes, SerializedStyles } from '@emotion/react'

const loading = keyframes`
  0% {
    background-position: 100% 0
  }
  100% {
    background-position: -100% 0
  }
`

export const wireFrameCellCss: SerializedStyles = css({
  '.load': {
    backgroundImage: 'linear-gradient(to right, #DFDFE1, #F2F2F3, #DFDFE1)',
    backgroundSize: '200% 100px',
    animation: `${loading} 1.5s infinite ease`
  }
})
