/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import { Col, Container, GridFromJson, Row } from './index'

const colStyling = {
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'red'
}
const greyColStyling = {
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: '#ccc'
}

storiesOf('Layout|Flex Grid', module).add('Basic Example', () => (
  <React.Fragment>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row sx={{ textAlign: 'center' }}>
        <Col sx={colStyling}>Col 1</Col>
        <Col sx={colStyling}>Col 2</Col>
        <Col sx={colStyling}>Col 3</Col>
        <Col sx={colStyling}>Col 4</Col>
      </Row>
    </Container>
  </React.Fragment>
))

storiesOf('Layout|Flex Grid', module).add(
  'Example of responsive number of columns and responsive column span',
  () => (
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row direction="row" cols={[4, 8, 12]} sx={{ textAlign: 'center' }}>
        <Col span={[2, 5, 2]} sx={colStyling}>
          Col 1
        </Col>
        <Col span={[1, 1, 2]} sx={colStyling}>
          Col 2
        </Col>
        <Col span={[1, 1, 2]} sx={colStyling}>
          Col 3
        </Col>
        <Col span={[1, 1, 6]} sx={{ ...colStyling }}>
          Col 4
        </Col>
      </Row>
    </Container>
  )
)

storiesOf('Layout|Flex Grid', module).add(
  'Change flow of columns responsively',
  () => (
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row
        direction={['column-reverse', 'row', 'row-reverse']}
        sx={{ textAlign: 'center' }}
      >
        <Col sx={{ ...colStyling, bg: 'red' }}>Col 1</Col>
        <Col sx={{ ...colStyling, bg: 'green' }}>Col 2</Col>
        <Col sx={{ ...colStyling, bg: 'blue' }}>Col 3</Col>
        <Col sx={{ ...colStyling, bg: 'pink' }}>Col 4</Col>
      </Row>
    </Container>
  )
)

storiesOf('Layout|Flex Grid', module).add(
  'Create containers based upon cols',
  () => (
    <React.Fragment>
      <Container cols={12} span={8} sx={{ bg: '#eee', color: 'white' }}>
        <Row sx={{ textAlign: 'center' }}>
          <Col sx={colStyling}>Container at 8 out of 12 cols width</Col>
        </Row>
      </Container>
      <Container sx={{ bg: '#eee', color: 'white' }}>
        <Row direction="row" sx={{ textAlign: 'center' }} cols={[4, 12, 12]}>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
          <Col span={1} sx={greyColStyling}>
            x
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
)

storiesOf('Layout|Flex Grid', module).add('Offset columns', () => (
  <React.Fragment>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row sx={{ textAlign: 'center' }} cols={[4, 12, 12]}>
        <Col offset={[1, 3, 3]} span={[2, 6, 6]} sx={colStyling}>
          Offset column
        </Col>
      </Row>
    </Container>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row direction="row" sx={{ textAlign: 'center' }} cols={[4, 12, 12]}>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
        <Col span={1} sx={greyColStyling}>
          x
        </Col>
      </Row>
    </Container>
  </React.Fragment>
))

storiesOf('Layout|Flex Grid', module).add('Grid with wrapping', () => (
  <Container sx={{ bg: '#eee', color: 'white' }}>
    <Row direction="row" cols={[4, 8, 12]} sx={{ textAlign: 'center' }} wrap>
      <Col span={[2, 5, 4]} sx={colStyling}>
        Col 1
      </Col>
      <Col span={[2, 3, 4]} sx={colStyling}>
        Col 2
      </Col>
      <Col span={[2, 8, 4]} sx={colStyling}>
        Col 3
      </Col>
      <Col span={[2, 8, 12]} sx={{ ...colStyling }}>
        Col 4
      </Col>
    </Row>
  </Container>
))

storiesOf('Layout|Flex Grid', module).add('Grid layout from JSON', () => {
  const gridJson = [
    {
      cols: 12,
      direction: 'row',
      wrap: true,
      layout: [
        { key: 0, span: [12, 4] },
        { key: 1, span: [6, 4] },
        { key: 2, span: [6, 4] }
      ]
    },
    {
      cols: 12,
      layout: [{ key: 3, span: 12 }]
    },
    {
      direction: 'row',
      wrap: true,
      layout: [
        { key: 4, span: [12, 6] },
        { key: 5, span: [12, 6] }
      ]
    }
  ]
  return (
    <Container>
      <GridFromJson
        json={gridJson}
        childrenArray={[
          <span sx={colStyling} key={1}>
            Cell 1
          </span>,
          <span sx={colStyling} key={2}>
            Cell 2
          </span>,
          <span sx={colStyling} key={3}>
            Cell 3
          </span>,
          <span sx={colStyling} key={4}>
            Cell 4
          </span>,
          <span sx={colStyling} key={5}>
            Cell 5
          </span>,
          <span sx={colStyling} key={6}>
            Cell 6
          </span>
        ]}
      />
    </Container>
  )
})

storiesOf('Layout|Flex Grid', module).add(
  'Grid layout from JSON without keys',
  () => {
    const gridJson = [
      {
        direction: 'row',
        layout: [{ span: [12, 4] }, { span: [6, 4] }, { span: [6, 4] }]
      },
      {
        layout: [{ span: 12 }]
      },
      {
        direction: 'row',
        layout: [{ span: [12, 6] }, { span: [12, 6] }]
      }
    ]
    return (
      <Container>
        <GridFromJson
          json={gridJson}
          childrenArray={[
            <span sx={colStyling} key={1}>
              Cell 1
            </span>,
            <span sx={colStyling} key={2}>
              Cell 2
            </span>,
            <span sx={colStyling} key={3}>
              Cell 3
            </span>,
            <span sx={colStyling} key={4}>
              Cell 4
            </span>,
            <span sx={colStyling} key={5}>
              Cell 5
            </span>,
            <span sx={colStyling} key={6}>
              Cell 6
            </span>
          ]}
        />
      </Container>
    )
  }
)

storiesOf('Layout|Flex Grid', module).add(
  'Grid layout from JSON with wildcard',
  () => {
    const gridJson = [
      { layout: [{ key: 0, span: 12 }] },
      { direction: 'row', layout: [{ key: '*', span: [6, 3] }] },
      { layout: [{ key: 1, span: 12 }] }
    ]

    return (
      <Container>
        <GridFromJson
          json={gridJson}
          childrenArray={[
            <span sx={colStyling} key={1}>
              Header
            </span>,
            <span sx={colStyling} key={2}>
              Footer
            </span>,
            <span sx={colStyling} key={3}>
              Wildcard cell 1
            </span>,
            <span sx={colStyling} key={4}>
              Wildcard cell 2
            </span>,
            <span sx={colStyling} key={5}>
              Wildcard cell 3
            </span>,
            <span sx={colStyling} key={6}>
              Wildcard cell 4
            </span>
          ]}
        />
      </Container>
    )
  }
)
