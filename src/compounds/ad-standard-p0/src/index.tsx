/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import UspTag from '@uswitch/trustyle.usp-tag'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  imgSrc: string
  imgAlt: string
  informationDetails: object[]
  usp: string
  href: string
  target: string
}

const InformationBlocks = ({ details }) =>
  details.map((obj, index) => (
    <Col span={[6]} key={`infoblock-${index}`}>
      <PrimaryInfoBlock
        prefix={obj.prefix}
        value={obj.value}
        suffix={obj.suffix}
        label={obj.label}
      />
    </Col>
  ))

const MobileAd: React.FC<Props> = ({
  title,
  imgSrc,
  imgAlt,
  informationDetails,
  usp,
  href,
  target
}) => {
  return (
    <Container
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey-30',
        paddingTop: 'xs',
        paddingBottom: 'xs'
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <ImgixImage
          sx={{
            width: 59,
            height: 100,
            marginBottom: 'xs',
            marginTop: '-25px'
          }}
          alt={imgAlt}
          src={imgSrc}
          imgixParams={{ fit: 'clip' }}
          critical
        />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginX: 'xs',
            width: '100%'
          }}
        >
          <div
            sx={{
              fontSize: 'xxs',
              color: 'grey-60'
            }}
          >
            Sponsored
          </div>

          <div
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              marginTop: 'xs'
            }}
          >
            {title}
          </div>
        </div>
        <ButtonLink
          variant="primary"
          href={href}
          target={target}
          sx={{
            padding: 0,
            width: 32,
            marginBottom: 'xs',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon
            color="white"
            direction="right"
            glyph="caret"
            size={20}
            sx={{
              flexShrink: 0
            }}
          />
        </ButtonLink>
      </div>

      <Row direction="row" cols={[2]}>
        <InformationBlocks details={informationDetails} />
      </Row>

      <UspTag usp={usp} />
    </Container>
  )
}

export default MobileAd
