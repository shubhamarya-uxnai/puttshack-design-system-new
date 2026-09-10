import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { CircleHelp } from '../../../icons'
import './TermsAndConditions.css'

export interface TermsAndConditionsProps {
  /** Figma: `Minor#4585:0` boolean — shows the extra guardian-consent checkbox. @default false */
  minor?: boolean
  agreedToTerms?: boolean
  onAgreedToTermsChange?: (checked: boolean) => void
  guardianConsent?: boolean
  onGuardianConsentChange?: (checked: boolean) => void
  onOpenTerms?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Terms and Conditions"). Composes DS
 * `Button` (warning, "Puttshack terms & conditions" link) and DS `Checkbox`
 * (agree / guardian-consent) per the captured instances. The captured
 * "Modal Headings" instance is a separate October Release component being
 * built by another agent in this batch run — placeholdered here. The
 * "Tooltip icon" instances aren't a DS component or a Booking-and-Perks
 * component in this release list, so a plain DS icon (`CircleHelp`) stands
 * in for it rather than guessing at a dedicated component.
 */
export function TermsAndConditions({
  minor = false,
  agreedToTerms = false,
  onAgreedToTermsChange,
  guardianConsent = false,
  onGuardianConsentChange,
  onOpenTerms,
  className,
}: TermsAndConditionsProps) {
  return (
    <section className={cx('pk-terms-and-conditions', className)}>
      {/* TODO: replace with <ModalHeadings> from booking-and-perks/components once built */}
      <div className="pk-placeholder">Modal Headings</div>

      <Button variant="warning" onlyIcon leadingIcon={<CircleHelp aria-hidden="true" />} onClick={onOpenTerms}>
        Puttshack terms & conditions
      </Button>

      <label className="pk-terms-and-conditions__row">
        <Checkbox checked={agreedToTerms} onCheckedChange={onAgreedToTermsChange} tooltipIcon />
        <span className="pk-text-label-small">I agree to the Puttshack terms &amp; conditions.</span>
      </label>

      {minor && (
        <label className="pk-terms-and-conditions__row">
          <Checkbox checked={guardianConsent} onCheckedChange={onGuardianConsentChange} tooltipIcon />
          <span className="pk-text-label-small">
            I am the parent or legal guardian and consent on behalf of this player.
          </span>
        </label>
      )}
    </section>
  )
}
