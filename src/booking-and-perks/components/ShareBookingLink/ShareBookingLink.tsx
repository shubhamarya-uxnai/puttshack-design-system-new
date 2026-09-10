import React from 'react'
import { Share2, Users } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import './ShareBookingLink.css'

/**
 * Composition scaffold for "Share Booking Link/October" (Figma:
 * booking-and-perks snapshot, loc "Web / Cards", node 4145:161173).
 *
 * A registration-completion footer: a headline, then a stack of DS
 * `Button`s that change per the two booleans — the captured instances cover
 * a Ghost/Link "Registration Complete" state, a Primary "Complete
 * registration" / "Share registration link" pair, and a Secondary
 * "Manage party" action.
 */
export interface ShareBookingLinkProps {
  /** Figma: `Share Registration link#1420:1` boolean. @default false */
  shareRegistrationLink?: boolean
  /** Figma: `Sign T&C#1420:0` boolean. @default true */
  signTandC?: boolean
  onPrimaryAction?: () => void
  onManageParty?: () => void
}

export function ShareBookingLink({
  shareRegistrationLink = false,
  signTandC = true,
  onPrimaryAction,
  onManageParty,
}: ShareBookingLinkProps) {
  return (
    <div className="pk-oct-share-link">
      <h2 className="pk-oct-share-link__headline pk-text-headline-small">
        {signTandC ? 'Registration complete' : 'Almost done'}
      </h2>
      <p className="pk-oct-share-link__note pk-text-body-small">
        {signTandC
          ? "You're all set — share this booking's link so the rest of your party can register."
          : 'Sign the terms and conditions to complete your registration.'}
      </p>

      <div className="pk-oct-share-link__actions">
        {shareRegistrationLink ? (
          <Button variant="primary" leadingIcon={<Share2 aria-hidden="true" />} onClick={onPrimaryAction}>
            Share registration link
          </Button>
        ) : (
          <Button variant="primary" leadingIcon={<Users aria-hidden="true" />} onClick={onPrimaryAction}>
            Complete registration
          </Button>
        )}
        <Button variant="secondary" leadingIcon={<Users aria-hidden="true" />} onClick={onManageParty}>
          Manage party
        </Button>
        <Button variant="ghost" trailingIcon={<Share2 aria-hidden="true" />}>
          Registration complete
        </Button>
      </div>
    </div>
  )
}
