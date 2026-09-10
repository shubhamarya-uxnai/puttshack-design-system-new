import React from 'react'
import { cx } from '../../../lib/cx'
import { RadioButton } from '../../../components/RadioButton/RadioButton'
import { Chip } from '../../../components/Chip/Chip'
import { InputField } from '../../../components/InputField/InputField'
import './UnderOrOlderOlder.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Under 18 or older/older/October" (Web / Child Components /
 * Age Verification), node 4211:170163.
 *
 * Built separately from `UnderOrOlderUnder18` — the two captures are
 * meaningfully different compositions (this one carries its own
 * RadioButton + Chip + InputField instances; the "under 18" sibling wraps
 * a single `Parent/gardian/Option 1/October` instance instead), so a
 * shared component with a variant prop would hide that difference rather
 * than express it.
 *
 * DS usage:
 * - `RadioButton` (Figma: `Radio button / Size=Default`, tooltip icon on)
 *   — the "18 or older" selection control.
 * - `Chip` (Figma: `Chip / Size=Yellow` -> DS `variant='promo'`) — status
 *   marker shown once selected.
 * - `InputField` (Figma: `Input Field / State=Default, Mode=Mobile,
 *   Inverse=No`, label "Mobile number (Optional)") — optional contact
 *   capture for the player, shown only once this option is selected.
 */
export interface UnderOrOlderOlderProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  phoneNumber?: string
  onPhoneNumberChange?: (value: string) => void
}

export function UnderOrOlderOlder({
  selected = false,
  onSelectedChange,
  phoneNumber = '',
  onPhoneNumberChange,
  className,
  ...rest
}: UnderOrOlderOlderProps) {
  return (
    <div className={cx('pk-under-or-older-older', className)} {...rest}>
      <div className="pk-under-or-older-older__header">
        <RadioButton
          checked={selected}
          onChange={(e) => onSelectedChange?.(e.target.checked)}
          label="18 or older"
          tooltipIcon
        />
        {selected && <Chip variant="promo">No consent required</Chip>}
      </div>

      {selected && (
        <InputField
          label="Mobile number (Optional)"
          helperText="We’ll text them booking updates and digital scorecards."
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange?.(e.target.value)}
        />
      )}
    </div>
  )
}
