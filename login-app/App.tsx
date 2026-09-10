import React, { useState } from 'react'
import { Button } from '../src/components/Button/Button'
import { InputField } from '../src/components/InputField/InputField'
import { InputOTP } from '../src/components/InputOTP/InputOTP'
import { Badge } from '../src/components/Badge/Badge'
import { ChevronLeft, Phone, CheckCircle2, Check } from '../src/icons'
import wordmark from '../src/screens/BookingRegistration/assets/puttshack-wordmark.svg'

/**
 * 4-screen login flow, built only from existing DS components (Button,
 * InputField, InputOTP, Badge) plus Lucide icons already wired into the
 * component set. No Storybook — a standalone page for localhost preview.
 *
 * Screen 1 uses the branded magenta backdrop (Background/Background in
 * Figma) with every component's `inverse` prop, exactly what that prop
 * exists for. Screens 2–4 stay on the neutral surface for form readability.
 */

type Screen = 'hi' | 'phone' | 'otp' | 'in'

const DIGITS_REQUIRED = 10

export default function App() {
  const [screen, setScreen] = useState<Screen>('hi')
  const [phone, setPhone] = useState('')

  const phoneDigits = phone.replace(/\D/g, '')
  const canSendCode = phoneDigits.length >= DIGITS_REQUIRED

  return (
    <div className={`app-shell ${screen === 'hi' ? 'app-shell--brand' : 'app-shell--default'}`}>
      {screen === 'hi' && (
        <section className="app-screen app-screen--brand app-screen__center">
          <div className="app-screen__spacer" />
          <img src={wordmark} alt="Puttshack" className="app-screen__wordmark" />
          <div className="app-screen__body">
            <h1 className="app-screen__heading pk-text-display-medium" style={{ color: 'var(--pk-sys-text-inverse)' }}>
              Hi there
            </h1>
            <p className="app-screen__subtext pk-text-body-medium">
              Welcome to Puttshack. Sign in to book your next round.
            </p>
          </div>
          <div className="app-screen__spacer" />
          <div className="app-screen__actions">
            <Button variant="primary" size="default" inverse onClick={() => setScreen('phone')}>
              Get started
            </Button>
          </div>
        </section>
      )}

      {screen === 'phone' && (
        <section className="app-screen">
          <button className="app-screen__back pk-text-label-medium" onClick={() => setScreen('hi')} type="button">
            <ChevronLeft size={18} /> Back
          </button>
          <div className="app-screen__body">
            <h1 className="app-screen__heading pk-text-headline-small">What's your number?</h1>
            <p className="app-screen__subtext pk-text-body-medium">We'll text you a code to sign in.</p>
          </div>
          <div className="app-screen__form">
            <InputField
              label="Phone number"
              required
              type="tel"
              inputMode="tel"
              placeholder="(555) 123-4567"
              leadingIcon={<Phone size={18} />}
              helperText="Standard message and data rates may apply."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="app-screen__spacer" />
          <div className="app-screen__actions">
            <Button
              variant="primary"
              size="default"
              disabled={!canSendCode}
              onClick={() => setScreen('otp')}
            >
              Send code
            </Button>
          </div>
        </section>
      )}

      {screen === 'otp' && (
        <section className="app-screen">
          <button className="app-screen__back pk-text-label-medium" onClick={() => setScreen('phone')} type="button">
            <ChevronLeft size={18} /> Back
          </button>
          <div className="app-screen__body">
            <h1 className="app-screen__heading pk-text-headline-small">Enter the code</h1>
            <p className="app-screen__subtext pk-text-body-medium">
              We sent a 6-digit code to {phone || 'your phone'}.
            </p>
          </div>
          <div className="app-screen__form">
            <InputOTP length={6} autoFocus label="Verification code" onComplete={() => setScreen('in')} />
          </div>
          <div className="app-screen__spacer" />
          <div className="app-screen__actions">
            <Button variant="ghost" size="default">
              Resend code
            </Button>
          </div>
        </section>
      )}

      {screen === 'in' && (
        <section className="app-screen app-screen__center">
          <div className="app-screen__spacer" />
          <CheckCircle2 className="app-screen__success-icon" strokeWidth={1.5} />
          <div className="app-screen__body">
            <h1 className="app-screen__heading pk-text-headline-small">You're in!</h1>
            <p className="app-screen__subtext pk-text-body-medium">Your Puttshack account is ready to go.</p>
            <div>
              <Badge type="icon-text" status="success" icon={<Check size={14} />}>
                Verified
              </Badge>
            </div>
          </div>
          <div className="app-screen__spacer" />
          <div className="app-screen__actions">
            <Button
              variant="primary"
              size="default"
              onClick={() => {
                setPhone('')
                setScreen('hi')
              }}
            >
              Start playing
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}
