import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Toast } from '../../../components/Toast/Toast'
import { InputField } from '../../../components/InputField/InputField'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { CheckCircle2, User, Phone, Lock } from '../../../icons'
import './PlayerDetailModal.css'

export interface PlayerDetailModalProps {
  playerName: string
  /** Figma: `isSignedIn`-style variant — a registered player sees a read-only
   * success confirmation (node 4753:118285); an unregistered player sees the
   * editable registration form (node 4281:91288). */
  registered: boolean
  phone?: string
  displayName?: string
  ageGroup?: string
  onBack?: () => void
  onClose?: () => void
  onSendRegistrationLink?: (values: { displayName: string; phone: string }) => void
  onRemoveFromParty?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite — the "Register {name}" sub-modal opened from a
 * `PlayerCard`'s chevron button inside "Manage Your Party". Two real
 * captures, both verified via design-context:
 *
 * - Registered (node 4753:118285, "Register Alex Chen") — a success `Toast`
 *   ("{name} is Ready"), read-only "Sent to" / "Phone" fields, a guardian
 *   confirmation checkbox, and a single "Back to Party" button.
 * - Not registered (node 4281:91288, "Register Player 2") — editable
 *   Display Name / Phone Number (Optional) / Age Group (locked) fields,
 *   "Send Registration Link" primary + a "Remove From Party" ghost link.
 */
export function PlayerDetailModal({
  playerName,
  registered,
  phone = '',
  displayName = '',
  ageGroup = '',
  onBack,
  onClose,
  onSendRegistrationLink,
  onRemoveFromParty,
  className,
}: PlayerDetailModalProps) {
  const [nameValue, setNameValue] = useState(displayName)
  const [phoneValue, setPhoneValue] = useState(phone)
  const [guardianConfirmed, setGuardianConfirmed] = useState(true)

  if (registered) {
    return (
      <Modal
        isSecondModal
        onBack={onBack}
        title={`Register ${playerName}`}
        subtitle="Add their name or nickname and mobile number. We'll text them a secure link to complete their registration and accept the Terms & Conditions."
        showInformation
        information={
          <label className="pk-player-detail-modal__guardian-row">
            <Checkbox checked={guardianConfirmed} onCheckedChange={setGuardianConfirmed} />
            <span className="pk-text-label-small">
              I confirm that I am the player&rsquo;s parent or authorised guardian and have permission to accept
              the Terms &amp; Conditions on their behalf.
            </span>
          </label>
        }
        primaryLabel="Back to Party"
        onPrimaryAction={onBack}
        onClose={onClose ?? onBack}
        className={className}
      >
        <Toast
          variant="success"
          inverse
          icon={<CheckCircle2 aria-hidden="true" size={16} />}
          title={`${playerName.split(' ')[0]} is Ready`}
          message={`${playerName.split(' ')[0]} accepted terms and conditions, and has been registered successfully.`}
        />
        <InputField label="Sent to" required readOnly leadingIcon={<User aria-hidden="true" />} value={displayName} />
        <InputField label="Phone" required readOnly leadingIcon={<Phone aria-hidden="true" />} value={phone} />
      </Modal>
    )
  }

  return (
    <Modal
      isSecondModal
      onBack={onBack}
      title={`Register ${playerName}`}
      subtitle="Add their name or nickname and mobile number. We'll text them a secure link to complete their registration and accept the Terms & Conditions."
      primaryLabel="Send Registration Link"
      onPrimaryAction={() => onSendRegistrationLink?.({ displayName: nameValue, phone: phoneValue })}
      linkLabel="Remove From Party"
      onLinkAction={onRemoveFromParty}
      onClose={onClose ?? onBack}
      className={className}
    >
      <InputField
        label="Display Name"
        required
        leadingIcon={<User aria-hidden="true" />}
        helperText="Shows up on the leaderboard during play."
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <InputField
        label="Phone Number (Optional)"
        leadingIcon={<Phone aria-hidden="true" />}
        helperText="If you'd like them to get booking updates by text"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      />
      <InputField
        label="Age Group"
        readOnly
        trailingIcon={<Lock aria-hidden="true" size={20} />}
        value={ageGroup}
      />
    </Modal>
  )
}
