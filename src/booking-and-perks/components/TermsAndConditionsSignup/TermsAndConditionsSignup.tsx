import React from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { Stepper } from '../../../components/Stepper/Stepper'
import { Button } from '../../../components/Button/Button'
import { User, AtSign, Phone, Calendar, MapPin, AtSign as UsernameIcon } from '../../../icons'
import './TermsAndConditionsSignup.css'

export interface TermsAndConditionsSignupProps {
  onAddField?: () => void
  onCreateAccount?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Terms and conditions/Signup/October").
 * A full sign-up form: 6 DS `InputField`s, 2 DS `Checkbox`es, the DS
 * `Stepper` ("Add") and a DS `Button` ("Create Account") — matching the
 * captured instance list exactly. Has no variant/boolean props in the
 * snapshot ("props": {}), so this component is presentational-copy only.
 */
export function TermsAndConditionsSignup({ onAddField, onCreateAccount, className }: TermsAndConditionsSignupProps) {
  return (
    <section className={cx('pk-tnc-signup', className)}>
      <span className="pk-tnc-signup__heading pk-text-title-small-capital">Create your account</span>

      <InputField label="Full Name" required leadingIcon={<User aria-hidden="true" />} defaultValue="John Doe" />
      <InputField label="Email" required leadingIcon={<AtSign aria-hidden="true" />} defaultValue="johndoe@gmail.com" />
      <InputField label="Mobile number" required leadingIcon={<Phone aria-hidden="true" />} defaultValue="(312) 555-0148" />
      <InputField label="Date of Birth" leadingIcon={<Calendar aria-hidden="true" />} defaultValue="24/03/1996" />
      <InputField
        label="Preferred Location"
        leadingIcon={<MapPin aria-hidden="true" />}
        placeholder="Type city, state, area or zip"
      />
      <InputField label="Username" required leadingIcon={<UsernameIcon aria-hidden="true" />} placeholder="Input Text" />

      <label className="pk-tnc-signup__row">
        <Checkbox tooltipIcon />
        <span className="pk-text-label-small">I agree to the Puttshack terms &amp; conditions.</span>
      </label>
      <label className="pk-tnc-signup__row">
        <Checkbox tooltipIcon />
        <span className="pk-text-label-small">I'd like to receive marketing emails and offers.</span>
      </label>

      <Stepper direction="add" aria-label="Add another field" onClick={onAddField} />

      <Button variant="secondary" onClick={onCreateAccount}>
        Create Account
      </Button>
    </section>
  )
}
