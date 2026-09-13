import React from 'react'
import { Modal } from '../Modal/Modal'
import './TermsModal.css'

export interface TermsModalProps {
  onAgree?: () => void
  onCancel?: () => void
  onClose?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "OVERLAY" wrapping a Terms & Conditions
 * "Modal", node 4281:91061, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4281-91061). A thin, content-only wrapper around
 * the real generic `Modal` (node 4199:164515): real title/subtitle, the real
 * 3-section reading copy wrapped in its own light-gray panel, and a 2-button
 * group — "I agree" (Modal's default `primary` Button already resolves to the
 * real Cool Blue, `--pk-sys-primary-enabled` = `--pk-ref-blue-100` = #00C1DE) and
 * "Cancel" (Modal's plain `tertiary` secondary button). No third/link button in
 * this real capture, so `linkLabel` is left unset.
 *
 * `get_variable_defs` on this exact node confirms the card is the same plain
 * white `Background/Default` card as every other Modal instance — a first pass
 * here mistakenly read the design-context screenshot's dark canvas backdrop as
 * the modal's own fill and built a dark/"inverse" treatment. The reading panel
 * itself (`.pk-terms-modal__panel`) IS a real distinct surface though — resolved
 * `Surface/Inverse` (~6% black) over the white card, bordered with resolved
 * `Border/Inverse` (~24% black) — matching the visible light-gray box in the
 * capture.
 */
export function TermsModal({ onAgree, onCancel, onClose, className }: TermsModalProps) {
  return (
    <Modal
      title="Terms & Conditions"
      subtitle="Please review the following before continuing. As the lead booker, you must accept these on behalf of your party."
      primaryLabel="I agree"
      onPrimaryAction={onAgree}
      secondaryLabel="Cancel"
      onSecondaryAction={onCancel}
      onClose={onClose ?? onCancel}
      className={className}
    >
      <div className="pk-terms-modal__panel">
        <section className="pk-terms-modal__section">
          <h3 className="pk-terms-modal__section-heading pk-text-title-medium">1. Reservation &amp; arrival</h3>
          <p className="pk-terms-modal__section-copy pk-text-body-medium">
            Please arrive at least 15 minutes before your scheduled tee time. Late arrivals may result in a
            shortened experience without a refund. All players in the party must be checked in before play can
            begin.
          </p>
        </section>
        <section className="pk-terms-modal__section">
          <h3 className="pk-terms-modal__section-heading pk-text-title-medium">2. Player registration</h3>
          <p className="pk-terms-modal__section-copy pk-text-body-medium">
            Each player in your party must register and accept these Terms &amp; Conditions before play. Players
            who have not registered before arrival will be required to complete registration at the kiosk.
          </p>
        </section>
        <section className="pk-terms-modal__section">
          <h3 className="pk-terms-modal__section-heading pk-text-title-medium">3. Conduct &amp; safety</h3>
          <p className="pk-terms-modal__section-copy pk-text-body-medium">
            Puttshack is a family-friendly venue. Guests are expected to conduct themselves in a respectful
            manner. Management reserves the right to refuse entry or remove guests whose behavior is disruptive,
            unsafe, or inappropriate.
          </p>
        </section>
      </div>
    </Modal>
  )
}
