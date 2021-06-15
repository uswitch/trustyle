/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import Modal from '@uswitch/trustyle.modal'

interface PhoneNumberModalInfo {
  phoneNumber: string
  logoUrl: string
  logoDescription: string
  termsAndConditions: string
  openingTimes?: string[]
  url?: string
  complianceText: string[]
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  phoneNumberModalInfo: PhoneNumberModalInfo
  logoImageCritical?: boolean
  modalAriaLabel?: string
  setStateClosed: () => void
}

const PhoneNumberModal: React.FC<Props> = ({
  phoneNumberModalInfo,
  logoImageCritical = true,
  modalAriaLabel = 'phone number overlay',
  setStateClosed
}) => {
  const complianceTextElements = phoneNumberModalInfo.complianceText.map(
    (text, i) => {
      return (
        <p
          key={`compliance_text_${i}`}
          sx={{
            variant: 'compounds.phone-number-modal.text',
            paddingX: ['0', 'xs'],
            fontWeight:
              i === phoneNumberModalInfo.complianceText.length - 1
                ? 'bolder'
                : 'base'
          }}
        >
          {text}
        </p>
      )
    }
  )

  const openingTimesInfo =
    phoneNumberModalInfo.openingTimes &&
    phoneNumberModalInfo.openingTimes.slice(1).map((line, i) => {
      return (
        <p
          sx={{
            variant: 'compounds.phone-number-modal.text',
            marginY: '0'
          }}
          key={`opening_times_${i}`}
        >
          {line}
        </p>
      )
    })

  return (
    <Modal ariaLabel={modalAriaLabel} onClose={setStateClosed}>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginX: ['sm', 'xl'],
          paddingBottom: 'lg',
          marginBottom: ['0', 'xs']
        }}
      >
        <div
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: ['column', 'row'],
            paddingLeft: ['auto', 'lg'],
            marginBottom: ['xs', 'sm'],
            textAlign: ['center', 'left']
          }}
        >
          <ImgixImage
            src={phoneNumberModalInfo.logoUrl}
            alt={phoneNumberModalInfo.logoDescription}
            sx={{
              width: [100, 160],
              maxWidth: '100%',
              height: 'auto',
              display: ['block', 'inline-block'],
              alignSelf: 'center',
              marginRight: ['0', 'xl'],
              marginBottom: ['sm', '0']
            }}
            imgixParams={{
              fit: 'fillmax'
            }}
            critical={logoImageCritical}
          />
          <div sx={{ marginLeft: ['0', 'xs'] }}>
            <div sx={{ marginBottom: 'sm' }}>
              <h4
                sx={{
                  variant: 'compounds.phone-number-modal.logo-area-heading',
                  marginY: '0'
                }}
              >
                For more information call
              </h4>
              <p
                sx={{
                  display: ['none', 'inline-block'],
                  marginY: '0',
                  variant: 'compounds.phone-number-modal.logo-area-text'
                }}
              >
                {phoneNumberModalInfo.phoneNumber}
              </p>
              <a
                href={`tel:${phoneNumberModalInfo.phoneNumber}`}
                sx={{
                  display: ['inline-block', 'none'],
                  marginY: '0',
                  variant: 'compounds.phone-number-modal.a.logo-area'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phoneNumberModalInfo.phoneNumber}
              </a>
            </div>
            {phoneNumberModalInfo.openingTimes && (
              <div sx={{ textAlign: 'left' }}>
                <h5
                  sx={{
                    variant: 'compounds.phone-number-modal.heading',
                    marginBottom: '0'
                  }}
                >
                  {phoneNumberModalInfo.openingTimes[0]}
                </h5>
                {openingTimesInfo}
              </div>
            )}
          </div>
        </div>
        {phoneNumberModalInfo.termsAndConditions && (
          <div
            sx={{ marginBottom: phoneNumberModalInfo.url ? ['0', 'xs'] : 'xs' }}
          >
            <p sx={{ variant: 'compounds.phone-number-modal.text' }}>
              {phoneNumberModalInfo.termsAndConditions}
            </p>
          </div>
        )}
        {phoneNumberModalInfo.url && (
          <div
            sx={{
              textAlign: 'center',
              marginBottom: ['0', 'xs'],
              variant: 'compounds.phone-number-modal.url'
            }}
          >
            <p>
              or to apply online visit&nbsp;
              <a
                sx={{ variant: 'compounds.phone-number-modal.a.url' }}
                href={phoneNumberModalInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                our site
              </a>
            </p>
          </div>
        )}
        <div
          sx={{
            textAlign: 'center',
            paddingTop: 'sm',
            paddingX: ['sm', 'lg'],
            backgroundColor: 'grey-10'
          }}
        >
          {complianceTextElements}
        </div>
      </div>
    </Modal>
  )
}

export default PhoneNumberModal
