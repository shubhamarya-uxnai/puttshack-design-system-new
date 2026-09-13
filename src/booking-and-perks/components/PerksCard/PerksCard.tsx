import React from 'react'
import { cx } from '../../../lib/cx'
import { Gift, UserCheck, UtensilsCrossed } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { InputField } from '../../../components/InputField/InputField'
import { StatusIcon } from '../../../components/StatusIcon/StatusIcon'
import './PerksCard.css'

/** Figma variant property `Type` (node 4437:180394, "Perks Card"). */
export type PerksCardType = 'sign-in' | 'rewards'

export interface PerksCardReward {
  id: string
  icon?: React.ReactNode
  label: string
  description: string
}

const DEFAULT_REWARDS: PerksCardReward[] = [
  { id: 'appetizer', icon: <UtensilsCrossed aria-hidden="true" size={16} />, label: 'Free Appetizer', description: 'Complimentary app with your booking' },
  { id: 'mini-golf', icon: <UtensilsCrossed aria-hidden="true" size={16} />, label: 'Free Game of Mini Golf', description: 'Complimentary app with your booking' },
]

export interface PerksCardProps {
  /** Figma: `Type` (Sign In/Rewards). @default 'sign-in' */
  type?: PerksCardType
  /** Figma variant: `isSignedIn` (False/True). @default false */
  isSignedIn?: boolean
  /** `type='sign-in'` + `isSignedIn` — the real capture's "SIGNED IN AS ALEX" name. */
  signedInName?: string
  /** `type='sign-in'` + `isSignedIn` — masked/real phone shown under the name. */
  phone?: string
  /** `type='rewards'` + `isSignedIn` — Figma `Rewards available#4837:0` boolean. @default true */
  rewardsAvailable?: boolean
  /** `type='rewards'` + `isSignedIn` + `rewardsAvailable` — the real captured reward list. */
  rewards?: PerksCardReward[]
  onSignIn?: () => void
  onJoinPerks?: () => void
  onLogOut?: () => void
  onApplyReward?: (rewardId: string) => void
  onCreateAccount?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Perks Card", node 4437:180394,
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180394).
 * The real file only has a `Type` (Sign In/Rewards) x `isSignedIn` (False/True) matrix —
 * 4 captures total, all rebuilt here:
 *
 * - `type='sign-in'`, `isSignedIn=false` (node 4089:130001) — the wide "UNLOCK YOUR PERKS"
 *   banner with both "Sign in" and "Join Perks" buttons (this is what earlier code called
 *   a third `'unlock'` type — the real file doesn't have one, this combined banner IS the
 *   Sign In / signed-out state).
 * - `type='sign-in'`, `isSignedIn=true` (node 4089:130544) — "SIGNED IN AS {name}" + phone
 *   + a "Log out" action.
 * - `type='rewards'`, `isSignedIn=true` (node 4089:130658) — "YOUR AVAILABLE REWARDS" +
 *   a list of real reward rows (icon badge, name, description, "Apply" button).
 * - `type='rewards'`, `isSignedIn=false` (node 4123:152185) — the gold-bordered "Join
 *   Perks" card + a location/consent/"Create Account" block underneath.
 *
 * The circular icon badge in the first 3 states is the shared `StatusIcon` atom
 * (`variant='brand'`) with a real per-state Lucide glyph swapped in via its `icon` prop.
 */
export function PerksCard({
  type = 'sign-in',
  isSignedIn = false,
  signedInName = 'Alex',
  phone = '(312) 555-0148',
  rewardsAvailable = true,
  rewards = DEFAULT_REWARDS,
  onSignIn,
  onJoinPerks,
  onLogOut,
  onApplyReward,
  onCreateAccount,
  className,
}: PerksCardProps) {
  if (type === 'sign-in' && !isSignedIn) {
    return (
      <div className={cx('pk-oct-perks-card', 'pk-oct-perks-card--unlock', className)}>
        <StatusIcon variant="brand" icon={<Gift aria-hidden="true" size={24} />} />
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
      </div>
    )
  }

  if (type === 'sign-in' && isSignedIn) {
    return (
      <div className={cx('pk-oct-perks-card', 'pk-oct-perks-card--signed-in', className)}>
        <StatusIcon variant="brand" icon={<UserCheck aria-hidden="true" size={24} />} />
        <div className="pk-oct-perks-card__signed-in-details">
          <span className="pk-oct-perks-card__title pk-text-title-small-capital">Signed in as {signedInName}</span>
          <span className="pk-oct-perks-card__copy pk-text-body-small">{phone}</span>
        </div>
        <button type="button" className="pk-oct-perks-card__log-out pk-text-label-medium" onClick={onLogOut}>
          Log out
        </button>
      </div>
    )
  }

  if (type === 'rewards' && isSignedIn) {
    return (
      <div className={cx('pk-oct-perks-card', 'pk-oct-perks-card--rewards', className)}>
        <div className="pk-oct-perks-card__rewards-heading">
          <Gift aria-hidden="true" size={20} />
          <span className="pk-text-title-small-capital">Your available rewards</span>
        </div>

        {rewardsAvailable ? (
          <>
            <div className="pk-oct-perks-card__reward-list">
              {rewards.map((reward) => (
                <div key={reward.id} className="pk-oct-perks-card__reward">
                  <div className="pk-oct-perks-card__reward-top">
                    <span className="pk-oct-perks-card__reward-icon">{reward.icon}</span>
                    <span className="pk-oct-perks-card__reward-label pk-text-title-small">{reward.label}</span>
                    <Button
                      variant="secondary"
                      className="pk-oct-perks-card__reward-apply"
                      onClick={() => onApplyReward?.(reward.id)}
                    >
                      Apply
                    </Button>
                  </div>
                  <span className="pk-oct-perks-card__reward-description pk-text-body-small">{reward.description}</span>
                </div>
              ))}
            </div>
            <span className="pk-oct-perks-card__reward-footnote pk-text-body-small">
              Apply your reward <strong>at checkout.</strong>
            </span>
          </>
        ) : (
          <span className="pk-oct-perks-card__copy pk-text-body-small">
            You&apos;re a Perks member — no rewards available right now.
          </span>
        )}
      </div>
    )
  }

  // type === 'rewards' && !isSignedIn — the gold-bordered "Join Perks" card.
  return (
    <div className={cx('pk-oct-perks-card__join-wrap', className)}>
      <div className="pk-oct-perks-card pk-oct-perks-card--join">
        <div className="pk-oct-perks-card__join-top">
          <Checkbox checked className="pk-oct-perks-card__join-checkbox" aria-label="Join Perks" />
          <div className="pk-oct-perks-card__join-heading-row">
            <span className="pk-oct-perks-card__title pk-text-title-small-capital">Join Perks</span>
            <span className="pk-oct-perks-card__join-chip pk-text-label-x-small">Free apps &amp; games</span>
          </div>
        </div>
        <p className="pk-oct-perks-card__copy pk-text-body-small">
          Earn free apps, free games, birthday rewards &amp; more. Use your phone number to sign in next time.
        </p>
      </div>
      <div className="pk-oct-perks-card__join-surface">
        <InputField label="Preferred Location" required placeholder="Type city, state, area, or zip" />
        <Checkbox
          checked
          label="Yes, I want VIP events, exclusive offers, free mini golf for your b-day, and more sent to your inbox! You can use the unsubscribe link at the bottom of emails to stop communication at any time."
        />
        <Checkbox checked label="Yes, I want perks sent to my phone. Standard messaging rate apply." />
        <p className="pk-oct-perks-card__join-consent pk-text-label-medium">
          By joining perks, you agree to{' '}
          <a href="#" className="pk-oct-perks-card__join-consent-link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="pk-oct-perks-card__join-consent-link">
            Privacy Policy
          </a>
          .
        </p>
        <Button variant="secondary" inverse className="pk-oct-perks-card__join-create" onClick={onCreateAccount}>
          Create Account
        </Button>
      </div>
    </div>
  )
}
