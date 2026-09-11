import React from 'react'
import { cx } from '../../../lib/cx'
import { MapPin, Users, Calendar, Clock4, Sparkles, Utensils, Gift, Ticket, CreditCard } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { ModalHeadings } from '../ModalHeadings/ModalHeadings'
import experienceBannerImg from '../ExperienceSelector/assets/mini-golf.png'
import './BookingDetails.css'

/**
 * Composition scaffold for "Booking details" (Figma: Checkout — Contact
 * Info & Booking Summary, node 4281:91153, https://www.figma.com/design/
 * X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4281-91137). A real
 * white card: "BOOKING DETAILS" label, a photo banner with a badge (setup
 * tier) + title (experience name), Location/Group Size/Date/Time/Experience
 * rows, and a Total price row — replacing the two placeholders this had
 * before (the "Experience Banner" and "Price" October Release components
 * weren't scannable yet at the time). Reuses `ExperienceSelector`'s already-
 * fetched real mini-golf photo for the banner rather than pulling a new
 * temporary Figma asset URL.
 */
export type BookingDetailsVariant = 'mini-golf' | 'puttcade' | 'dining-only'

export interface BookingDetailsProps {
  /** Figma variant: `Property 1` (Mini Golf/Puttcade/Dining only). @default 'mini-golf' */
  variant?: BookingDetailsVariant
  /** Figma: `Bundle#4538:4` boolean — shows the bundle line (gift icon). @default false */
  bundle?: boolean
  /** Figma: `Gift card#4538:6` boolean. @default false */
  giftCard?: boolean
  /** Figma: `Heading#4590:4` boolean — shows the card's top label. @default true */
  heading?: boolean
  /** Figma: `Hold a Table#4538:3` boolean — shows the "won't be able to play" warning banner. @default false */
  holdATable?: boolean
  /** Figma: `Modify#4538:0` boolean — shows the "Modify Reservation" buttons. @default false */
  modify?: boolean
  /** Figma: `Promo Code#4538:5` boolean — shows the promo/ticket row. @default false */
  promoCode?: boolean
  /** Figma: `Round 2#4538:2` boolean — shows the second time-slot row. @default false */
  round2?: boolean

  /** Badge on the banner photo, e.g. "UNLIMITED" or "1 BAYS". */
  setup?: string
  location?: string
  groupSize?: string
  groupSizeDetail?: string
  date?: string
  time?: string
  round2Time?: string
  totalPrice?: string
}

const VARIANT_LABEL: Record<BookingDetailsVariant, string> = {
  'mini-golf': 'Interactive Mini Golf',
  puttcade: 'Puttcade',
  'dining-only': 'Dining Only',
}

export function BookingDetails({
  variant = 'mini-golf',
  bundle = false,
  giftCard = false,
  heading = true,
  holdATable = false,
  modify = false,
  promoCode = false,
  round2 = false,
  setup = 'Unlimited',
  location = 'Chicago, IL',
  groupSize = '4 guests',
  groupSizeDetail = '4 adults · 2 Junior',
  date = 'Sat, Apr 25',
  time = '5:00 PM',
  round2Time = '8:30 PM',
  totalPrice = '$93.00',
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

      <div className="pk-oct-booking-details__banner">
        <img src={experienceBannerImg} alt="" className="pk-oct-booking-details__banner-img" />
        <div className="pk-oct-booking-details__banner-gradient" aria-hidden="true" />
        <div className="pk-oct-booking-details__banner-content">
          <span className="pk-oct-booking-details__banner-badge pk-text-label-medium">{setup}</span>
          <span className="pk-oct-booking-details__banner-title pk-text-title-large">{VARIANT_LABEL[variant]}</span>
        </div>
      </div>

      <dl className="pk-oct-booking-details__rows">
        <DetailRow icon={<MapPin aria-hidden="true" />} label="Location" value={location} />
        <DetailRow icon={<Users aria-hidden="true" />} label="Group size" value={groupSize} secondary={groupSizeDetail} />
        <DetailRow icon={<Calendar aria-hidden="true" />} label="Date" value={date} />
        <div className="pk-oct-booking-details__split-row">
          <DetailRow icon={<Clock4 aria-hidden="true" />} label="Time" value={time} compact />
          {round2 && <DetailRow icon={<Clock4 aria-hidden="true" />} label="Round 2" value={round2Time} compact />}
        </div>
        <DetailRow
          icon={<Sparkles aria-hidden="true" />}
          label="Experience"
          value={variant === 'dining-only' ? VARIANT_LABEL[variant] : `${VARIANT_LABEL[variant]} · ${setup}`}
        />

        {variant === 'dining-only' && (
          <DetailRow icon={<Utensils aria-hidden="true" />} label="Dining" value="Reservation only" />
        )}
        {bundle && <DetailRow icon={<Gift aria-hidden="true" />} label="Bundle" value="Added" />}
        {promoCode && <DetailRow icon={<Ticket aria-hidden="true" />} label="Promo code" value="Applied" />}
        {giftCard && <DetailRow icon={<CreditCard aria-hidden="true" />} label="Gift card" value="Applied" />}
      </dl>

      <div className="pk-oct-booking-details__price">
        <span className="pk-oct-booking-details__price-label pk-text-label-medium">Total</span>
        <span className="pk-oct-booking-details__price-value pk-text-title-large">{totalPrice}</span>
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
          {secondary && <span className="pk-oct-detail-row__secondary pk-text-label-small">{secondary}</span>}
        </div>
      </div>
    </div>
  )
}
