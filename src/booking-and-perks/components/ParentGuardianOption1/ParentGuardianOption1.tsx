import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { RadioButton } from '../../../components/RadioButton/RadioButton'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { InputField } from '../../../components/InputField/InputField'
import { CircleHelp } from '../../../icons'
import './ParentGuardianOption1.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Parent/gardian/Option 1/October" (Web / Child Components /
 * Age Verification), node 4211:170460.
 *
 * Assembled from DS atoms: 2× `Chip` (variant='promo', the Figma "Yellow"
 * size), `RadioButton` (with tooltip icon), `Checkbox` (with tooltip icon),
 * a standalone tooltip glyph instance (rendered as the `CircleHelp` Lucide
 * icon), and 3× `InputField` (Guardian Full Name, Guardian Phone Number,
 * Date of Birth — all `state='typed'`, `inverse` per capture).
 */
export interface ParentGuardianOption1Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Guardian Details#4211:100`. Shows the 3 guardian input fields. @default false */
  guardianDetails?: boolean
  /** Figma: `Show Checkbox#4211:95`. @default true */
  showCheckbox?: boolean
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
}

export function ParentGuardianOption1({
  guardianDetails = false,
  showCheckbox = true,
  selected = false,
  onSelectedChange,
  className,
  ...rest
}: ParentGuardianOption1Props) {
  return (
    <div className={cx('pk-parent-guardian-option', className)} {...rest}>
      <div className="pk-parent-guardian-option__header">
        <RadioButton
          checked={selected}
          onChange={(e) => onSelectedChange?.(e.target.checked)}
          label="I am the parent or legal guardian"
          tooltipIcon
        />
        <CircleHelp className="pk-parent-guardian-option__help-icon" aria-hidden="true" />
      </div>

      <div className="pk-parent-guardian-option__chips">
        <Chip variant="promo">Requires consent</Chip>
        <Chip variant="promo">Under 18</Chip>
      </div>

      {showCheckbox && <Checkbox label="This player requires guardian consent" tooltipIcon />}

      {guardianDetails && (
        <div className="pk-parent-guardian-option__fields">
          <span className="pk-parent-guardian-option__fields-title pk-text-title-small-capital">
            Guardian Details
          </span>
          <InputField
            label="Guardian Full Name"
            required
            state="typed"
            inverse
            leadingIcon={<CircleHelp aria-hidden="true" />}
            defaultValue="John"
          />
          <InputField
            label="Guardian Phone Number"
            required
            state="typed"
            inverse
            leadingIcon={<CircleHelp aria-hidden="true" />}
            helperText="We’ll text them a secure link to complete registration and accept the terms for this player."
            defaultValue="(555) 123-4567"
          />
          <InputField
            label="Date of Birth"
            required
            state="typed"
            inverse
            defaultValue="Input Text"
          />
        </div>
      )}
    </div>
  )
}
