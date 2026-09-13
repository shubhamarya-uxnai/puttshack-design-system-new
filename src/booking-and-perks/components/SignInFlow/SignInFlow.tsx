import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { InputField } from '../../../components/InputField/InputField'
import { Button } from '../../../components/Button/Button'
import { Gift, Phone } from '../../../icons'
import { OtpModal } from './OtpModal'
import './SignInFlow.css'

export interface SignInFlowProps {
  open: boolean
  onClose: () => void
  /** Fires once the demo OTP is verified — the caller flips `isSignedIn`. */
  onSignedIn: () => void
  onJoinPerks?: () => void
}

/**
 * Booking-and-Perks composite — the "Sign In" flow reached from `PerksCard`'s Sign In button.
 * Two real captures:
 * - Phone entry (node 4281:90674, "Welcome back") — a gradient gift-icon badge, a phone
 *   number field, "Send SMS Code" (disabled until a number is entered), and "New here? Join
 *   Perks".
 * - Verification (node 4281:90669 default / 5961:68699 error) — the shared `OtpModal` (also
 *   used by Contact Information's own phone-verify entry point), with the header's Back
 *   button / inline pencil both returning here to edit the number.
 */
export function SignInFlow({ open, onClose, onSignedIn, onJoinPerks }: SignInFlowProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phone, setPhone] = useState('')

  // Always re-open on the phone step — a guest who closes and reopens Sign In starts fresh.
  useEffect(() => {
    if (open) setStep('phone')
  }, [open])

  if (!open) return null

  if (step === 'phone') {
    return (
      <Modal onClose={onClose} showButtonGroup={false}>
        <div className="pk-sign-in-flow__header">
          <div className="pk-sign-in-flow__icon-badge">
            <Gift aria-hidden="true" size={24} />
          </div>
          <div className="pk-sign-in-flow__header-text">
            <span className="pk-modal__title pk-text-title-small-capital">Welcome back</span>
            <p className="pk-modal__subtitle pk-text-body-small">
              Enter your phone number, we&rsquo;ll text you a 6-digit code.
            </p>
          </div>
        </div>

        <InputField
          label="Mobile number"
          leadingIcon={<Phone aria-hidden="true" />}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="pk-modal__button-group">
          <Button variant="primary" disabled={!phone.trim()} onClick={() => setStep('otp')}>
            Send SMS Code
          </Button>
          <Button variant="tertiary" onClick={onJoinPerks}>
            New here? Join Perks
          </Button>
        </div>
      </Modal>
    )
  }

  return (
    <OtpModal
      phone={phone || '(555) 123-4567'}
      onBack={() => setStep('phone')}
      onClose={onClose}
      onVerify={onSignedIn}
    />
  )
}
