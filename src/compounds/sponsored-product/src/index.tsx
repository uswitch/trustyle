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
import { Container } from '@uswitch/trustyle.flex-grid'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  imgSrc?: string
  imgAlt?: string
  informationDetails?: Detail[]
  usps?: string[]
  uspBackgroundColor?: string
  uspBeforeColor?: string
  href?: string
  target?: string
  sponsorSrc: string
  sponsorName: string
  award?: string
  enhancedImgSrc?: string
  brandCaption?: string
  backgroundColor?: string
  enhancedImgHeight?: string
  className?: string
  showSponsoredByTag?: boolean
  uspSx?: object
  infoBlockSx?: object
  boxShadowColor?: string
  badgeVariant?: string
}

interface Detail {
  prefix: string
  value: string
  suffix: string
  label: string
}

interface InformationBlocksProps {
  details: Detail[]
  infoBlockSx?: object
}

const InformationBlocks: React.FC<InformationBlocksProps> = ({
  details,
  infoBlockSx = {}
}) => (
  <React.Fragment>
    {details.map((obj, index) => (
      <PrimaryInfoBlock
        prefix={obj.prefix}
        value={obj.value}
        suffix={obj.suffix}
        label={obj.label}
        key={index}
        sx={{ padding: [null, 'xs'], ...infoBlockSx }}
      />
    ))}
  </React.Fragment>
)

interface UspTagsProps {
  usps: string[]
  uspColor: string
  beforeColor: string
  uspSx?: object
}

const UspTags: React.FC<UspTagsProps> = ({
  usps,
  uspColor,
  beforeColor,
  uspSx = {}
}) => (
  <React.Fragment>
    {usps.map((obj, index) => (
      <UspTag
        usp={obj}
        backgroundColor={uspColor}
        beforeColor={beforeColor}
        key={index}
        sx={uspSx}
      />
    ))}
  </React.Fragment>
)

const BrandCaption = ({ text }: { text: string }) => (
  <React.Fragment>
    {text && (
      <div
        sx={{
          backgroundColor: 'grey-05',
          padding: 'xs',
          marginBottom: ['sm', 'none']
        }}
      >
        <span
          sx={{
            fontWeight: 'base'
          }}
        >
          {text}
        </span>
      </div>
    )}
  </React.Fragment>
)

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <React.Fragment>
    {src && (
      <ImgixImage
        sx={{
          marginTop: [-48, 0],
          marginRight: ['xs', 0],
          height: 'auto'
        }}
        alt={alt}
        src={src}
        width={56}
        imgixParams={{ fit: 'clip' }}
        critical
      />
    )}
  </React.Fragment>
)

const EnhancedImage = ({ src, height }: { src: string; height: string }) => (
  <React.Fragment>
    {src && (
      <div
        sx={{
          height: height,
          width: '100%',
          display: ['block', 'none'],
          backgroundImage: `url(${src})`,
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
    )}
  </React.Fragment>
)

const topComponentMargin = (productSrc: string, enhancedSrc: string) =>
  productSrc && !enhancedSrc ? ['38px', 0] : null

const SponsoredProduct: React.FC<Props> = ({
  title,
  imgSrc = '',
  imgAlt = '',
  informationDetails,
  badgeVariant = 'sponsored',
  usps,
  uspBackgroundColor = 'rgba(132,166,255,0.3)',
  uspBeforeColor = '#84A6FF',
  boxShadowColor = 'rgba(20, 20, 36, 0.15)',
  href = '',
  target = '',
  sponsorSrc,
  sponsorName,
  showSponsoredByTag = true,
  award,
  enhancedImgSrc = '',
  brandCaption,
  backgroundColor = 'white',
  enhancedImgHeight = '144px',
  className,
  uspSx = {},
  infoBlockSx = {}
}) => (
  <div
    className={className}
    sx={{
      borderWidth: [1, 0],
      borderStyle: ['solid', 'none'],
      borderColor: ['grey-30', 'none'],
      marginTop: () => topComponentMargin(imgSrc, enhancedImgSrc)
    }}
  >
    <EnhancedImage src={enhancedImgSrc} height={enhancedImgHeight} />

    <div
      sx={{
        display: ['none', 'block'],
        marginBottom: 'xs'
      }}
    >
      <Badge variant={badgeVariant}>Sponsored</Badge>
    </div>

    <Container
      sx={{
        padding: [12, 'sm'],
        display: [null, 'flex'],
        justifyContent: [null, 'space-between'],
        boxShadow: ['none', `12px 12px 0px ${boxShadowColor}`],
        backgroundColor: backgroundColor
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: [null, 'column'],
          width: [null, '45%'],
          justifyContent: 'flex-start'
        }}
      >
        <div
          sx={{
            display: [null, 'flex']
          }}
        >
          <ProductImage src={imgSrc} alt={imgAlt} />

          <div
            sx={{
              width: imgSrc ? 80 : '100%',
              position: 'relative',
              marginLeft: imgSrc ? 'xs' : null,
              marginRight: 'sm',
              display: ['none', 'inline-block'],
              borderWidth: imgSrc ? 1 : 0,
              borderStyle: 'solid',
              borderColor: 'grey-10'
            }}
          >
            <ImgixImage
              src={sponsorSrc}
              alt={sponsorName}
              imgixParams={{ fit: 'clip', trim: 'color' }}
              width={imgSrc ? 44 : 120}
              height={imgSrc ? 88 : 73}
              critical
              sx={{
                position: imgSrc ? 'absolute' : 'static',
                margin: 'auto',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>

        {award && (
          <div
            sx={{
              width: imgSrc ? 106 : 120,
              display: ['none', 'flex'],
              alignItems: 'center',
              marginTop: 'xs'
            }}
          >
            <svg
              height={imgSrc ? '48' : '60'}
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
              {award}
            </span>
          </div>
        )}

        {href && target && (
          <React.Fragment>
            <div
              sx={{
                fontFamily: 'heading',
                fontWeight: 700,
                lineHeight: 'heading',
                marginRight: 'xs',
                display: [null, 'none'],
                flexGrow: 1
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
                display: ['flex', 'none'],
                flexShrink: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 'sm'
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
          </React.Fragment>
        )}
      </div>

      <div
        sx={{
          width: [null, '55%']
        }}
      >
        <Stack spacing={[8, 16]}>
          <div
            sx={{
              fontFamily: 'heading',
              fontWeight: 700,
              lineHeight: 'heading',
              display: ['none', 'block']
            }}
          >
            {title}
          </div>

          {brandCaption && <BrandCaption text={brandCaption} />}

          {informationDetails && (
            <div
              sx={{
                display: 'grid',
                gridGap: 'xs',
                gridTemplateColumns: '1fr 1fr'
              }}
            >
              <InformationBlocks
                details={informationDetails}
                infoBlockSx={infoBlockSx}
              />
            </div>
          )}

          {usps && (
            <UspTags
              usps={usps}
              uspColor={uspBackgroundColor}
              beforeColor={uspBeforeColor}
              uspSx={uspSx}
            />
          )}
        </Stack>

        <div sx={{ display: ['block', 'none'] }}>
          {award && <AwardsTag award={award} sx={{ marginTop: 'xs' }} />}
          {showSponsoredByTag && (
            <SponsoredByTag
              providerName={sponsorName}
              providerLogoSrc={sponsorSrc}
              sx={{ marginTop: 'xs' }}
            />
          )}
        </div>
      </div>
    </Container>
  </div>
)

export default SponsoredProduct
