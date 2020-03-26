/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import UspTag from '@uswitch/trustyle.usp-tag'
import SponsoredByTag from '@uswitch/trustyle.sponsored-by-tag'
import AwardsTag from '@uswitch/trustyle.awards-tag'
import { Stack } from '@uswitch/trustyle.arrangement'
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
  sponsorSrc: string
  award: string
  enhancedImgSrc: string
}

interface Detail {
  prefix: string
  value: string
  suffix: string
  label: string
}

interface Arg {
  details: Detail[]
}

const InformationBlocks = ({ details }: Arg) =>
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

const ProductImage = ({ src, alt }) =>
  src && (
    <ImgixImage
      sx={{
        width: 59,
        height: 100,
        marginBottom: 'xs',
        marginTop: '-25px'
      }}
      alt={alt}
      src={src}
      imgixParams={{ fit: 'clip' }}
      critical
    />
  )

const EnhancedImage = ({ src }) =>
  src && (
    <ImgixImage
      src={src}
      imgixParams={{ fit: 'clip' }}
      critical
      sx={{
        height: 100,
        width: '100%',
        marginBottom: -7.5
      }}
    />
  )

const topComponentMargin = ({ productSrc, enhancedSrc }) =>
  productSrc && !enhancedSrc ? '25px' : null

const StandardP0Ad: React.FC<Props> = ({
  title,
  imgSrc,
  imgAlt,
  informationDetails,
  usp,
  href,
  target,
  sponsorSrc,
  award,
  enhancedImgSrc
}) => (
  <div
    sx={{
      marginTop: () => topComponentMargin(imgSrc, enhancedImgSrc)
    }}
  >
    <EnhancedImage src={enhancedImgSrc} />

    <Container
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey-30',
        paddingTop: 'xs'
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <ProductImage src={imgSrc} alt={imgAlt} />

        <div
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold',
            marginTop: 'xs',
            width: '100%',
            marginX: 'xs'
          }}
        >
          {title}
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

      <div
        sx={{
          width: ['100%']
        }}
      >
        <Row direction="row" cols={[2]}>
          <InformationBlocks details={informationDetails} />
        </Row>

        <Stack spacing={[8]}>
          <UspTag usp={usp} />
          <AwardsTag award={award} />
          <SponsoredByTag providerLogoSrc={sponsorSrc} />
        </Stack>
      </div>
    </Container>
  </div>
)

export default StandardP0Ad
