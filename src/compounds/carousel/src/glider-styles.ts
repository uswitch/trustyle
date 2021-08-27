import { css } from '@emotion/react'

export const gliderStyles = css({
  '.glider-contain': {
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  },
  '.glider': {
    margin: '0 auto',
    position: 'relative',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    transform: 'translateZ(0)'
  },
  '.glider-track': {
    transform: 'translateZ(0)',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    zIndex: 1
  },
  '.glider.draggable': {
    userSelect: 'none',
    cursor: 'grab'
  },
  '.glider.draggable .glider-slide img': {
    userSelect: 'none',
    pointerEvents: 'none'
  },
  '.glider.drag': {
    cursor: 'grabbing'
  },
  '.glider-slide': {
    userSelect: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    minWidth: '150px'
  },
  '.glider-slide img': {
    maxWidth: '100%'
  },
  '.glider::-webkit-scrollbar': {
    opacity: 0,
    height: 0
  },
  '.glider-prev,.glider-next': {
    userSelect: 'none',
    position: 'absolute',
    outline: 'none',
    background: 'none',
    padding: 0,
    zIndex: 2,
    fontSize: '40px',
    textDecoration: 'none',
    left: '-23px',
    border: 0,
    top: '30%',
    cursor: 'pointer',
    color: '#666',
    opacity: 1,
    lineHeight: 1,
    transition:
      'opacity .5s cubic-bezier(.17,.67,.83,.67), color .5s cubic-bezier(.17,.67,.83,.67)'
  },
  '.glider-prev:hover, .glider-next:hover, .glider-prev:focus, .glider-next:focus': {
    color: '#a89cc8'
  },
  '.glider-next': {
    right: '-23px',
    left: 'auto'
  },
  '.glider-next.disabled, .glider-prev.disabled': {
    opacity: 0.25,
    color: '#666',
    cursor: 'default'
  },
  '.glider-hide': {
    opacity: 0
  },
  '.glider-dots': {
    userSelect: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px auto',
    padding: 0
  },
  '.glider-dot': {
    border: 0,
    padding: 0,
    userSelect: 'none',
    outline: 'none',
    display: 'block',
    cursor: 'pointer',
    color: '#d0d0d3',
    borderRadius: '50%',
    background: '#d0d0d3',
    width: '8px',
    height: '8px',
    margin: '4px'
  },
  '.glider-dot:hover': {
    background: '#898991'
  },
  '.glider-dot:focus, .glider-dot.active': {
    background: '#141424'
  }
})
