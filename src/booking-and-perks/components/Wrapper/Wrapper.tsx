import React from 'react'
import { cx } from '../../../lib/cx'
import './Wrapper.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Wrapper" (Web / Child Components / Age Verification), node 4605:116234.
 *
 * Purpose, per the capture: a generic single-question layout container that
 * holds a pair of `Selection Cards` instances (e.g. "Yes, under 18" /
 * "No, 18 or older") — used 3× inside `Guardian Flow` as "Question 1" for
 * different yes/no questions, so it's a reusable question shell rather than
 * something specific to age verification.
 *
 * `Selection Cards` is a separate October Release component being built by
 * another agent — not available in this batch, so its two instances are
 * placeholdered. This component only owns the layout (label + stacked
 * option slots via `children`).
 */
export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional question/section label shown above the options. */
  label?: string
  /** The option nodes (typically two `Selection Cards`). */
  children?: React.ReactNode
}

export function Wrapper({ label, children, className, ...rest }: WrapperProps) {
  return (
    <div className={cx('pk-wrapper', className)} {...rest}>
      {label && <span className="pk-wrapper__label pk-text-title-small-capital">{label}</span>}
      <div className="pk-wrapper__options">
        {children ?? (
          <>
            {/* TODO: replace with <SelectionCards> from booking-and-perks/components once built */}
            <div className="pk-placeholder">Selection Cards (selected)</div>
            {/* TODO: replace with <SelectionCards> from booking-and-perks/components once built */}
            <div className="pk-placeholder">Selection Cards</div>
          </>
        )}
      </div>
    </div>
  )
}
