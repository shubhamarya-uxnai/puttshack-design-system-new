import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { InputOTP } from '../../../components/InputOTP/InputOTP'
import { Button } from '../../../components/Button/Button'
import { Pencil, Timer } from '../../../icons'
import './SignInFlow.css'

/** No real backend behind this prototype — any code except this one demo value shows the
 * real "Invalid Password" error state (Figma node 5961:68699). */
export const DEMO_OTP_CODE = '123456'
const RESEND_SECONDS = 30

export interface OtpModalProps {
  /** The number the code was "sent" to — shown in the subtitle. */
  phone: string
  onClose: () => void
  /** Fires with the entered code once all 6 digits are in and "Verify" is pressed. */
  onVerify: (code: string) => void
  /** Renders the header's "BACK" button and the inline pencil-edit affordance when provided
   * (e.g. Sign In's own phone step) — omit when there's no earlier step to return to (e.g.
   * verifying a phone number already committed to a form). */
  onBack?: () => void
}

/**
 * Booking-and-Perks composite — the "Check your texts" OTP step shared by the Sign In flow
 * (node 4281:90669 default / 5961:68699 error) and any other phone-verification entry point
 * (e.g. Contact Information's own "Verify" button) that needs the identical real behavior:
 * a 30s "Resend Code" countdown, a "Verify and Sign In"-style primary disabled until all 6
 * digits are entered, and the real wrong-code error state (InputOTP's own border/clear plus
 * "Invalid Password" copy, verbatim from the source file).
 */
export function OtpModal({ phone, onClose, onVerify, onBack }: OtpModalProps) {
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)
  const [pendingCode, setPendingCode] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [secondsLeft])

  function handleVerify() {
    if (pendingCode === DEMO_OTP_CODE) {
      setError(false)
      onVerify(pendingCode)
    } else {
      setError(true)
      setPendingCode('')
    }
  }

  function handleResend() {
    setSecondsLeft(RESEND_SECONDS)
    setError(false)
    setPendingCode('')
  }

  const codeReady = pendingCode.length === 6

  return (
    <Modal isSecondModal={Boolean(onBack)} onBack={onBack} onClose={onClose} showButtonGroup={false}>
      <div className="pk-sign-in-flow__otp-heading">
        <span className="pk-modal__title pk-text-title-small-capital">Check your texts</span>
        <div className="pk-sign-in-flow__otp-subtitle">
          <p className="pk-modal__subtitle pk-text-body-small">
            We sent a 6 digit code to <strong>{phone}</strong>
          </p>
          {onBack && (
            <button type="button" className="pk-sign-in-flow__edit" aria-label="Edit phone number" onClick={onBack}>
              <Pencil aria-hidden="true" size={16} />
            </button>
          )}
        </div>
      </div>

      <InputOTP size="mobile" length={6} autoFocus error={error} errorMessage="Invalid Password" onComplete={setPendingCode} />

      {!error && (
        <div className="pk-sign-in-flow__timer">
          <Timer aria-hidden="true" size={16} />
          <span className="pk-text-body-medium">Resend code in 00:{String(secondsLeft).padStart(2, '0')}</span>
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
