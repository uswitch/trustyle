/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { Palette, usePalette } from '@uswitch/trustyle-utils.palette'
import get from '@uswitch/trustyle-utils.get'

const lookup = (variant: string) =>
  variant === 'base'
    ? 'elements.breadcrumbs.base'
    : `elements.breadcrumbs.variants.${variant}`

interface HomeIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'light'
}

const HomeIcon: React.FC<HomeIconProps> = ({ variant = 'base' }) => {
  const { textColor }: any = usePalette()
  const { theme }: any = useThemeUI()
  const iconColor = get(theme, `${lookup(variant)}.homeIcon.color`)

  return (
    <div
      sx={{
        display: 'inline-block',
        width: '1.25em',
        height: '1em',
        variant: `${lookup(variant)}.homeIcon`
      }}
    >
      <Icon glyph="home" color={textColor || iconColor} />
    </div>
  )
}

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  crumbs: { fields: any; [key: string]: any }[]
  title?: string
  customSeparator?: React.ReactNode | (() => React.ReactNode)
  customBackIcon?: React.ReactNode | (() => React.ReactNode)
  customHomeIcon?: React.ReactNode | (() => React.ReactNode)
  variant?: 'base' | 'light'
  homePath?: string
}

const MobileBreadcrumbs: React.FC<Props> = ({
  crumbs,
  customBackIcon = '<',
  customHomeIcon,
  variant = 'base',
  homePath
}) => {
  const BackIcon =
    typeof customBackIcon === 'function' ? customBackIcon : () => customBackIcon

  let href, backTo

  if (crumbs.length) {
    const lastCrumb = crumbs[crumbs.length - 1]
    href = lastCrumb.fields?.path
    backTo = lastCrumb.fields?.displayText
  } else {
    href = homePath
    backTo = customHomeIcon || <HomeIcon variant={variant} />
  }

  return (
    <Palette
      as={Styled.a}
      sx={{
        display: 'inline-block',
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: 0,
        fontSize: 'xxs',
        variant: `${lookup(variant)}.mobileLink`
      }}
      px={{ color: 'textColor' }}
      href={href}
    >
      <span
        sx={{
          marginRight: 'xxs',
          verticalAlign: customBackIcon === 'function' ? 'middle' : undefined
        }}
      >
        <BackIcon />
      </span>

      {backTo}
    </Palette>
  )
}

const DesktopBreadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customHomeIcon,
  variant = 'base',
  homePath
}) => {
  const liStyling = {
    display: 'inline'
  }

  const anchorStyling = {
    color: 'inherit',
    stroke: 'inherit',
    textDecoration: 'none',
    borderBottom: 0,
    variant: `${lookup(variant)}.a`,
    ':visited': {
      color: 'inherit'
    }
  }

  const Separator =
    typeof customSeparator === 'function'
      ? customSeparator
      : () => customSeparator

  const separatorStyling = {
    display: 'inline-block',
    marginX: 'xs',
    verticalAlign: customSeparator === 'function' ? 'middle' : undefined
  }

  return (
    <Palette
      as={Styled.ul}
      px={{ color: 'textColor' }}
      sx={{
        listStyleType: 'none',
        paddingLeft: 0,
        fontSize: 'xxs',
        marginY: 0,
        variant: `${lookup(variant)}.main`
      }}
    >
      <li sx={liStyling}>
        <Styled.a sx={anchorStyling} href={homePath}>
          {customHomeIcon || <HomeIcon variant={variant} />}
        </Styled.a>

        {(crumbs.length || title) && (
          <span sx={separatorStyling}>
            <Separator />
          </span>
        )}
      </li>

      {crumbs.map(({ fields: fields = {} }, i) => (
        <li sx={liStyling} key={i}>
          <Styled.a sx={anchorStyling} href={fields.path}>
            {fields.displayText}
          </Styled.a>

          {(i !== crumbs.length - 1 || title) && (
            <span sx={separatorStyling}>
              <Separator />
            </span>
          )}
        </li>
      ))}

      {title && (
        <Palette
          as={Styled.li}
          px={{ color: 'textColor' }}
          sx={{ ...liStyling, variant: `${lookup(variant)}.title` }}
        >
          {title}
        </Palette>
      )}
    </Palette>
  )
}

const Breadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customBackIcon = '<',
  customHomeIcon,
  variant = 'base',
  homePath = '/',
  className
}) => {
  if (crumbs.length && crumbs[0].fields?.path === homePath) {
    crumbs = crumbs.slice(1)
  }

  return (
    <div sx={{ variant: `${lookup(variant)}.wrapper` }} className={className}>
      <div sx={{ display: ['block', 'none'] }}>
        <MobileBreadcrumbs
          crumbs={crumbs}
          customBackIcon={customBackIcon}
          customHomeIcon={customHomeIcon}
          variant={variant}
          homePath={homePath}
        />
      </div>
      <div sx={{ display: ['none', 'block'] }}>
        <DesktopBreadcrumbs
          crumbs={crumbs}
          title={title}
          customSeparator={customSeparator}
          customHomeIcon={customHomeIcon}
          variant={variant}
          homePath={homePath}
        />
      </div>
    </div>
  )
}

export default Breadcrumbs
