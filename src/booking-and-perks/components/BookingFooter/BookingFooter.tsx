import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import './BookingFooter.css'

/**
 * Composition scaffold for "Booking Footer" (Figma: booking-and-perks,
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180396
 * — `Property 1=Default` capture). Real structure is two rows of "Footer
 * Chips" (node 5672:151357: plain bold text + a small dot separator, no
 * background/icon), not the single Location-only row this previously had:
 * a magenta "booking details" row (Location · Date · Time) and a black/64%
 * "experience details" row (Guests · Experience · Setup · Duration ·
 * Bundle — whichever are actually chosen so far), a divider, then a large
 * price and the CHECKOUT `Button` — replacing the earlier layout where the
 * price sat inline with the location chip and there was only one chip row.
 */
function FooterChip({
  variant,
  separator = true,
  children,
}: {
  variant: 'booking' | 'experience'
  separator?: boolean
  children: React.ReactNode
}) {
  return (
    <span className={cx('pk-booking-footer__chip', `pk-booking-footer__chip--${variant}`)}>
      <span
        className={cx(
          'pk-booking-footer__chip-label',
          variant === 'booking' ? 'pk-text-title-small' : 'pk-text-label-medium'
        )}
      >
        {children}
      </span>
      {separator && <span className="pk-booking-footer__chip-dot" aria-hidden="true" />}
    </span>
  )
}

export interface BookingFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Location`. @default 'Chicago, IL' */
  location?: string
  /** Figma: `Date`, e.g. "APR 21". */
  date?: string
  /** Figma: `Time`, e.g. "5:00 PM". */
  time?: string
  /** Figma: `Age Group`, e.g. "3 Adults + 1 Young Adult + 1 Junior". */
  guests?: string
  /** Figma: `Experience`, e.g. "Puttcade" / "Interactive Mini Golf" / "Dining Only". */
  experience?: string
  /** Figma: `Bay`, e.g. "1 Bays" — Puttcade only. */
  setup?: string
  /** Figma: `Round and Duration`, e.g. "120 Minutes" or a round tier name. */
  duration?: string
  /** Figma: `Bundle`, e.g. "Putt+Pour" — optional, only some bookings carry a bundle. */
  bundle?: string
  /** Running total, e.g. "$144.00". */
  price?: string
  /** `Button` `State=Disabled` — true before enough of a booking is chosen to check out. */
  checkoutDisabled?: boolean
  onCheckout?: () => void
}

export function BookingFooter({
  location = 'Chicago, IL',
  date,
  time,
  guests,
  experience,
  setup,
  duration,
  bundle,
  price,
  checkoutDisabled = false,
  onCheckout,
  className,
  ...rest
}: BookingFooterProps) {
  const bookingChips = [location, date, time].filter((v): v is string => Boolean(v))
  const experienceChips = [guests, experience, setup, duration, bundle].filter((v): v is string => Boolean(v))

  return (
    <div className={cx('pk-booking-footer', className)} {...rest}>
      <div className="pk-booking-footer__details">
        <div className="pk-booking-footer__row">
          {bookingChips.map((chip, i) => (
            <FooterChip key={chip} variant="booking" separator={i < bookingChips.length - 1}>
              {chip}
            </FooterChip>
          ))}
        </div>
        {experienceChips.length > 0 && (
          <div className="pk-booking-footer__row">
            {experienceChips.map((chip, i) => (
              <FooterChip key={chip} variant="experience" separator={i < experienceChips.length - 1}>
                {chip}
              </FooterChip>
            ))}
          </div>
        )}
      </div>

      <div className="pk-booking-footer__divider" />

      <div className="pk-booking-footer__price-row">
        <span className="pk-booking-footer__price pk-text-headline-medium">{price ?? '$0.00'}</span>
        <Button variant="primary" disabled={checkoutDisabled} onClick={onCheckout} className="pk-booking-footer__cta">
          Checkout
        </Button>
      </div>
    </div>
  )
}
