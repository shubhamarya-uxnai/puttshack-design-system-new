import React, { useState } from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Stepper } from '../../../components/Stepper/Stepper'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { Button } from '../../../components/Button/Button'
import { User, AtSign, Phone, Calendar, MapPin } from '../../../icons'
import './ContactInformationForm.css'

/** Figma variant property `isSignedIn`. `Property 2` ("October") is a constant release tag, not modeled. */
export type ContactInformationFormSignedIn = boolean

export interface ContactInformationFormProps {
  /** Figma: `Only Junior#4435:7` boolean — hides the adult-only fields (email/phone/DOB) when true. @default false */
  onlyJunior?: boolean
  /** Figma: `isSignedIn` variant — pre-fills name/email from account and hides those fields' inputs behind read-only display. When
   * false, the phone field also needs verification and the "Join Perks"/create-account block below is shown. @default false */
  isSignedIn?: ContactInformationFormSignedIn
  /** Values, all optional and defaulted to the captured Figma sample copy. */
  fullName?: string
  displayName?: string
  email?: string
  phone?: string
  dateOfBirth?: string
  /** Called when the "Add" stepper is pressed — the captured instance ("Add / Active=True") adds another registrant field group. */
  onAddRegistrant?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Contact Information Form", node
 * 4435:179208, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4435-179208). Reuses the DS `InputField`
 * for every field and the DS `Stepper` ("Add" variant) for the trailing
 * add-another-registrant control. `isSignedIn=False` (node 4123:151405)
 * additionally shows a "Verify" button next to the phone field — clicking
 * it marks the number verified — plus a gold-bordered "Join Perks" card and
 * a preferred-location/consent/"Create Account" block, matching the real
 * captured not-signed-in state. `isSignedIn=True` (node 4123:151454) omits
 * all of that.
 */
export function ContactInformationForm({
  onlyJunior = false,
  isSignedIn = false,
  fullName = 'John',
  displayName = 'John',
  email = 'john@example.com',
  phone = '(555) 123-4567',
  dateOfBirth = '07/24/1992',
  onAddRegistrant,
  className,
}: ContactInformationFormProps) {
  const [phoneVerified, setPhoneVerified] = useState(false)

  return (
    <section className={cx('pk-contact-info-form', className)}>
      <span className="pk-contact-info-form__heading pk-text-title-small-capital">Contact Information</span>

      <InputField
        label="Full Name"
        required
        inverse
        leadingIcon={<User aria-hidden="true" />}
        defaultValue={fullName}
        readOnly={isSignedIn}
      />
      <InputField
        label="Display Name"
        required
        inverse
        leadingIcon={<User aria-hidden="true" />}
        helperText="Shows up on the leaderboard during play."
        defaultValue={displayName}
      />

      {!onlyJunior && (
        <>
          <InputField
            label="Email"
            required
            inverse
            leadingIcon={<AtSign aria-hidden="true" />}
            defaultValue={email}
            readOnly={isSignedIn}
          />

          {isSignedIn || phoneVerified ? (
            <InputField
              label="Phone number"
              required
              inverse
              leadingIcon={<Phone aria-hidden="true" />}
              helperText="We'll text booking updates and your party's check-in code."
              defaultValue={phone}
              readOnly={isSignedIn}
            />
          ) : (
            <div className="pk-contact-info-form__phone-row">
              <InputField
                label="Phone number"
                required
                inverse
                leadingIcon={<Phone aria-hidden="true" />}
                helperText="We'll text booking updates and your party's check-in code."
                defaultValue={phone}
              />
              <Button
                className="pk-contact-info-form__verify"
                onClick={() => setPhoneVerified(true)}
              >
                Verify
              </Button>
            </div>
          )}

          <InputField
            label="Date of birth"
            inverse
            leadingIcon={<Calendar aria-hidden="true" />}
            defaultValue={dateOfBirth}
          />
        </>
      )}

      <Stepper direction="add" aria-label="Add another registrant" onClick={onAddRegistrant} />

      {!isSignedIn && (
        <>
          <div className="pk-contact-info-form__perks-card">
            <div className="pk-contact-info-form__perks-card-top">
              <Checkbox checked className="pk-contact-info-form__perks-checkbox" aria-label="Join Perks" />
              <div className="pk-contact-info-form__perks-heading-row">
                <span className="pk-contact-info-form__perks-title pk-text-title-small-capital">Join Perks - it's free</span>
                <span className="pk-contact-info-form__perks-badge pk-text-label-medium">Free apps &amp; games</span>
              </div>
            </div>
            <p className="pk-contact-info-form__perks-copy pk-text-body-small">
              Earn free apps, free games, birthday rewards &amp; more. Use your phone number to sign in next time.
            </p>
          </div>

          <div className="pk-contact-info-form__subtle-surface">
            <InputField
              label="Preferred Location"
              required
              leadingIcon={<MapPin aria-hidden="true" />}
              placeholder="Type city, state, area, or zip"
            />
            <Checkbox
              checked
              label="Yes, I want VIP events, exclusive offers, free mini golf for your b-day, and more sent to your inbox! You can use the unsubscribe link at the bottom of emails to stop communication at any time."
            />
            <Checkbox checked label="Yes, I want perks sent to my phone. Standard messaging rate apply." />
            <p className="pk-contact-info-form__consent pk-text-label-medium">
              By joining perks, you agree to{' '}
              <a href="#" className="pk-contact-info-form__consent-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="pk-contact-info-form__consent-link">
                Privacy Policy
              </a>
              .
            </p>
            <Button variant="secondary" inverse className="pk-contact-info-form__create-account">
              Create Account
            </Button>
          </div>
        </>
      )}
    </section>
  )
}
