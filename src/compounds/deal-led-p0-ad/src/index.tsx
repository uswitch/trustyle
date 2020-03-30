/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import UspTag from '@uswitch/trustyle.usp-tag'
import SponsoredByTag from '@uswitch/trustyle.sponsored-by-tag'
import AwardsTag from '@uswitch/trustyle.awards-tag'
import Badge from '@uswitch/trustyle.badge'
import { Stack } from '@uswitch/trustyle.arrangement'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  imgSrc: string
  imgAlt: string
  informationDetails: Detail[]
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

interface InformationBlocksProps {
  details: Detail[]
}

const InformationBlocks: React.FC<InformationBlocksProps> = ({ details }) => (
  <React.Fragment>
    {details.map((obj, index) => (
      <Col span={[6]} key={`infoblock-${index}`} sx={{ marginRight: 0 }}>
        <PrimaryInfoBlock
          prefix={obj.prefix}
          value={obj.value}
          suffix={obj.suffix}
          label={obj.label}
        />
      </Col>
    ))}
  </React.Fragment>
)

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <React.Fragment>
    {src && (
      <ImgixImage
        sx={{
          height: [100, 85],
          marginBottom: ['xs', 'none'],
          marginTop: ['-36px', 0]
        }}
        alt={alt}
        src={src}
        imgixParams={{ fit: 'clip' }}
        critical
      />
    )}
  </React.Fragment>
)

const EnhancedImage = ({ src }: { src: string }) => (
  <React.Fragment>
    {src && (
      <ImgixImage
        src={src}
        imgixParams={{ fit: 'clip' }}
        critical
        sx={{
          height: 97,
          width: '100%',
          marginBottom: -7.5,
          display: ['block', 'none']
        }}
      />
    )}
  </React.Fragment>
)

const topComponentMargin = (productSrc: string, enhancedSrc: string) =>
  productSrc && !enhancedSrc ? '25px' : null

const DealP0Ad: React.FC<Props> = ({
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
      borderWidth: [1, 'none'],
      borderStyle: ['solid', 'none'],
      borderColor: ['grey-30', 'none'],
      marginTop: () => topComponentMargin(imgSrc, enhancedImgSrc)
    }}
  >
    <EnhancedImage src={enhancedImgSrc} />

    <span
      sx={{
        display: ['none', 'inline-block'],
        marginBottom: 'sm'
      }}
    >
      <Badge>Sponsored</Badge>
    </span>

    <Container
      sx={{
        paddingX: ['xs', 'sm'],
        paddingBottom: ['none', 'sm'],
        display: [null, 'flex'],
        boxShadow: ['none', '10px 10px rgba(20, 20, 36, 0.15)']
      }}
    >
      <div
        sx={{
          display: ['flex', 'grid'],
          width: [null, '50%'],
          position: [null, 'relative']
        }}
      >
        <span
          sx={{
            position: [null, 'relative']
          }}
        >
          <ProductImage src={imgSrc} alt={imgAlt} />
        </span>

        <ImgixImage
          src={sponsorSrc}
          imgixParams={{ fit: 'clip' }}
          critical
          sx={{
            height: 28,
            backgroundColor: 'blue-25',
            display: ['none', 'inline-block'],
            position: [null, 'absolute'],
            top: [null, 65],
            left: [null, 25]
          }}
        />

        <div
          sx={{
            width: 130,
            height: 58,
            display: ['none', 'flex'],
            alignItems: 'center'
          }}
        >
          <svg
            height="58"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000966623 8.09716L8.05078 22.1208L21.9964 14.024L13.9447 0.000335086L-0.000966623 8.09716Z"
              fill="#ACAAFF"
            />
            <path
              d="M13.9475 22.1206L21.9993 8.09692L8.05364 9.82571e-05L0.00188873 14.0238L13.9475 22.1206Z"
              fill="#7ED2E9"
            />
            <path
              d="M19.0498 2.96484H2.94629V19.1585H19.0498V2.96484Z"
              fill="#141423"
            />
            <path
              d="M6.30542 12.1831V5.34229H8.37293V12.2014C8.37293 13.9269 9.30664 14.7439 10.8709 14.7439C12.4352 14.7439 13.3689 13.9269 13.3689 12.2014V5.34229H15.4364V12.1831C15.4364 15.0365 13.672 16.5425 10.8709 16.5425C8.12434 16.5486 6.30542 15.0365 6.30542 12.1831Z"
              fill="white"
            />
          </svg>

          <span
            sx={{
              width: 75,
              lineHeight: 1,
              fontSize: 'xxs',
              fontFamily: "'-apple-system', 'BlinkMacSystemFont'"
            }}
          >
            <strong>Uswitch</strong> Manufacturer of the Year
            <strong> Winner 2020</strong>
          </span>
        </div>

        <div
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold',
            marginTop: 'sm',
            marginX: 'xs',
            display: [null, 'none'],
            flex: 2
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
            height: 48,
            marginTop: 'sm',
            display: ['flex', 'none'],
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
          width: ['100%', '50%'],
          float: ['none', 'right']
        }}
      >
        <div
          sx={{
            fontFamily: 'heading',
            fontWeight: 'bold',
            marginBottom: 'sm',
            display: ['none', 'block']
          }}
        >
          {title}
        </div>

        <Row direction="row" cols={[2]} sx={{ marginBottom: 'sm' }}>
          <InformationBlocks details={informationDetails} />
        </Row>

        <Stack spacing={[8]}>
          <UspTag usp={usp} />
          <div sx={{ display: ['block', 'none'] }}>
            <AwardsTag award={award} />
            <SponsoredByTag providerLogoSrc={sponsorSrc} />
          </div>
        </Stack>
      </div>
    </Container>
  </div>
)

export default DealP0Ad
