/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import Modal from '@uswitch/trustyle.modal'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logo: string
  logoDescription: string
  imageCritical?: boolean
  phoneNumber: string
  openingTimes?: any
  termsAndConditions?: string
  url?: string
  complianceText: any
}

const PhoneNumberModal: React.FC<Props> = ({
  logo,
  logoDescription,
  imageCritical = true,
  phoneNumber,
  openingTimes,
  termsAndConditions,
  url,
  complianceText
}) => {
  return (
    <Modal
      ariaLabel="An example modal element"
      onClose={action('Clicked close')}
      focusLockProps={{
        whiteList: node =>
          document.getElementById('app')?.contains(node) ?? false
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingX: ['sm', 'xl'],
          paddingBottom: 'lg',
          marginBottom: ['0', 'xs']
        }}
      >
        <div
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: ['column', 'row'],
            paddingRight: ['auto', 'xl'],
            paddingLeft: ['auto', 'lg'],
            marginBottom: ['xs', 'sm'],
            textAlign: ['center', 'left'],
            variant: 'compounds.phone-number-modal.logo-area'
          }}
        >
          <ImgixImage
            src={logo}
            alt={logoDescription}
            sx={{
              width: 'auto',
              maxWidth: '100%',
              height: [48, 78],
              display: ['block', 'inline-block'],
              alignSelf: 'center',
              marginRight: ['0', 'xl']
            }}
            imgixParams={{
              fit: 'fillmax'
            }}
            critical={imageCritical}
          />
          <div
            sx={{
              marginLeft: ['0', 'xs']
            }}
          >
            <div
              sx={{
                marginBottom: 'sm',
                variant: 'compounds.phone-number-modal.phone-number'
              }}
            >
              <h3>For more information call</h3>
              <p
                sx={{
                  display: ['none', 'inline-block']
                }}
              >
                {phoneNumber}
              </p>
              <a
                href={`tel:${phoneNumber}`}
                sx={{
                  display: ['inline-block', 'none']
                }}
              >
                {phoneNumber}
              </a>
            </div>
            {openingTimes && (
              <div
                sx={{
                  textAlign: 'left',
                  variant: 'compounds.phone-number-modal.opening-times'
                }}
              >
                {openingTimes}
              </div>
            )}
          </div>
        </div>
        {termsAndConditions && (
          <div
            sx={{
              marginBottom: ['0', 'xs'],
              variant: 'compounds.phone-number-modal'
            }}
          >
            <p>{termsAndConditions}</p>
          </div>
        )}
        {url && (
          <div
            sx={{
              textAlign: 'center',
              marginBottom: ['0', 'xs'],
              variant: 'compounds.phone-number-modal.url'
            }}
          >
            <p>
              or to apply online visit <a href={url}>our site</a>
            </p>
          </div>
        )}
        <div
          sx={{
            textAlign: 'center',
            paddingX: ['sm', 'lg'],
            paddingY: 'sm',
            variant: 'compounds.phone-number-modal.compliance-text'
          }}
        >
          {complianceText}
        </div>
      </div>
    </Modal>
  )
}

export default PhoneNumberModal
