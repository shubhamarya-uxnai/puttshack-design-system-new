import React from 'react'
import { cx } from '../../../lib/cx'
import { UtensilsCrossed } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import './RewardRedemptionCard.css'

/**
 * Composition scaffold for "Reward Redemption Card" (Figma:
 * booking-and-perks snapshot, loc "Web / Cards", node 4437:180395).
 *
 * A single redeemable-reward row: `utensils-crossed` icon, heading/
 * subheading text, and a Secondary DS `Button` that flips from "Apply" to
 * an applied state.
 */
export interface RewardRedemptionCardProps {
  /** Figma variant: `Property 1` (Default/Applied). @default 'default' */
  applied?: boolean
  /** Figma: `Heading#4437:20`. @default 'Free Appetizer' */
  heading?: string
  /** Figma: `Subheading#4437:21`. @default 'Complimentary app with your booking' */
  subheading?: string
  onApply?: () => void
}

export function RewardRedemptionCard({
  applied = false,
  heading = 'Free Appetizer',
  subheading = 'Complimentary app with your booking',
  onApply,
}: RewardRedemptionCardProps) {
  return (
    <div className={cx('pk-oct-reward-card', applied && 'pk-oct-reward-card--applied')}>
      <UtensilsCrossed className="pk-oct-reward-card__icon" aria-hidden="true" />
      <div className="pk-oct-reward-card__text">
        <span className="pk-oct-reward-card__heading pk-text-title-small">{heading}</span>
        <span className="pk-oct-reward-card__subheading pk-text-body-small">{subheading}</span>
      </div>
      <Button variant="secondary" onClick={onApply} disabled={applied}>
        {applied ? 'Applied' : 'Apply'}
      </Button>
    </div>
  )
}
