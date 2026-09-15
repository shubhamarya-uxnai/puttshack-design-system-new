import React from 'react'
import { Share2, Users, CheckCircle2 } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import './ShareBookingLink.css'

/**
 * Composition scaffold for "Share Booking Link/October" (Figma:
 * booking-and-perks snapshot, loc "Web / Cards" — before-signing capture
 * node 6119:71749, after-signing capture node 6119:71767). A registration-
 * completion footer: a fixed "Skip the line at check-in" headline + note
 * (unchanged by state), an optional Ghost/Link "Registration Complete"
 * checkmark that only appears once T&Cs are signed, a Primary button that
 * swaps "Complete registration" → "Share registration link" on the same
 * signal, and a Secondary "Manage party" action.
 */
export interface ShareBookingLinkProps {
  /** Figma: `Sign T&C#1420:0` boolean — drives both the checkmark badge and which
   * Primary action shows. @default false */
  signTandC?: boolean
  onPrimaryAction?: () => void
  onManageParty?: () => void
}

export function ShareBookingLink({ signTandC = false, onPrimaryAction, onManageParty }: ShareBookingLinkProps) {
  return (
    <div className="pk-oct-share-link">
      <h2 className="pk-oct-share-link__headline pk-text-headline-small">Skip the line at check-in</h2>
      <p className="pk-oct-share-link__note pk-text-body-small">
        Share the registration link or manage your party so guests can complete registration before arrival. Any
        incomplete players will need to stop at the kiosk at the venue.
      </p>

      {signTandC && (
        <Button variant="ghost" leadingIcon={<CheckCircle2 aria-hidden="true" />} className="pk-oct-share-link__complete-badge">
          Registration complete
        </Button>
      )}

      <div className="pk-oct-share-link__actions">
        {signTandC ? (
          <Button variant="primary" leadingIcon={<Share2 aria-hidden="true" />} onClick={onPrimaryAction}>
            Share registration link
          </Button>
        ) : (
          <Button variant="primary" leadingIcon={<Users aria-hidden="true" />} onClick={onPrimaryAction}>
            Complete registration
          </Button>
        )}
        <Button variant="secondary" inverse leadingIcon={<Users aria-hidden="true" />} onClick={onManageParty}>
          Manage party
        </Button>
      </div>
    </div>
  )
}
