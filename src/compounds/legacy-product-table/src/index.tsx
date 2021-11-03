/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed, ThemeUIStyleObject, useThemeUI } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'
import CirclePercentageBar from '@uswitch/trustyle.circular-percentage-bar'
import WireFrameCell from '@uswitch/trustyle.wireframe-cell'
import { Eligibility } from '@uswitch/trustyle.information-panel'

import RowWrapper from './row-wrapper'

interface WireFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'header' | 'additionalInfo' | 'representativeExample'
}

const WireFrame: React.FC<WireFrameProps> = ({ type }) => {
  const containerStyles: {
    header: object & ThemeUIStyleObject
    additionalInfo: object & ThemeUIStyleObject
    representativeExample: object & ThemeUIStyleObject
  } = {
    header: {
      width: '100%',
      paddingLeft: ['15px', '160px'],
      paddingRight: ['15px', 0],
      paddingY: '15px',
      marginY: 0
    },
    additionalInfo: {
      margin: '15px 0'
    },
    representativeExample: {
      marginTop: '5px',
      padding: ['5px 20px 10px', '5px 40px 10px'],
      backgroundColor: 'rgba(242,242,243,0.7)'
    }
  }

  const defaultStyles: {
    header: object
    additionalInfo: object
    representativeExample: object
  } = {
    header: {
      width: ['93%', '55%'],
      height: '14px'
    },
    additionalInfo: {
      height: '10px',
      width: ['95%', '69%'],
      marginLeft: ['0', 'auto'],
      marginRight: 'auto',
      marginTop: '10px'
    },
    representativeExample: {
      height: '11px',
      width: ['86%', '90%'],
      marginX: 'auto',
      marginTop: '8px'
    }
  }

  const rowStyles: {
    header: any[]
    additionalInfo: any[]
    representativeExample: any[]
  } = {
    header: [
      { ...defaultStyles.header },
      {
        ...defaultStyles.header,
        width: '28%',
        display: ['block', 'none'],
        marginTop: '11px',
        marginBottom: '20px'
      }
    ],
    additionalInfo: [
      {
        ...defaultStyles.additionalInfo,
        marginTop: '14px'
      },
      { ...defaultStyles.additionalInfo },
      {
        ...defaultStyles.additionalInfo,
        width: '45%',
        display: ['block', 'none']
      }
    ],
    representativeExample: [
      { ...defaultStyles.representativeExample },
      { ...defaultStyles.representativeExample },
      {
        ...defaultStyles.representativeExample,
        width: '83%',
        display: ['block', 'none']
      },
      {
        ...defaultStyles.representativeExample,
        width: '83%',
        display: ['block', 'none']
      },
      {
        ...defaultStyles.representativeExample,
        width: '23%',
        display: ['block', 'none']
      }
    ]
  }

  return (
    <div sx={containerStyles[type]}>
      {rowStyles[type].map((item: object, key: number) => {
        return <WireFrameCell key={key} styles={item} />
      })}
    </div>
  )
}

const AdditionalInfo: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <div
      sx={{
        margin: ['15px', '15px 0'],
        paddingLeft: [0, '160px'],
        fontSize: '12px',
        color: '#858f94',
        fontWeight: '300'
      }}
    >
      {children}
    </div>
  )
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div
      sx={{
        position: 'absolute' as const,
        top: 0,
        transform: 'translateY(-50%)',
        padding: '0 6px',
        backgroundColor: 'transparent',
        marginLeft: ['4px', 'sm']
      }}
    >
      <span
        sx={{
          width: '100%',
          height: '50%',
          backgroundColor: '#fff',
          position: 'fixed' as const,
          top: '0',
          left: '0'
        }}
      ></span>
      <div
        sx={{
          position: 'relative' as const,
          padding: ['2.5px 8px', '5.5px 16px'],
          backgroundColor: '#34454E',
          color: '#fff',
          borderRadius: '3px',
          fontSize: ['14px', '16px'],
          lineHeight: ['normal', 'inherit'],
          fontWeight: [400, 600]
        }}
      >
        {text}
      </div>
    </div>
  )
}

interface BannerInfo {
  text: string
  linkText: string
}

interface PreapprovedBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  bannerInfo: BannerInfo
  badge?: string
  onClick: () => void
}

const PreapprovedBanner: React.FC<PreapprovedBannerProps> = ({
  bannerInfo,
  badge,
  onClick
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'sunshine',
        padding: 'sm',
        color: 'experimental-text',
        lineHeight: 'base',
        fontSize: 'sm',
        fontWeight: 'bold'
      }}
    >
      <span sx={{ marginTop: badge ? '10px' : '0' }}>
        {bannerInfo.text}&nbsp;
        <span
          sx={{
            variant: 'styles.a',
            fontWeight: 'semiBold',
            color: 'experimental-text',
            cursor: 'pointer'
          }}
          onClick={() => onClick()}
        >
          {bannerInfo.linkText}
        </span>
      </span>
    </div>
  )
}

interface MoreInformationButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  onClick: () => void
  href: string
}

export const MoreInformationButton: React.FC<MoreInformationButtonProps> = ({
  onClick,
  children,
  href
}) => {
  return (
    <CtaCell
      styles={{
        width: '100%',
        fontSize: '14px',
        marginBottom: '0'
      }}
      href={href}
      onClick={onClick}
      variant="eligibility"
    >
      {children}
    </CtaCell>
  )
}

interface RepresentativeExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  variant?: string
}

const RepresentativeExample: React.FC<RepresentativeExampleProps> = ({
  text,
  variant
}) => {
  return (
    <div sx={{ padding: [variant === 'LegacyMobileCards' ? '0 15px' : 0, 0] }}>
      <div
        sx={{
          marginTop: '5px',
          padding: ['5px 20px 10px', '5px 40px 10px'],
          backgroundColor: '#f7f7f7',
          fontSize: '14px',
          fontWeight: 600,
          color: '#924a8b',
          textAlign: 'center' as const,
          lineHeight: 'normal'
        }}
      >
        Representative Example: {text}
      </div>
    </div>
  )
}

const BaseCell: React.FC<React.HTMLAttributes<any>> = ({
  children,
  className
}) => {
  const styles = {
    flex: 1,
    transition: 'background-color 1s ease',
    textAlign: 'center' as const,
    order: 2
  }

  return (
    <div sx={styles} className={className}>
      {children}
    </div>
  )
}

interface ImageCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  isWireFrame?: boolean
}

export const ImageCell: React.FC<ImageCellProps> = ({
  children,
  isWireFrame = false
}) => {
  const wireFrameStyles = {
    width: ['100%', '90%'],
    height: '74px',
    borderRadius: '3px'
  }

  return (
    <BaseCell
      sx={{
        order: 1,
        maxWidth: 130,
        margin: 'auto',
        marginRight: ['auto', '15px'],
        py: ['10px', 0],
        '>:first-of-type': {
          margin: 'auto',
          display: 'block',
          maxHeight: '90px'
        }
      }}
    >
      {isWireFrame && <WireFrameCell styles={wireFrameStyles} />}
      {!isWireFrame && children}
    </BaseCell>
  )
}

interface DataCellProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string
  borderBottomColor?: string
  color?: string
  label?: string
  isWireFrame?: boolean
  variant?: string
}

export const DataCell: React.FC<DataCellProps> = ({
  children,
  backgroundColor,
  borderBottomColor,
  color,
  label,
  variant,
  isWireFrame = false
}) => {
  const wireFrameLabelStyles = {
    width: '43%',
    height: '10px'
  }

  const wireFrameDescriptionStyles = {
    width: '65%',
    height: '17px',
    margin: '5px'
  }

  const dataCellStyles = {
    base: {
      borderWidth: '0 0 5px',
      borderStyle: 'solid',
      backgroundColor,
      borderBottomColor,
      fontFamily: 'Varela Round,Arial,sans-serif',
      color: variant === 'LegacyMobileCards' ? '#000000' : '#191919'
    },
    wireframe: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  const styles = isWireFrame
    ? { ...dataCellStyles.wireframe }
    : { ...dataCellStyles.base }

  return (
    <BaseCell
      sx={{
        ...styles,
        padding: '5px 0px 10px',
        margin: ['4px 0', '2px'],
        marginX: ['15px', '2px']
      }}
    >
      {isWireFrame && <WireFrameCell styles={wireFrameLabelStyles} />}

      {!isWireFrame && (
        <span
          sx={{
            fontFamily: 'Open Sans,Arial,sans-serif',
            fontSize: variant === 'LegacyMobileCards' ? '12px' : '11px',
            display: 'flex',
            justifyContent: 'center',
            padding: '5px 5px 0px',
            color: variant === 'LegacyMobileCards' ? '#000000' : color
          }}
        >
          {label}
        </span>
      )}

      {isWireFrame && <WireFrameCell styles={wireFrameDescriptionStyles} />}

      {!isWireFrame && (
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
            flexDirection: 'column' as const
          }}
        >
          {children}
        </div>
      )}
    </BaseCell>
  )
}

interface CtaCellProps extends React.HTMLAttributes<HTMLDivElement> {
  secondaryHref?: string
  secondaryText?: string
  styles?: any
  href?: string
  onClick?: (event?: any) => void
  onSecondaryClick?: (event?: any) => void
  disabled?: boolean
  variant?: string
  isWireFrame?: boolean
  clickableRow?: any
}

export const CtaCell: React.FC<CtaCellProps> = ({
  children,
  secondaryHref,
  secondaryText,
  styles,
  href,
  onClick,
  onSecondaryClick,
  disabled,
  variant,
  isWireFrame = false,
  clickableRow
}) => {
  const props = {
    variant: 'primary',
    target: '_blank',
    rel: 'noopener noreferrer',
    size: 'small',
    sx: {
      background: 'linear-gradient(90deg, #924A8B 5%, #DB4D75 95%)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 300,
      opacity: isWireFrame ? 0.4 : 1,
      pointerEvents: isWireFrame && 'none',
      ':hover': {
        opacity: 1
      },
      ...styles
    },
    onClick
  }

  const redirectToSecondaryHref = (secondaryHref: string) => {
    onSecondaryClick && onSecondaryClick()

    window.open(secondaryHref)
  }

  return (
    <BaseCell
      sx={{
        flex: 0,
        flexBasis: 'auto',
        margin: 'auto',
        marginLeft: variant === 'eligibility' ? 0 : ['auto', '15px'],
        visibility: disabled && ('hidden' as const)
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: variant === 'LegacyMobileCards' ? 20 : 0,
          paddingBottom: variant === 'LegacyMobileCards' ? 10 : 0
        }}
      >
        {href ? (
          <ButtonLink href={href} {...props}>
            {children}
          </ButtonLink>
        ) : (
          <Button {...props}>{children}</Button>
        )}

        {secondaryHref &&
          (clickableRow ? (
            <Button
              variant="secondaryLink"
              onClick={() => redirectToSecondaryHref(secondaryHref)}
              className="secondary-link"
            >
              {secondaryText}
            </Button>
          ) : (
            <ButtonLink
              href={secondaryHref}
              variant="secondaryLink"
              target="_blank"
              className="secondary-link"
              onClick={onSecondaryClick}
            >
              {secondaryText}
            </ButtonLink>
          ))}
      </div>
    </BaseCell>
  )
}

interface PercentageCellProps extends DataCellProps {
  percentage: number
  alternativeText: string
  size?: string
  isWireFrame?: boolean
}

export const PercentageCell: React.FC<PercentageCellProps> = ({
  backgroundColor,
  borderBottomColor,
  color,
  label,
  percentage,
  alternativeText,
  size,
  isWireFrame = false
}) => {
  return (
    <DataCell
      backgroundColor={backgroundColor}
      borderBottomColor={borderBottomColor}
      label={label}
      color={color}
      isWireFrame={isWireFrame}
    >
      {!isNaN(percentage) && (
        <CirclePercentageBar
          percentage={percentage}
          size={size}
          align="center"
        />
      )}
      {isNaN(percentage) && <span>{alternativeText}</span>}
    </DataCell>
  )
}

interface TelephoneInfoProps {
  telephone: string
}

const TelephoneInfo: React.FC<TelephoneInfoProps> = ({ telephone }) => {
  const {
    theme: { colors = {} }
  }: any = useThemeUI()

  return (
    <div
      sx={{
        mr: '10px',
        fontWeight: 'bold',
        fontFamily: 'legacy',
        verticalAlign: 'middle',
        display: 'flex',
        height: '24px',
        lineHeight: '24px',
        mb: ['base', '0'],
        pl: ['base', '0']
      }}
    >
      <span sx={{ mr: '5px', stroke: colors.fuschia }}>
        <Icon glyph="phone" color={colors.fuschia} size={24} />
      </span>
      <span
        sx={{
          color: colors.text
        }}
      >
        {telephone}
      </span>
    </div>
  )
}

interface LegacyProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  info: string[]
  title: string
  representativeExample?: string
  moreInformationPanel?: React.ReactNode[]
  clickableRow?: string
  moreInformationButton?: React.ReactNode
  moreInformationLabel?: string
  onLinkClick?: () => void
  onRowClick?: () => void
  disabled?: boolean
  badges?: string[]
  preapproved?: boolean
  bannerInfo?: BannerInfo
  onBannerClick?: () => void
  telephone?: string
  variant?: string
  isWireFrame?: boolean
}

const LegacyProductTable: React.FC<LegacyProductTableProps> = ({
  children,
  info,
  title,
  representativeExample,
  moreInformationPanel,
  moreInformationLabel,
  clickableRow,
  moreInformationButton,
  onLinkClick,
  onRowClick,
  disabled,
  badges = [],
  preapproved = false,
  bannerInfo,
  onBannerClick,
  telephone,
  isWireFrame = false,
  variant,
  ...props
}) => {
  const badge = badges[0]
  return (
    <article
      sx={{
        border: [
          badge ? '2px solid #34454E' : 'none',
          `2px solid ${badge ? '#34454E' : '#DADADB'}`
        ],
        marginBottom: '24px',
        marginTop: badge ? '8px' : 0,
        background: '#fff',
        position: 'relative',
        ':first-of-type': {
          marginTop: '10px'
        },
        opacity: disabled && !isWireFrame ? '0.4' : 1
      }}
      {...props}
    >
      {preapproved && bannerInfo && (
        <PreapprovedBanner
          bannerInfo={bannerInfo}
          badge={badge}
          onClick={() => onBannerClick && onBannerClick()}
        />
      )}
      <RowWrapper
        link={clickableRow}
        onLinkClick={onLinkClick}
        onRowClick={onRowClick}
        disabled={disabled}
      >
        {badge && <Badge text={badge} />}

        <header
          sx={{
            display: ['flex'],
            justifyContent: ['flex-start', 'space-between'],
            alignItems: ['flex-start', 'center'],
            flexDirection: ['column' as const, 'row' as const]
          }}
        >
          {isWireFrame && <WireFrame type="header" />}
          {!isWireFrame && (
            <Themed.h5
              sx={{
                color: '#069',
                pl: ['15px', '160px'],
                pr: ['15px', 0],
                py: '15px',
                mb: 0,
                mt: badge ? ['30px', '15px'] : 0,
                fontSize: '18px',
                fontFamily: 'Varela Round,Arial,sans-serif'
              }}
            >
              {title}
            </Themed.h5>
          )}
          {!isWireFrame && telephone && <TelephoneInfo telephone={telephone} />}
        </header>
        <div
          sx={{
            display: ['initial', 'flex'],
            width: '100%',
            paddingX: ['0', '15px'],
            boxSizing: 'border-box' as const
          }}
        >
          {children}
        </div>

        {!isWireFrame && info.length > 0 && (
          <AdditionalInfo>
            {info.map((item, key) => {
              return <div key={key}>{item}</div>
            })}
          </AdditionalInfo>
        )}

        {isWireFrame && <WireFrame type="additionalInfo" />}

        {!isWireFrame && representativeExample && (
          <RepresentativeExample
            text={representativeExample}
            variant={variant}
          />
        )}

        {isWireFrame && <WireFrame type="representativeExample" />}
      </RowWrapper>

      {!isWireFrame &&
        moreInformationPanel &&
        moreInformationPanel.length > 0 && (
          <Eligibility
            moreInformationPanel={moreInformationPanel}
            moreInformationButton={moreInformationButton}
            moreInformationLabel={moreInformationLabel}
            variant={variant}
          />
        )}
    </article>
  )
}

export default LegacyProductTable
