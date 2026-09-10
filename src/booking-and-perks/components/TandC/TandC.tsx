import React from 'react'
import { Calendar } from '../../../icons'
import { ScrollBar } from '../../../components/ScrollBar/ScrollBar'
import './TandC.css'

/**
 * Composition scaffold for "T&C" (Figma: booking-and-perks snapshot,
 * loc "Web / Child Components / Legal & Terms", node 4199:165050).
 *
 * A dark scrollable terms-and-conditions panel: a `calendar` leading icon
 * plus a DS ScrollBar-wrapped body of legal copy on the inverse surface.
 * Figma exposed no text-content props for this component (empty `props`),
 * so the body copy is a placeholder paragraph — swap in the real terms text
 * per flow.
 */
export interface TandCProps {
  /** Legal copy shown in the scrollable body. No Figma text prop was captured for this — defaults to placeholder copy. */
  children?: React.ReactNode
}

export function TandC({ children }: TandCProps) {
  return (
    <div className="pk-oct-tandc">
      <Calendar className="pk-oct-tandc__icon" aria-hidden="true" />
      <ScrollBar className="pk-oct-tandc__scroll" maxHeight={96}>
        <div className="pk-oct-tandc__body pk-text-body-small">
          {children ?? (
            <>
              By continuing, you agree to Puttshack&rsquo;s booking terms, cancellation policy, and house rules for
              this reservation. Please review the full terms and conditions before confirming.
            </>
          )}
        </div>
      </ScrollBar>
    </div>
  )
}
