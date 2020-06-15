/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'
import { Icon } from '@uswitch/trustyle.icon'

const themePrefix = 'breadcrumbs2'

const lookup = (variant: string) =>
  variant === 'base'
    ? `${themePrefix}.base`
    : `${themePrefix}.variants.${variant}`

interface HomeIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'light'
}

const HomeIcon: React.FC<HomeIconProps> = ({ variant = 'base' }) => {
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
      <Icon glyph="home" color={theme.colors[iconColor]} />
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
    <Styled.a
      sx={{
        display: 'inline-block',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: 'xxs',
        variant: `${lookup(variant)}.mobileLink`
      }}
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
    </Styled.a>
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
    <ul
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
        <li sx={{ ...liStyling, variant: `${lookup(variant)}.title` }}>
          {title}
        </li>
      )}
    </ul>
  )
}

const Breadcrumbs: React.FC<Props> = ({
  crumbs,
  title,
  customSeparator = '>',
  customBackIcon = '<',
  customHomeIcon,
  variant = 'base',
  homePath = '/'
}) => {
  if (crumbs.length && crumbs[0].fields?.path === homePath) {
    crumbs = crumbs.slice(1)
  }

  return (
    <div sx={{ variant: `${lookup(variant)}.wrapper` }}>
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
