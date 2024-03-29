/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Container } from '@uswitch/trustyle.flex-grid'
import { Icon } from '@uswitch/trustyle.icon'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import SponsoredByTag from '@uswitch/trustyle.sponsored-by-tag'
import {
  UspBroadband,
  UspBroadbandProps
  // @ts-ignore
} from '@uswitch/trustyle.usp-broadband'
import { Stack } from '@uswitch/trustyle.arrangement'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  productName: string
  productImgSrc: string
  productImgAlt: string
  informationDetails: Detail[]
  usps: UspBroadband[]
  href: string
  target: string
  sponsorLogoSrc: string
  sponsorName: string
  award: string
  campaignImgSrc: string
  campaignImgHeight?: string
  className?: string
  ctaText?: string
  backgroundColor?: string
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

interface UspTagsProps {
  usps: UspBroadbandProps[]
  award?: string
}

const UspTags: React.FC<UspTagsProps> = ({ usps, award }) => (
  <div
    sx={{
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap'
    }}
  >
    {usps.map((usp, index) => {
      return (
        <div key={index}>
          <UspBroadband label={usp.text} color={usp.color} />
        </div>
      )
    })}
    {award && (
      <div sx={{ display: [null, 'none'] }}>
        <UspBroadband label={award} color="award" />
      </div>
    )}
  </div>
)

// todo: make into element
const AwardBadge = ({ awardName }: { awardName: string }) => (
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
        fontFamily: 'base'
      }}
    >
      {awardName}
    </span>
  </div>
)

const SponsoredRateTable: React.FC<Props> = ({
  productName,
  productImgSrc,
  productImgAlt,
  informationDetails,
  usps,
  backgroundColor = '#FFFFFF',
  href,
  target,
  sponsorLogoSrc,
  sponsorName,
  award,
  campaignImgSrc,
  campaignImgHeight = '144px',
  ctaText = 'See Deal'
}) => (
  <div
    sx={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'grey-30',
      '@media (hover: hover)': {
        ':hover': {
          borderColor: 'primary'
        }
      }
    }}
  >
    <div
      sx={{
        height: campaignImgHeight,
        width: '100%',
        display: ['block', 'none'],
        backgroundImage: `url(${campaignImgSrc})`,
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    />
    <Container>
      <div
        sx={{
          padding: [12, 'sm'],
          display: [null, 'grid'],
          gridTemplateColumns: [null, '1.5fr 1fr 0.5fr'],
          gridGap: [null, 12]
        }}
      >
        <div>
          <div
            sx={{
              height: campaignImgHeight,
              width: '100%',
              backgroundImage: `url(${campaignImgSrc})`,
              backgroundPosition: 'left bottom',
              backgroundColor: backgroundColor,
              display: ['none', 'block'],
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          />

          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <ProductImage src={productImgSrc} alt={productImgAlt} />

            <span
              sx={{
                fontFamily: 'heading',
                fontWeight: 'bold',
                display: ['none', 'inline-block'],
                marginTop: [null, productImgSrc ? null : 'sm']
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
            marginTop: 12,
            justifyContent: 'space-between'
          }}
        >
          <div
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              marginRight: 'xs'
            }}
          >
            {productName}
          </div>

          {href && target && (
            <ButtonLink
              variant="primary"
              href={href}
              target={target}
              sx={{
                padding: 0,
                width: 32,
                height: 48,
                display: 'flex',
                flexShrink: 0,
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
          )}
        </div>

        <Stack spacing={[8]}>
          <div
            sx={{
              display: 'grid',
              gridGap: ['xs', 12],
              gridTemplateColumns: '1fr 1fr',
              minHeight: [92, campaignImgHeight]
            }}
          >
            <InformationBlocks details={informationDetails} />
          </div>

          {usps && <UspTags usps={usps} award={award} />}

          <SponsoredByTag
            providerName={sponsorName}
            providerLogoSrc={sponsorLogoSrc}
            sx={{ display: [null, 'none'] }}
          />
        </Stack>

        <Stack spacing={[16]} sx={{ display: ['none', 'block'] }}>
          <ButtonLink
            variant="primary"
            href={href}
            target={target}
            sx={{
              padding: 0,
              width: '100%',
              height: 48,
              display: ['none', 'flex'],
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <span>{ctaText}</span>
          </ButtonLink>

          <SponsoredByTag
            providerName={sponsorName}
            providerLogoSrc={sponsorLogoSrc}
            sx={{
              display: ['none', 'flex'],
              flexDirection: 'column' as const
            }}
          />
          {/* todo: make into separate element */}
          {award && <AwardBadge awardName={award} />}
        </Stack>
      </div>
    </Container>
  </div>
)

export default SponsoredRateTable
