import React from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Stepper } from '../../../components/Stepper/Stepper'
import { User, AtSign, Phone, Calendar } from '../../../icons'
import './ContactInformationForm.css'

/** Figma variant property `isSignedIn`. `Property 2` ("October") is a constant release tag, not modeled. */
export type ContactInformationFormSignedIn = boolean

export interface ContactInformationFormProps {
  /** Figma: `Only Junior#4435:7` boolean — hides the adult-only fields (email/phone/DOB) when true. @default false */
  onlyJunior?: boolean
  /** Figma: `isSignedIn` variant — pre-fills name/email from account and hides those fields' inputs behind read-only display. @default false */
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
 * Booking-and-Perks composite (Figma: "Contact Information Form"). Reuses
 * the DS `InputField` for every field and the DS `Stepper` ("Add" variant)
 * for the trailing add-another-registrant control, matching the 5
 * InputField + 1 Add instance list captured from Figma.
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
  return (
    <section className={cx('pk-contact-info-form', className)}>
      <span className="pk-contact-info-form__heading pk-text-title-small-capital">Contact Information</span>

      <InputField
        label="Full Name"
        required
        leadingIcon={<User aria-hidden="true" />}
        defaultValue={fullName}
        readOnly={isSignedIn}
      />
      <InputField
        label="Display Name"
        required
        leadingIcon={<User aria-hidden="true" />}
        helperText="Shows up on the leaderboard during play."
        defaultValue={displayName}
      />

      {!onlyJunior && (
        <>
          <InputField
            label="Email"
            required
            leadingIcon={<AtSign aria-hidden="true" />}
            defaultValue={email}
            readOnly={isSignedIn}
          />
          <InputField
            label="Phone number"
            required
            leadingIcon={<Phone aria-hidden="true" />}
            helperText="Verify your number — we'll text booking updates and your party's check-in code."
            defaultValue={phone}
          />
          <InputField
            label="Date of birth"
            leadingIcon={<Calendar aria-hidden="true" />}
            defaultValue={dateOfBirth}
          />
        </>
      )}

      <Stepper direction="add" aria-label="Add another registrant" onClick={onAddRegistrant} />
    </section>
  )
}
