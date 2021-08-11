import { css } from 'theme-ui'

export const CircularPercentageBarStyles = css({
  '.c100': {
    position: 'relative',
    float: 'left',
    width: '1em',
    height: '1em',
    fontSize: '120px',
    borderRadius: '50%'
  },
  '.c100.xs': {
    fontSize: '64px'
  },
  '.c100.sm': {
    fontSize: '80px'
  },
  '.c100.md': {
    fontSize: '120px'
  },
  '.c100.lg': {
    fontSize: '160px'
  },
  '.c100.xl': {
    fontSize: '200px'
  },
  '.c100 .bar, .c100 .bar-full, .c100.gt50 .fill, .c100 .fill-full': {
    position: 'absolute',
    border: '0.08em solid #307bbb',
    width: '0.84em',
    height: '0.84em',
    clip: 'rect(0em, 0.5em, 1em, 0em)',
    borderRadius: '50%'
  },
  '.c100.gt50 .bar:after, .c100.gt50 .fill, .c100 .bar-full:after, .c100 .fill-full': {
    transform: 'rotate(180deg)'
  },
  '.c100 *, .c100 *:before, .c100 *:after': {
    boxSizing: 'content-box'
  },
  '.c100 > span': {
    width: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    zIndex: 1,
    lineHeight: '4em',
    fontSize: '0.25em',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  '.c100:after': {
    position: 'absolute',
    top: '0.08em',
    left: '0.08em',
    display: 'block',
    content: '" "',
    width: '0.84em',
    height: '0.84em',
    borderRadius: '50%'
  },
  '.c100 .slice, .c100 .slice-full': {
    position: 'absolute',
    width: '1em',
    height: '1em',
    clip: 'rect(0em, 1em, 1em, 0.5em)'
  },
  '.c100.gt50 .slice, .c100 .slice-full': {
    clip: 'rect(auto, auto, auto, auto)'
  }
})
