/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import Modal from '@uswitch/trustyle.modal'

type setStateClosed = () => void

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
  isOpen: boolean
  modalAriaLabel: string
  setStateClosed: setStateClosed
}

const PhoneNumberModal: React.FC<Props> = ({
  phoneNumberModalInfo,
  logoImageCritical = true,
  isOpen,
  modalAriaLabel,
  setStateClosed
}) => {
  const complianceTextElements = phoneNumberModalInfo.complianceText.map(
    (text, i) => {
      return (
        <p
          key={`compliance_text_${i}`}
          sx={{
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

  if (isOpen) {
    return (
      <Modal ariaLabel={modalAriaLabel} onClose={setStateClosed}>
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
              src={phoneNumberModalInfo.logoUrl}
              alt={phoneNumberModalInfo.logoDescription}
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
              critical={logoImageCritical}
            />
            <div sx={{ marginLeft: ['0', 'xs'] }}>
              <div
                sx={{
                  marginBottom: 'sm',
                  variant: 'compounds.phone-number-modal.phone-number'
                }}
              >
                <h3>For more information call</h3>
                <p sx={{ display: ['none', 'inline-block'] }}>
                  {phoneNumberModalInfo.phoneNumber}
                </p>
                <a
                  href={`tel:${phoneNumberModalInfo.phoneNumber}`}
                  sx={{
                    display: ['inline-block', 'none']
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phoneNumberModalInfo.phoneNumber}
                </a>
              </div>
              {phoneNumberModalInfo.openingTimes && (
                <div
                  sx={{
                    textAlign: 'left',
                    variant: 'compounds.phone-number-modal.opening-times'
                  }}
                >
                  <h5>{phoneNumberModalInfo.openingTimes[0]}</h5>
                  {phoneNumberModalInfo.openingTimes.slice(1).map((line, i) => (
                    <p key={`opening_times_${i}`}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          {phoneNumberModalInfo.termsAndConditions && (
            <div
              sx={{
                marginBottom: ['0', 'xs'],
                variant: 'compounds.phone-number-modal'
              }}
            >
              <p>{phoneNumberModalInfo.termsAndConditions}</p>
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
                or to apply online visit
                <a
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
              paddingY: 'sm',
              paddingX: ['sm', 'lg'],
              variant: 'compounds.phone-number-modal.compliance-text'
            }}
          >
            {complianceTextElements}
          </div>
        </div>
      </Modal>
    )
  }

  return null
}

export default PhoneNumberModal
