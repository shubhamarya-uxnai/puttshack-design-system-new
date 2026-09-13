import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Toast } from '../../../components/Toast/Toast'
import { InputField } from '../../../components/InputField/InputField'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { CheckCircle2, Info, User, Phone, Lock, Edit3, X } from '../../../icons'
import './PlayerDetailModal.css'

export type PlayerDetailStatus = 'registered' | 'link-sent' | 'not-registered'

export interface PlayerDetailModalProps {
  playerName: string
  /** Figma: the 3 real captures this sub-modal switches between — registered
   * (node 4753:118285), link sent but not yet accepted (node 4753:118277), and
   * not yet sent (node 4281:91288). */
  status: PlayerDetailStatus
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
 * `PlayerCard`'s chevron button inside "Manage Your Party". Three real
 * captures, all verified via design-context:
 *
 * - Registered (node 4753:118285) — a success `Toast`, read-only "Sent to" /
 *   "Phone" fields, a guardian confirmation checkbox, and a single "Back to
 *   Party" button.
 * - Link sent (node 4753:118277) — an informative `Toast` ("Link has been
 *   Sent to {name}"), the same read-only fields + guardian checkbox, and 3
 *   buttons: "Resend registration link" / "Edit contact information" (with a
 *   leading edit icon) / "Remove from party" (with a leading "X").
 * - Not registered (node 4281:91288) — editable Display Name / Phone Number
 *   (Optional) / Age Group (locked) fields, "Send Registration Link" +
 *   "Remove From Party" (no icon on this one).
 *
 * Rule established this session: a `Toast` used as a floating card inside a
 * Modal is always `inverse`, regardless of the Modal's own (always-white)
 * background — both real captures with a Toast in this sub-modal confirm it
 * (success #001D06/#00742F, informative #031A27/#008DC8).
 */
export function PlayerDetailModal({
  playerName,
  status,
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
  const firstName = playerName.split(' ')[0]

  if (status === 'not-registered') {
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
        <InputField label="Age Group" readOnly trailingIcon={<Lock aria-hidden="true" size={20} />} value={ageGroup} />
      </Modal>
    )
  }

  const guardianInformation = (
    <label className="pk-player-detail-modal__guardian-row">
      <Checkbox checked={guardianConfirmed} onCheckedChange={setGuardianConfirmed} />
      <span className="pk-text-label-small">
        I confirm that I am the player&rsquo;s parent or authorised guardian and have permission to accept the
        Terms &amp; Conditions on their behalf.
      </span>
    </label>
  )

  if (status === 'link-sent') {
    return (
      <Modal
        isSecondModal
        onBack={onBack}
        title={`Register ${playerName}`}
        subtitle="Add their name or nickname and mobile number. We'll text them a secure link to complete their registration and accept the Terms & Conditions."
        showInformation
        information={guardianInformation}
        primaryLabel="Resend registration link"
        onPrimaryAction={() => onSendRegistrationLink?.({ displayName, phone })}
        secondaryLabel="Edit contact information"
        secondaryLeadingIcon={<Edit3 aria-hidden="true" size={20} />}
        onSecondaryAction={onBack}
        linkLabel="Remove from party"
        linkIcon={<X aria-hidden="true" size={24} />}
        onLinkAction={onRemoveFromParty}
        onClose={onClose ?? onBack}
        className={className}
      >
        <Toast
          variant="informative"
          inverse
          icon={<Info aria-hidden="true" />}
          title={`Link has been Sent to ${firstName}`}
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
      showInformation
      information={guardianInformation}
      primaryLabel="Back to Party"
      onPrimaryAction={onBack}
      onClose={onClose ?? onBack}
      className={className}
    >
      <Toast
        variant="success"
        inverse
        icon={<CheckCircle2 aria-hidden="true" size={16} />}
        title={`${firstName} is Ready`}
        message={`${firstName} accepted terms and conditions, and has been registered successfully.`}
      />
      <InputField label="Sent to" required readOnly leadingIcon={<User aria-hidden="true" />} value={displayName} />
      <InputField label="Phone" required readOnly leadingIcon={<Phone aria-hidden="true" />} value={phone} />
    </Modal>
  )
}
