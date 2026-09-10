import React from 'react'
import { cx } from '../../../lib/cx'
import { Award } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import './PerksCard.css'

/**
 * Composition scaffold for "Perks Card" (Figma: booking-and-perks snapshot,
 * loc "Web / Cards", node 4437:180394).
 *
 * `type='sign-in'` shows a sign-in prompt with a Primary "Sign in" DS
 * `Button`; `type='rewards'` shows either a "Join Perks" Secondary Button
 * (`isSignedIn=false`) or a rewards-available summary (`isSignedIn=true`,
 * `rewardsAvailable`); `type='unlock'` is a third real capture (node
 * 5000:149752, on the "Unlimited Round — Default Package Selection"
 * screen) — a "UNLOCK YOUR PERKS" title + body copy with both the "Sign
 * in" Primary and "Join Perks" Secondary buttons shown together.
 *
 * The Figma "Perks icon" instance isn't one of the 45 October Release
 * components and has no captured detail of its own — `Award` from the
 * Lucide set stands in for it here.
 */
export type PerksCardType = 'sign-in' | 'rewards' | 'unlock'

export interface PerksCardProps {
  /** Figma variant: `Type` (Sign In/Rewards). @default 'sign-in' */
  type?: PerksCardType
  /** Figma variant: `isSignedIn` (False/True). @default false */
  isSignedIn?: boolean
  /** Figma: `Rewards available#4837:0` boolean. @default true */
  rewardsAvailable?: boolean
  onSignIn?: () => void
  onJoinPerks?: () => void
}

export function PerksCard({
  type = 'sign-in',
  isSignedIn = false,
  rewardsAvailable = true,
  onSignIn,
  onJoinPerks,
}: PerksCardProps) {
  return (
    <div className={cx('pk-oct-perks-card')}>
      {/* TODO: no capture data for the Figma "Perks icon" instance — Award is a placeholder glyph */}
      <Award className="pk-oct-perks-card__icon" aria-hidden="true" />

      {type === 'sign-in' && !isSignedIn && (
        <>
          <span className="pk-oct-perks-card__copy pk-text-body-small">
            Sign in to earn and redeem Puttshack Perks on this booking.
          </span>
          <Button variant="primary" onClick={onSignIn}>
            Sign in
          </Button>
        </>
      )}

      {type === 'rewards' && !isSignedIn && (
        <>
          <span className="pk-oct-perks-card__copy pk-text-body-small">
            Join Puttshack Perks to start earning rewards on every visit.
          </span>
          <Button variant="secondary" inverse onClick={onJoinPerks}>
            Join Perks
          </Button>
        </>
      )}

      {type === 'rewards' && isSignedIn && (
        <span className="pk-oct-perks-card__copy pk-text-body-small">
          {rewardsAvailable
            ? 'You have rewards available to redeem on this booking.'
            : "You're a Perks member — no rewards available right now."}
        </span>
      )}

      {type === 'unlock' && !isSignedIn && (
        <>
          <div className="pk-oct-perks-card__text">
            <span className="pk-oct-perks-card__title pk-text-title-small-capital">Unlock your Perks</span>
            <span className="pk-oct-perks-card__copy pk-text-body-small">
              Sign in or join to earn rewards, unlock the good stuff, and breeze through checkout.
            </span>
          </div>
          <div className="pk-oct-perks-card__actions">
            <Button variant="primary" onClick={onSignIn}>
              Sign in
            </Button>
            <Button variant="secondary" inverse onClick={onJoinPerks}>
              Join Perks
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
