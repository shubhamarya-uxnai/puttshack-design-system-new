import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { MessageCircle, Mail, Copy, Check, Info } from '../../../icons'
import './ShareLinkModal.css'

export interface ShareLinkModalProps {
  registrationLink?: string
  onShareViaText?: () => void
  onShareViaEmail?: () => void
  onClose?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "OVERLAY" wrapping the "Share
 * registration link" Modal, node 4281:91056, https://www.figma.com/design/
 * X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4281-91056). Opened
 * by "Share Link" inside `RegistrationCountSummary` on the "Manage Your
 * Party" modal. Real capture: a read-only link field with an inline
 * "Copy" action (not the plain "Close" icon the codegen literally named),
 * a plain (no-box) info row, and a 2-button group — "Share via Text"
 * (primary) and "Share via Email" (tertiary).
 */
export function ShareLinkModal({
  registrationLink = 'puttshack.com/register/PSK-P4381PB',
  onShareViaText,
  onShareViaEmail,
  onClose,
  className,
}: ShareLinkModalProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard?.writeText(registrationLink).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Modal
      title="Share registration link"
      subtitle="Send this link to your group so each adult can complete their own registration and accept the terms. A parent or authorized guardian can complete registration for a minor."
      showInformation
      information={
        <>
          <Info aria-hidden="true" size={16} />
          <span className="pk-text-label-small">
            Each guest will identify themselves or add their details before completing registration. No one
            else&rsquo;s personal information will be shown.
          </span>
        </>
      }
      primaryLabel="Share via Text"
      primaryIcon={<MessageCircle aria-hidden="true" size={20} />}
      onPrimaryAction={onShareViaText}
      secondaryLabel="Share via Email"
      secondaryLeadingIcon={<Mail aria-hidden="true" size={20} />}
      onClose={onClose}
      className={className}
    >
      <div className="pk-share-link-modal__field">
        <span className="pk-share-link-modal__label pk-text-label-medium">
          Share Link <span className="pk-share-link-modal__required">*</span>
        </span>
        <div className="pk-share-link-modal__row">
          <span className="pk-share-link-modal__link pk-text-body-medium">{registrationLink}</span>
          <button type="button" className="pk-share-link-modal__copy pk-text-label-medium" onClick={handleCopy}>
            {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </Modal>
  )
}
