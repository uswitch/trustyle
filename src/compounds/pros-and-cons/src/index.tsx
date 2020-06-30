/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'
import { Icon } from '@uswitch/trustyle.icon'

type Color = 'green' | 'red'

export interface ItemsList {
  items: string[]
  title?: string
}

interface Props {
  pros: ItemsList
  cons: ItemsList
}

const getVariant = (element: string) => 'compounds.pros-and-cons.' + element

const Text = (text: string, color: string, sx?: any) => (
  <div
    sx={{
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 1.3,
      color,
      ...sx
    }}
  >
    {text}
  </div>
)

const listItem = (item: string, color: Color) => (
  <div
    sx={{
      display: 'flex',
      margin: '9px 0px',
      svg: {
        marginRight: 12
      }
    }}
  >
    <Icon
      color={color}
      glyph={color === 'green' ? 'tick' : 'cross'}
      size={24}
    />
    {Text(item, 'uswitch-navy', { variant: getVariant('item') })}
  </div>
)

const getColumnList = (color: Color, { items, title }: ItemsList) => (
  <Col span={1} sx={{ marginBottom: [24, 0], variant: getVariant('column') }}>
    {title &&
      Text(title, 'grey-60', {
        marginBottom: [8, 16],
        variant: getVariant('title')
      })}
    <div
      sx={{
        backgroundColor: 'grey-05',
        padding: ['15.5px 19px', '18px 27px'],
        variant: getVariant('column.background')
      }}
    >
      {items.map(item => listItem(item, color))}
    </div>
  </Col>
)

const ProsAndCons: React.FC<Props> = ({ pros, cons }) => (
  <Container
    sx={{
      '*': { fontFamily: 'Helvetica' }
    }}
  >
    <Row cols={[1, 2]}>
      {getColumnList('green', pros)}
      {getColumnList('red', cons)}
    </Row>
  </Container>
)

export default ProsAndCons
