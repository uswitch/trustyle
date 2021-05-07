/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import Modal from '@uswitch/trustyle.modal'

type setStateClosed = () => void

interface PhoneNumber {
  phoneNumber: string
  logoUrl: string
  logoDescription: string
  termsAndConditions: string
  openingTimes?: string[]
  url?: string
  complianceText: string[]
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  phoneNumber: PhoneNumber
  imageCritical?: boolean
  isOpen: boolean
  setStateClosed: setStateClosed
}

const PhoneNumberModal: React.FC<Props> = ({
  phoneNumber,
  imageCritical = true,
  isOpen,
  setStateClosed
}) => {
  const complianceTextElements = phoneNumber.complianceText.map((text, i) => {
    return (
      <p
        key={`compliance_text_${i}`}
        sx={{
          fontWeight:
            i === phoneNumber.complianceText.length - 1 ? 'bolder' : 'base'
        }}
      >
        {text}
      </p>
    )
  })

  if (isOpen) {
    return (
      <Modal
        ariaLabel="An example modal element"
        onClose={setStateClosed}
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
              src={phoneNumber.logoUrl}
              alt={phoneNumber.logoDescription}
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
            <div sx={{ marginLeft: ['0', 'xs'] }}>
              <div
                sx={{
                  marginBottom: 'sm',
                  variant: 'compounds.phone-number-modal.phone-number'
                }}
              >
                <h3>For more information call</h3>
                <p sx={{ display: ['none', 'inline-block'] }}>
                  {phoneNumber.phoneNumber}
                </p>
                <a
                  href={`tel:${phoneNumber.phoneNumber}`}
                  sx={{
                    display: ['inline-block', 'none']
                  }}
                >
                  {phoneNumber.phoneNumber}
                </a>
              </div>
              {phoneNumber.openingTimes && (
                <div
                  sx={{
                    textAlign: 'left',
                    variant: 'compounds.phone-number-modal.opening-times'
                  }}
                >
                  <h5>{phoneNumber.openingTimes[0]}</h5>
                  {phoneNumber.openingTimes.slice(1).map((line, i) => (
                    <p key={`opening_times_${i}`}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          {phoneNumber.termsAndConditions && (
            <div
              sx={{
                marginBottom: ['0', 'xs'],
                variant: 'compounds.phone-number-modal'
              }}
            >
              <p>{phoneNumber.termsAndConditions}</p>
            </div>
          )}
          {phoneNumber.url && (
            <div
              sx={{
                textAlign: 'center',
                marginBottom: ['0', 'xs'],
                variant: 'compounds.phone-number-modal.url'
              }}
            >
              <p>
                or to apply online visit <a href={phoneNumber.url}>our site</a>
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
