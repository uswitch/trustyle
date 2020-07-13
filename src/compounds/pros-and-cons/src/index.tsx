/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { Palette } from '@uswitch/trustyle-utils.palette'

enum Colors {
  green,
  red
}

export interface ItemsList {
  items: string[]
  title?: string
}

interface Props {
  pros: ItemsList
  cons: ItemsList
}

const getVariant = (element: string) => 'compounds.pros-and-cons.' + element
const Text = (text: string, color: string, sx?: any, px?: any) => (
  <Palette
    as={Styled.div}
    sx={{
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'md',
      lineHeight: 'heading',
      color,
      ...sx
    }}
    px={{
      ...px
    }}
  >
    {text}
  </Palette>
)

const gylphs = {
  [Colors.green]: 'tick',
  [Colors.red]: 'cross'
}

const listItem = (item: string, color: Colors) => (
  <div
    sx={{
      display: 'flex',
      marginX: 0,
      alignItems: 'center',
      marginY: 'xs',
      svg: {
        marginRight: 'xs',
        maxHeight: 18,
        maxWidth: 18,
        height: '100%',
        width: '100%'
      }
    }}
  >
    <Icon color={Colors[color]} glyph={gylphs[color] as Glyph} size={24} />
    {Text(
      item,
      'uswitch-navy',
      { fontFamily: 'body', variant: getVariant('item') },
      { color: 'textColor' }
    )}
  </div>
)

const getColumnList = (color: Colors, { items, title }: ItemsList) => (
  <Col span={1} sx={{ marginBottom: ['md', 0], variant: getVariant('column') }}>
    {title &&
      Text(
        title,
        'grey-60',
        {
          marginBottom: ['xs', 'sm'],
          fontFamily: 'heading',
          variant: getVariant('title')
        },
        { color: 'textColorAccent' }
      )}
    <Palette
      as={Styled.div}
      sx={{
        backgroundColor: 'grey-05',
        paddingY: 'sm',
        paddingX: ['sm', 'md'],
        variant: getVariant('column.background')
      }}
      px={{
        backgroundColor: 'backgroundColor'
      }}
    >
      {items.map(item => listItem(item, color))}
    </Palette>
  </Col>
)

const ProsAndCons: React.FC<Props> = ({ pros, cons }) => (
  <Container>
    <Row cols={[1, 2]}>
      {getColumnList(Colors.green, pros)}
      {getColumnList(Colors.red, cons)}
    </Row>
  </Container>
)

export default ProsAndCons
