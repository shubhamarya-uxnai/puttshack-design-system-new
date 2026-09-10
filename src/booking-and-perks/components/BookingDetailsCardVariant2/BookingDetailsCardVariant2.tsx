import React from 'react'
import { cx } from '../../../lib/cx'
import { MapPin, Users, Calendar, Clock, Sparkles } from '../../../icons'
import './BookingDetailsCardVariant2.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Booking Details Card/Variant2" (Web / Child Components /
 * Booking & Order Details), node 4220:76953.
 *
 * Same 5 Lucide icon rows as `BookingDetailsCard` (map-pin, users, calendar,
 * clock-4, sparkles) but on an inverse/dark surface (Surface/Inverse,
 * Border/Inverse, Text + Icon/Inverse tokens) — kept as a separate component
 * rather than an `inverse` prop on `BookingDetailsCard` since the two are
 * distinct captured Figma nodes with their own ids.
 */
export interface BookingDetailsCardVariant2Props extends React.HTMLAttributes<HTMLDivElement> {
  location?: string
  groupSize?: string
  date?: string
  time?: string
  perks?: string
}

export function BookingDetailsCardVariant2({
  location = 'Chicago, IL',
  groupSize = '4 guests',
  date = 'Sat, Apr 25',
  time = '5:00 PM',
  perks = 'VIP Perks included',
  className,
  ...rest
}: BookingDetailsCardVariant2Props) {
  return (
    <div className={cx('pk-booking-details-card-v2', className)} {...rest}>
      {location && (
        <div className="pk-booking-details-card-v2__row">
          <MapPin className="pk-booking-details-card-v2__icon" aria-hidden="true" />
          <div className="pk-booking-details-card-v2__text">
            <span className="pk-booking-details-card-v2__label pk-text-label-x-small">Location</span>
            <span className="pk-booking-details-card-v2__value pk-text-title-medium">{location}</span>
          </div>
        </div>
      )}
      {groupSize && (
        <div className="pk-booking-details-card-v2__row">
          <Users className="pk-booking-details-card-v2__icon" aria-hidden="true" />
          <div className="pk-booking-details-card-v2__text">
            <span className="pk-booking-details-card-v2__label pk-text-label-x-small">Group size</span>
            <span className="pk-booking-details-card-v2__value pk-text-title-medium">{groupSize}</span>
          </div>
        </div>
      )}
      {date && (
        <div className="pk-booking-details-card-v2__row">
          <Calendar className="pk-booking-details-card-v2__icon" aria-hidden="true" />
          <div className="pk-booking-details-card-v2__text">
            <span className="pk-booking-details-card-v2__label pk-text-label-x-small">Date</span>
            <span className="pk-booking-details-card-v2__value pk-text-title-medium">{date}</span>
          </div>
        </div>
      )}
      {time && (
        <div className="pk-booking-details-card-v2__row">
          <Clock className="pk-booking-details-card-v2__icon" aria-hidden="true" />
          <div className="pk-booking-details-card-v2__text">
            <span className="pk-booking-details-card-v2__label pk-text-label-x-small">Time</span>
            <span className="pk-booking-details-card-v2__value pk-text-title-medium">{time}</span>
          </div>
        </div>
      )}
      {perks && (
        <div className="pk-booking-details-card-v2__row">
          <Sparkles className="pk-booking-details-card-v2__icon" aria-hidden="true" />
          <span className="pk-booking-details-card-v2__perks pk-text-title-small">{perks}</span>
        </div>
      )}
    </div>
  )
}
