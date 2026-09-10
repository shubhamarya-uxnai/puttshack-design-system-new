import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { InputField } from '../../../components/InputField/InputField'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { Wrapper } from '../Wrapper/Wrapper'
import { ChevronRight } from '../../../icons'
import './GuardianFlow.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Guardian Flow" (Web / Child Components / Age Verification),
 * node 4605:116181.
 *
 * DS usage:
 * - `Wrapper` (this batch's sibling scaffold, Figma instance "Question 1",
 *   used 3x per the capture's `count: 3`) — one per age-verification
 *   question in the flow.
 * - `InputField` (Figma: `Input Field / State=Default, Mode=Mobile,
 *   Inverse=No`, label "Mobile number (Optional)") — guardian phone capture.
 * - `Checkbox` (Figma: `Checkbox / Size=Default`, tooltip icon on) — consent
 *   acknowledgement.
 * - `Button` (Figma: `Button / Size=Default, Type=Primary, Only Icon=True`,
 *   label "Register", trailing icon shown) — final submit action.
 *
 * The capture doesn't distinguish the 3 `Wrapper` questions' individual
 * copy, so they're exposed as a `questions` prop (array of labels) rather
 * than hardcoded, defaulting to the flow's likely age-verification
 * sequence.
 */
export interface GuardianFlowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Labels for the 3 stacked `Wrapper` question rows. */
  questions?: string[]
  /** Guardian mobile number field value. */
  phoneNumber?: string
  onPhoneNumberChange?: (value: string) => void
  /** Consent checkbox state. */
  consentChecked?: boolean
  onConsentChange?: (checked: boolean) => void
  onRegister?: () => void
}

const DEFAULT_QUESTIONS = [
  'Is the player under 18?',
  'Are you the parent or legal guardian?',
  'Will the guardian complete registration now?',
]

export function GuardianFlow({
  questions = DEFAULT_QUESTIONS,
  phoneNumber = '',
  onPhoneNumberChange,
  consentChecked = false,
  onConsentChange,
  onRegister,
  className,
  ...rest
}: GuardianFlowProps) {
  return (
    <div className={cx('pk-guardian-flow', className)} {...rest}>
      {questions.map((question, i) => (
        <Wrapper key={i} label={question} />
      ))}

      <InputField
        label="Mobile number (Optional)"
        helperText="We’ll text them booking updates and digital scorecards."
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange?.(e.target.value)}
      />

      <Checkbox
        label="I confirm I am the parent or legal guardian of this player"
        tooltipIcon
        checked={consentChecked}
        onCheckedChange={onConsentChange}
      />

      <Button
        variant="primary"
        onlyIcon
        trailingIcon={<ChevronRight aria-hidden="true" />}
        onClick={onRegister}
        className="pk-guardian-flow__submit"
      >
        Register
      </Button>
    </div>
  )
}
