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
          gridTemplateColumns: [null, '1.5fr 1fr 0.5fr'],
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
            marginTop: 12
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

        <div sx={{ display: 'grid', gridGap: 'xs' }}>
          <div
            sx={{
              display: 'grid',
              gridGap: 'xs',
              gridTemplateColumns: '1fr 1fr',
              height: 150
            }}
          >
            <InformationBlocks details={informationDetails} />
          </div>

          <UspTag usp={usp} />

          <AwardsTag award={award} />

          <SponsoredByTag
            providerLogoSrc={sponsorLogoSrc}
            sx={{ display: [null, 'none'] }}
          />
        </div>

        <div sx={{ display: ['none', 'grid'], gridGap: 12 }}>
          <ButtonLink
            variant="primary"
            href={href}
            target={target}
            sx={{
              padding: 0,
              height: 48,
              display: ['none', 'flex'],
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <span sx={{}}>See Deal</span>
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

          <SponsoredByTag
            providerLogoSrc={sponsorLogoSrc}
            sx={{ display: ['none', 'flex'], flexDirection: 'column' }}
          />

          <div
            sx={{
              display: ['none', 'flex'],
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              height="44"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="none"
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
                width: 55,
                lineHeight: 1,
                letterSpacing: -0.5,
                fontSize: 9,
                marginLeft: 'xxs',
                fontFamily: "'-apple-system', 'BlinkMacSystemFont'"
              }}
            >
              <strong>Uswitch</strong> Manufacturer of the Year
              <strong> Winner 2020</strong>
            </span>
          </div>
        </div>
      </Container>
    </div>
  </a>
)

export default SponsoredRateTable
