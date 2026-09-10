import React from 'react'
import { cx } from '../../../lib/cx'
import { Badge } from '../../../components/Badge/Badge'
import { Button } from '../../../components/Button/Button'
import { MapPin, Clock, Users, Gift } from '../../../icons'
import './BookingFooter.css'

/**
 * Composition scaffold for "Booking Footer" (Figma: booking-and-perks
 * snapshot, loc "Web / Navigation & Layout", node 4437:180396).
 *
 * Figma variant property `Property 1` -> `variant`: Default / Checkout /
 * "You are in". `Property 2` is a constant "October" release tag, not
 * modeled.
 *
 * DS usage: up to 4× `Badge` (Figma: `Type=Icon + Text, Status=Linked-2` ->
 * closest DS `BadgeStatus` is `'linked-secondary'`) for Location, Time,
 * Age Group, and Bundle — Location and Age Group carry the captured
 * `Separator` prop (rendered here as a trailing divider), and 1× `Button`
 * (Figma: `Size=Default, Type=Primary, Label="CHECKOUT"`) for the
 * checkout CTA, shown only on the `checkout` variant.
 *
 * A second real capture of this component (node 5000:149758, on the
 * "Unlimited Round — Default Package Selection" screen) shows a different
 * real state before a time/party are chosen: only the Location badge, a
 * headline-size running total in place of the Time/Age Group/Bundle
 * badges, and the Checkout button disabled — modeled here via the
 * optional `price` and `checkoutDisabled` props rather than a new variant,
 * since the badge layout and CTA are otherwise identical.
 */
export type BookingFooterVariant = 'default' | 'checkout' | 'you-are-in'

export interface BookingFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Property 1` variant. @default 'default' */
  variant?: BookingFooterVariant
  location?: string
  time?: string
  ageGroup?: string
  /** Figma: `Bundle` badge — optional, only some bookings carry a bundle. */
  bundle?: string
  /** Figma (node 5000:149758): running total, e.g. `"$0.00"`. Replaces the Time/Age Group/Bundle badges when set. */
  price?: string
  /** Figma (node 5000:149758): `Button` `State=Disabled` — true before a party size has been chosen. */
  checkoutDisabled?: boolean
  onCheckout?: () => void
}

export function BookingFooter({
  variant = 'default',
  location = 'Chicago, IL',
  time = '5:00 PM',
  ageGroup = '4 Adults',
  bundle,
  price,
  checkoutDisabled = false,
  onCheckout,
  className,
  ...rest
}: BookingFooterProps) {
  return (
    <div className={cx('pk-booking-footer', `pk-booking-footer--${variant}`, className)} {...rest}>
      <div className="pk-booking-footer__badges">
        <Badge type="icon-text" status="linked-secondary" icon={<MapPin aria-hidden="true" />}>
          {location}
        </Badge>
        {price ? (
          <span className="pk-booking-footer__price pk-text-headline-medium">{price}</span>
        ) : (
          <>
            <span className="pk-booking-footer__separator" aria-hidden="true" />
            <Badge type="icon-text" status="linked-secondary" icon={<Clock aria-hidden="true" />}>
              {time}
            </Badge>
            <Badge type="icon-text" status="linked-secondary" icon={<Users aria-hidden="true" />}>
              {ageGroup}
            </Badge>
            <span className="pk-booking-footer__separator" aria-hidden="true" />
            {bundle && (
              <Badge type="icon-text" status="linked-secondary" icon={<Gift aria-hidden="true" />}>
                {bundle}
              </Badge>
            )}
          </>
        )}
      </div>

      {variant === 'checkout' && (
        <Button variant="primary" disabled={checkoutDisabled} onClick={onCheckout}>
          CHECKOUT
        </Button>
      )}

      {variant === 'you-are-in' && (
        <span className="pk-booking-footer__status pk-text-title-small">You're in!</span>
      )}
    </div>
  )
}
