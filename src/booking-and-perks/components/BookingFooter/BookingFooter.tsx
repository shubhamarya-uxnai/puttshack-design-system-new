import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import './BookingFooter.css'

/**
 * Composition scaffold for "Booking Footer" (Figma: booking-and-perks
 * snapshot, loc "Web / Navigation & Layout", node 4437:180396).
 *
 * Figma variant property `Property 1` -> `variant`: Default / Checkout /
 * "You are in". `Property 2` is a constant "October" release tag, not
 * modeled.
 *
 * DS usage: up to 4× "Footer Chips" (Figma node 5672:151357 — a later
 * capture that replaced the original filled `Badge` pill for this
 * component: plain bold text + a small dot separator, no background, no
 * icon by default. Two real variants — `Venue` (magenta text/dot, for
 * Location) and `Exeprience` [sic, per Figma] (uppercase black/64% text,
 * for Time/Age Group/Bundle)) for Location, Time, Age Group, and Bundle,
 * and 1× `Button` (Figma: `Size=Default, Type=Primary, Label="CHECKOUT"`)
 * for the checkout CTA, shown only on the `checkout` variant.
 *
 * A second real capture of this component (node 5000:149758, on the
 * "Unlimited Round — Default Package Selection" screen) shows a different
 * real state before a time/party are chosen: only the Location chip, a
 * headline-size running total in place of the Time/Age Group/Bundle
 * chips, and the Checkout button disabled — modeled here via the
 * optional `price` and `checkoutDisabled` props rather than a new variant,
 * since the chip layout and CTA are otherwise identical.
 */
function FooterChip({
  variant,
  separator = true,
  children,
}: {
  variant: 'venue' | 'experience'
  separator?: boolean
  children: React.ReactNode
}) {
  return (
    <span className={cx('pk-booking-footer__chip', `pk-booking-footer__chip--${variant}`)}>
      <span
        className={cx(
          'pk-booking-footer__chip-label',
          variant === 'venue' ? 'pk-text-title-small' : 'pk-text-label-medium'
        )}
      >
        {children}
      </span>
      {separator && <span className="pk-booking-footer__chip-dot" aria-hidden="true" />}
    </span>
  )
}

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
        <FooterChip variant="venue">{location}</FooterChip>
        {price ? (
          <span className="pk-booking-footer__price pk-text-headline-medium">{price}</span>
        ) : (
          <>
            <FooterChip variant="experience">{time}</FooterChip>
            <FooterChip variant="experience" separator={!!bundle}>
              {ageGroup}
            </FooterChip>
            {bundle && <FooterChip variant="experience" separator={false}>{bundle}</FooterChip>}
          </>
        )}
      </div>

      {variant === 'checkout' && (
        <Button
          variant="primary"
          disabled={checkoutDisabled}
          onClick={onCheckout}
          className="pk-booking-footer__cta"
        >
          CHECKOUT
        </Button>
      )}

      {variant === 'you-are-in' && (
        <span className="pk-booking-footer__status pk-text-title-small">You're in!</span>
      )}
    </div>
  )
}
