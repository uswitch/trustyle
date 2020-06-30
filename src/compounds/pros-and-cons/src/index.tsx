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
      fontSize: 'md',
      lineHeight: 'heading',
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
      marginX: 0,
      marginY: 'xs',
      svg: {
        marginRight: 'xs'
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
  <Col span={1} sx={{ marginBottom: ['md', 0], variant: getVariant('column') }}>
    {title &&
      Text(title, 'grey-60', {
        marginBottom: ['xs', 'sm'],
        variant: getVariant('title')
      })}
    <div
      sx={{
        backgroundColor: 'grey-05',
        paddingY: 'md',
        paddingX: ['sm', 'md'],
        variant: getVariant('column.background')
      }}
    >
      {items.map(item => listItem(item, color))}
    </div>
  </Col>
)

const ProsAndCons: React.FC<Props> = ({ pros, cons }) => (
  <Container>
    <Row cols={[1, 2]}>
      {getColumnList('green', pros)}
      {getColumnList('red', cons)}
    </Row>
  </Container>
)

export default ProsAndCons
