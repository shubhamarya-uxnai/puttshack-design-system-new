import React from 'react'
import { cx } from '../../../lib/cx'
import { ParentGuardianOption1 } from '../ParentGuardianOption1/ParentGuardianOption1'
import './UnderOrOlderUnder18.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Under 18 or older/under 18/October" (Web / Child Components /
 * Age Verification), node 4211:170115.
 *
 * Built separately from `UnderOrOlderOlder` — this capture's only instance
 * is `Parent/gardian/Option 1/October`, i.e. this component is just a thin
 * shell around this batch's `ParentGuardianOption1` scaffold, forwarding
 * its two captured boolean props (`Guardian Details`, `Show Checkbox`)
 * straight through. That's a different shape from the "older" sibling
 * (which owns its own RadioButton/Chip/InputField), so a single shared
 * component with a variant prop would obscure the real composition rather
 * than simplify it.
 */
export interface UnderOrOlderUnder18Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Guardian Details#4211:100`. @default false */
  guardianDetails?: boolean
  /** Figma: `Show Checkbox#4211:95`. @default true */
  showCheckbox?: boolean
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
}

export function UnderOrOlderUnder18({
  guardianDetails = false,
  showCheckbox = true,
  selected = false,
  onSelectedChange,
  className,
  ...rest
}: UnderOrOlderUnder18Props) {
  return (
    <div className={cx('pk-under-or-older-under18', className)} {...rest}>
      <ParentGuardianOption1
        guardianDetails={guardianDetails}
        showCheckbox={showCheckbox}
        selected={selected}
        onSelectedChange={onSelectedChange}
      />
    </div>
  )
}
