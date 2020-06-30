/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
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

const listItem = (item: string, color: Color) => (
  <div
    sx={{
      display: 'flex',
      margin: '8px 0px',
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
    {item}
  </div>
)

const getColumnList = (color: Color, { items, title }: ItemsList) => (
  <Col span={1}>
    {title && <Styled.h6>{title}</Styled.h6>}
    <div
      sx={{
        backgroundColor: 'grey-05',
        padding: ['16.5px 19px', '19px']
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
