import { css } from 'theme-ui'

export const CircularPercentageBarStyles = css({
  '.c100': {
    position: 'relative',
    float: 'left',
    margin: '0 0.1em 0.1em 0',
    width: '1em',
    height: '1em',
    'font-size': '120px',
    '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    'border-radius': '50%'
  },
  '.c100.xs': {
    'font-size': '64px'
  },
  '.c100.sm': {
    'font-size': '80px'
  },
  '.c100.md': {
    'font-size': '120px'
  },
  '.c100.lg': {
    'font-size': '160px'
  },
  '.c100.xl': {
    'font-size': '200px'
  },
  '.c100 .bar, .c100 .bar-full, .c100.gt50 .fill, .c100 .fill-full': {
    position: 'absolute',
    border: '0.08em solid #307bbb',
    width: '0.84em',
    height: '0.84em',
    clip: 'rect(0em, 0.5em, 1em, 0em)',
    '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    'border-radius': '50%'
  },
  '.c100.gt50 .bar:after, .c100.gt50 .fill, .c100 .bar-full:after, .c100 .fill-full': {
    '-webkit-transform': 'rotate(180deg)',
    '-moz-transform': 'rotate(180deg)',
    '-ms-transform': 'rotate(180deg)',
    '-o-transform': 'rotate(180deg)',
    transform: 'rotate(180deg)'
  },
  '.c100 *, .c100 *:before, .c100 *:after': {
    '-webkit-box-sizing': 'content-box',
    '-moz-box-sizing': 'content-box',
    'box-sizing': 'content-box'
  },
  '.c100 > span': {
    width: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    'z-index': '1',
    'line-height': '4em',
    'font-size': '0.25em',
    'text-align': 'center',
    'white-space': 'nowrap'
  },
  '.c100:after': {
    position: 'absolute',
    top: '0.08em',
    left: '0.08em',
    display: 'block',
    content: '" "',
    width: '0.84em',
    height: '0.84em',
    '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    'border-radius': '50%'
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
