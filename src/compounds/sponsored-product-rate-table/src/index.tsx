/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import AwardsTag from '@uswitch/trustyle.awards-tag'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Container } from '@uswitch/trustyle.flex-grid'
import { Icon } from '@uswitch/trustyle.icon'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import SponsoredByTag from '@uswitch/trustyle.sponsored-by-tag'
import { Stack } from '@uswitch/trustyle.arrangement'
import UspTag from '@uswitch/trustyle.usp-tag'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  productName: string
  productImgSrc: string
  productImgAlt: string
  informationDetails: Detail[]
  usp: string
  href: string
  target: string
  sponsorLogoSrc: string
  award: string
  campaignImgSrc: string
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
      <PrimaryInfoBlock
        prefix={obj.prefix}
        value={obj.value}
        suffix={obj.suffix}
        label={obj.label}
        key={`infoblock-${index}`}
      />
    ))}
  </React.Fragment>
)

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <React.Fragment>
    {src && (
      <ImgixImage
        sx={{
          maxHeight: 96,
          marginTop: [-76, -32],
          marginX: [null, 12]
        }}
        alt={alt}
        src={src}
        imgixParams={{ fit: 'clip' }}
        critical
      />
    )}
  </React.Fragment>
)

const SponsoredRateTable: React.FC<Props> = ({
  productName,
  productImgSrc,
  productImgAlt,
  informationDetails,
  usp,
  href,
  target,
  sponsorLogoSrc,
  award,
  campaignImgSrc
}) => (
  <a href={href} target={target} sx={{ textDecoration: 'none' }}>
    <div
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey-30'
      }}
    >
      <ImgixImage
        src={campaignImgSrc}
        imgixParams={{ fit: 'clip' }}
        critical
        sx={{
          height: 192,
          width: '100%',
          display: ['block', 'none']
        }}
      />

      <Container
        sx={{
          padding: [12, 'sm'],
          display: [null, 'grid'],
          gridTemplateColumns: [null, '420px 260px 130px'],
          gridGap: [null, 'xs']
        }}
      >
        <div>
          <ImgixImage
            src={campaignImgSrc}
            imgixParams={{ fit: 'clip' }}
            critical
            sx={{
              height: 150,
              width: '100%',
              display: ['none', 'block']
            }}
          />

          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <ProductImage src={productImgSrc} alt={productImgAlt} />

            <span
              sx={{
                fontFamily: 'heading',
                fontWeight: 'bold',
                display: ['none', 'inline-block']
              }}
            >
              {productName}
            </span>
          </div>
        </div>

        <div
          sx={{
            display: ['flex', 'none'],
            marginBottom: 'sm',
            marginTop: 'xs'
          }}
        >
          <div
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              flexGrow: 1
            }}
          >
            {productName}
          </div>

          <ButtonLink
            variant="primary"
            href={href}
            target={target}
            sx={{
              padding: 0,
              width: 32,
              height: 48,
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

        <div sx={{}}>
          <Stack spacing={[8, 16]}>
            <div
              sx={{
                display: 'grid',
                gridGap: 'xs',
                gridTemplateColumns: '1fr 1fr'
              }}
            >
              <InformationBlocks details={informationDetails} />
            </div>

            <UspTag usp={usp} />

            <AwardsTag award={award} />

            <SponsoredByTag providerLogoSrc={sponsorLogoSrc} />
          </Stack>
        </div>
      </Container>
    </div>
  </a>
)

export default SponsoredRateTable
