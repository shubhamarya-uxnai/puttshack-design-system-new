import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { InputField } from '../../../components/InputField/InputField'
import { InputOTP } from '../../../components/InputOTP/InputOTP'
import { Button } from '../../../components/Button/Button'
import { Gift, Phone, Pencil, Timer } from '../../../icons'
import './SignInFlow.css'

/** No real backend behind this prototype — any code except this one demo value shows the
 * real "Invalid Password" error state (Figma node 5961:68699). */
const DEMO_OTP_CODE = '123456'
const RESEND_SECONDS = 30

export interface SignInFlowProps {
  open: boolean
  onClose: () => void
  /** Fires once the demo OTP is verified — the caller flips `isSignedIn`. */
  onSignedIn: () => void
  onJoinPerks?: () => void
}

/**
 * Booking-and-Perks composite — the "Sign In" flow reached from `PerksCard`'s Sign In button.
 * Two real captures, both on the shared `Modal` shell:
 * - Phone entry (node 4281:90674, "Welcome back") — a gradient gift-icon badge, a phone
 *   number field, "Send SMS Code" (disabled until a number is entered), and "New here? Join
 *   Perks".
 * - Verification (node 4281:90669 default / 5961:68699 error, "Check your texts") — a BACK
 *   button to return to the phone step (same as the inline pencil-edit affordance next to the
 *   masked number), the real `InputOTP`, a "Resend code in 00:30" countdown (node 4281:90669)
 *   that disables Resend Code until it lapses, and — on a wrong code — the real error state:
 *   InputOTP's own error border/clear plus "Invalid Password" copy (verbatim from the source
 *   file, not a corrected "Invalid code").
 */
export function SignInFlow({ open, onClose, onSignedIn, onJoinPerks }: SignInFlowProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phone, setPhone] = useState('')
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)
  const [pendingCode, setPendingCode] = useState('')
  const [otpError, setOtpError] = useState(false)

  // Always re-open on the phone step — a guest who closes and reopens Sign In starts fresh.
  useEffect(() => {
    if (open) {
      setStep('phone')
      setOtpError(false)
      setPendingCode('')
    }
  }, [open])

  useEffect(() => {
    if (step !== 'otp' || secondsLeft <= 0) return
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [step, secondsLeft])

  if (!open) return null

  function goToOtp() {
    setStep('otp')
    setSecondsLeft(RESEND_SECONDS)
    setOtpError(false)
    setPendingCode('')
  }

  function handleVerify() {
    if (pendingCode === DEMO_OTP_CODE) {
      setOtpError(false)
      onSignedIn()
    } else {
      setOtpError(true)
      setPendingCode('')
    }
  }

  function handleResend() {
    setSecondsLeft(RESEND_SECONDS)
    setOtpError(false)
    setPendingCode('')
  }

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
          <Button variant="primary" disabled={!phone.trim()} onClick={goToOtp}>
            Send SMS Code
          </Button>
          <Button variant="tertiary" onClick={onJoinPerks}>
            New here? Join Perks
          </Button>
        </div>
      </Modal>
    )
  }

  const codeReady = pendingCode.length === 6

  return (
    <Modal isSecondModal onBack={() => setStep('phone')} onClose={onClose} showButtonGroup={false}>
      <div className="pk-sign-in-flow__otp-heading">
        <span className="pk-modal__title pk-text-title-small-capital">Check your texts</span>
        <div className="pk-sign-in-flow__otp-subtitle">
          <p className="pk-modal__subtitle pk-text-body-small">
            We sent a 6 digit code to <strong>{phone || '(555) 123-4567'}</strong>
          </p>
          <button
            type="button"
            className="pk-sign-in-flow__edit"
            aria-label="Edit phone number"
            onClick={() => setStep('phone')}
          >
            <Pencil aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <InputOTP
        size="mobile"
        length={6}
        autoFocus
        error={otpError}
        errorMessage="Invalid Password"
        onComplete={setPendingCode}
      />

      {!otpError && (
        <div className="pk-sign-in-flow__timer">
          <Timer aria-hidden="true" size={16} />
          <span className="pk-text-body-medium">
            Resend code in 00:{String(secondsLeft).padStart(2, '0')}
          </span>
        </div>
      )}

      <div className="pk-modal__button-group">
        <Button variant="primary" disabled={!codeReady} onClick={handleVerify}>
          Verify and Sign In
        </Button>
        <Button variant="tertiary" disabled={secondsLeft > 0} onClick={handleResend}>
          Resend Code
        </Button>
      </div>
    </Modal>
  )
}
