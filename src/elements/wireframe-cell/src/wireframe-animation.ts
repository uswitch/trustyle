import { css, keyframes, SerializedStyles } from '@emotion/core'

const loading = keyframes`
  0% {
    background-position: -200px
  }
  100% {
    background-position: 300px
  }
`

export const wireFrameCellCss: SerializedStyles = css({
  '.load': {
    backgroundImage: 'linear-gradient(to right, #F2F2F3, #DFDFE1, #F2F2F3)',
    backgroundSize: '510px',
    animation: `${loading} 1s infinite ease`
  }
})
