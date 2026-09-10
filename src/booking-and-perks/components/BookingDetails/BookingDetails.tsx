import React from 'react'
import { cx } from '../../../lib/cx'
import {
  MapPin,
  Users,
  Calendar,
  Clock4,
  Sparkles,
  Utensils,
  Flag,
  Gift,
  Ticket,
  CreditCard,
} from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { ModalHeadings } from '../ModalHeadings/ModalHeadings'
import './BookingDetails.css'

/**
 * Composition scaffold for "Booking details" (Figma: booking-and-perks
 * snapshot, loc "Web / Cards", node 4538:269365).
 *
 * The captured "Experience Banner" and "Price" instances are both on the
 * full 45-component October Release list but are NOT in this batch — they
 * render as placeholders (`pk-placeholder`) to be swapped in once their
 * own agents finish them. Everything else (icons, the two Tertiary/Inverse
 * "Modify" Buttons, and the `ModalHeadings` scaffold for the Hold-a-Table
 * warning) is real DS/composition wiring.
 */
export type BookingDetailsVariant = 'mini-golf' | 'puttcade' | 'dining-only'

export interface BookingDetailsProps {
  /** Figma variant: `Property 1` (Mini Golf/Puttcade/Dining only). @default 'puttcade' */
  variant?: BookingDetailsVariant
  /** Figma: `Bundle#4538:4` boolean — shows the bundle line (gift icon). @default false */
  bundle?: boolean
  /** Figma: `Gift card#4538:6` boolean. @default false */
  giftCard?: boolean
  /** Figma: `Heading#4590:4` boolean — shows the card's top label. @default false */
  heading?: boolean
  /** Figma: `Hold a Table#4538:3` boolean — shows the "won't be able to play" warning banner. @default false */
  holdATable?: boolean
  /** Figma: `Modify#4538:0` boolean — shows the "Modify Reservation" buttons. @default false */
  modify?: boolean
  /** Figma: `Promo Code#4538:5` boolean — shows the promo/ticket row. @default false */
  promoCode?: boolean
  /** Figma: `Round 2#4538:2` boolean — shows the second time-slot row. @default false */
  round2?: boolean

  location?: string
  groupSize?: string
  groupSizeDetail?: string
  date?: string
  round1Time?: string
  round2Time?: string
  totalPrice?: string
}

const VARIANT_LABEL: Record<BookingDetailsVariant, string> = {
  'mini-golf': 'Interactive Mini Golf',
  puttcade: 'Puttcade',
  'dining-only': 'Dining',
}

export function BookingDetails({
  variant = 'puttcade',
  bundle = false,
  giftCard = false,
  heading = false,
  holdATable = false,
  modify = false,
  promoCode = false,
  round2 = false,
  location = 'Chicago, IL',
  groupSize = '4 guests',
  groupSizeDetail = '4 adults · 2 Junior',
  date = 'Sat, Apr 25',
  round1Time = '5:00 PM',
  round2Time = '8:30 PM',
  totalPrice = '$144',
}: BookingDetailsProps) {
  return (
    <section className="pk-oct-booking-details">
      {heading && <span className="pk-oct-booking-details__label pk-text-title-small-capital">Booking Details</span>}

      {holdATable && (
        <ModalHeadings
          layout="horizontal"
          type="subheading"
          category="Category"
          title="Title"
          subtitle="Party 2 won't be able to play on this booking."
          icon
        />
      )}

      {/* TODO: replace with <ExperienceBanner> from booking-and-perks/components once built —
          "Experience Banner" is one of the 45 October Release components but not in this batch. */}
      <div className="pk-placeholder pk-oct-booking-details__banner">Experience Banner ({VARIANT_LABEL[variant]})</div>

      <dl className="pk-oct-booking-details__rows">
        <DetailRow icon={<MapPin aria-hidden="true" />} label="Location" value={location} />
        <DetailRow icon={<Users aria-hidden="true" />} label="Group size" value={groupSize} secondary={groupSizeDetail} />
        <DetailRow icon={<Calendar aria-hidden="true" />} label="Date" value={date} />
        <div className="pk-oct-booking-details__split-row">
          <DetailRow icon={<Clock4 aria-hidden="true" />} label="Round 1" value={round1Time} compact />
          {round2 && <DetailRow icon={<Clock4 aria-hidden="true" />} label="Round 2" value={round2Time} compact />}
        </div>

        {variant !== 'dining-only' && (
          <DetailRow icon={<Flag aria-hidden="true" />} label="Course" value={VARIANT_LABEL[variant]} />
        )}
        {variant === 'dining-only' && (
          <DetailRow icon={<Utensils aria-hidden="true" />} label="Dining" value="Reservation only" />
        )}

        {bundle && <DetailRow icon={<Gift aria-hidden="true" />} label="Bundle" value="Added" />}
        {promoCode && <DetailRow icon={<Ticket aria-hidden="true" />} label="Promo code" value="Applied" />}
        {giftCard && <DetailRow icon={<CreditCard aria-hidden="true" />} label="Gift card" value="Applied" />}
      </dl>

      {/* TODO: replace with <Price> from booking-and-perks/components once built —
          "Price" is one of the 45 October Release components but not in this batch. */}
      <div className="pk-placeholder pk-oct-booking-details__price">
        Price <Sparkles aria-hidden="true" /> ({totalPrice})
      </div>

      {modify && (
        <div className="pk-oct-booking-details__actions">
          <Button variant="tertiary" inverse onlyIcon trailingIcon={<Sparkles aria-hidden="true" />}>
            Modify Reservation
          </Button>
          <Button variant="tertiary" inverse onlyIcon trailingIcon={<Sparkles aria-hidden="true" />}>
            Modify Reservation
          </Button>
        </div>
      )}
    </section>
  )
}

function DetailRow({
  icon,
  label,
  value,
  secondary,
  compact = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  secondary?: string
  compact?: boolean
}) {
  return (
    <div className={cx('pk-oct-detail-row', compact && 'pk-oct-detail-row--compact')}>
      <span className="pk-oct-detail-row__icon">{icon}</span>
      <div className="pk-oct-detail-row__text">
        <span className="pk-oct-detail-row__label pk-text-label-x-small">{label}</span>
        <div className="pk-oct-detail-row__value-line">
          <span className="pk-oct-detail-row__value pk-text-title-medium">{value}</span>
          {secondary && <span className="pk-oct-detail-row__secondary pk-text-label-medium">{secondary}</span>}
        </div>
      </div>
    </div>
  )
}
