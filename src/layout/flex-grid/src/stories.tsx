/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { Col, Container, GridFromJson, LayoutJson, Row } from './index'

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

export default {
  title: 'Layout/Flex Grid'
}

export const BasicExample = () => (
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
)

BasicExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ResponsiveNumberOfColums = () => (
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

ResponsiveNumberOfColums.story = {
  name: 'Example of responsive number of columns and responsive column span',
  parameters: {
    percy: { skip: true }
  }
}

export const ChangeFlowColumns = () => (
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

ChangeFlowColumns.story = {
  name: 'Change flow of columns responsively',
  parameters: {
    percy: { skip: true }
  }
}

export const ContainersBasedOnCols = () => (
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

ContainersBasedOnCols.story = {
  name: 'Create containers based upon cols',
  parameters: {
    percy: { skip: true }
  }
}

export const OffsetColumns = () => (
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
)

OffsetColumns.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const GridWithWrapping = () => (
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
)

GridWithWrapping.story = {
  name: 'Grid with wrapping',
  parameters: {
    percy: { skip: true }
  }
}

export const GridFromJsonStory = () => {
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
}

GridFromJsonStory.story = {
  name: 'Grid layout from JSON',
  parameters: {
    percy: { skip: true }
  }
}

export const GridFromJsonNoKeys = () => {
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

GridFromJsonNoKeys.story = {
  name: 'Grid layout from JSON without keys',
  parameters: {
    percy: { skip: true }
  }
}

export const GridFromJsonWildcard = () => {
  const gridJson: LayoutJson = [
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

GridFromJsonWildcard.story = {
  name: 'Grid layout from JSON with wildcard',
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <BasicExample />
      <ResponsiveNumberOfColums />
      <ChangeFlowColumns />
      <ContainersBasedOnCols />
      <OffsetColumns />
      <GridWithWrapping />
      <GridFromJsonStory />
      <GridFromJsonNoKeys />
      <GridFromJsonWildcard />
    </AllThemes>
  )
}
