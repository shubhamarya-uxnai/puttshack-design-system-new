import React from 'react'
import { cx } from '../../../lib/cx'
import { MapPin, Users, Calendar, Clock, Sparkles } from '../../../icons'
import './BookingDetailsCard.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: component set "Booking Details Card" (Web / Child Components /
 * Booking & Order Details), node 4220:76952. Single variant `Property 1=Default`.
 *
 * Uses 5 Lucide icons as row leads: map-pin, users, calendar, clock-4,
 * sparkles. Modeled as a fixed set of detail rows (location, group size,
 * date, time, perks) since the capture doesn't expose per-row booleans —
 * each row is optional so a consumer can omit what doesn't apply.
 */
export interface BookingDetailsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  location?: string
  groupSize?: string
  date?: string
  time?: string
  perks?: string
}

export function BookingDetailsCard({
  location = 'Chicago, IL',
  groupSize = '4 guests',
  date = 'Sat, Apr 25',
  time = '5:00 PM',
  perks = 'VIP Perks included',
  className,
  ...rest
}: BookingDetailsCardProps) {
  return (
    <div className={cx('pk-booking-details-card', className)} {...rest}>
      {location && (
        <div className="pk-booking-details-card__row">
          <MapPin className="pk-booking-details-card__icon" aria-hidden="true" />
          <div className="pk-booking-details-card__text">
            <span className="pk-booking-details-card__label pk-text-label-x-small">Location</span>
            <span className="pk-booking-details-card__value pk-text-title-medium">{location}</span>
          </div>
        </div>
      )}
      {groupSize && (
        <div className="pk-booking-details-card__row">
          <Users className="pk-booking-details-card__icon" aria-hidden="true" />
          <div className="pk-booking-details-card__text">
            <span className="pk-booking-details-card__label pk-text-label-x-small">Group size</span>
            <span className="pk-booking-details-card__value pk-text-title-medium">{groupSize}</span>
          </div>
        </div>
      )}
      {date && (
        <div className="pk-booking-details-card__row">
          <Calendar className="pk-booking-details-card__icon" aria-hidden="true" />
          <div className="pk-booking-details-card__text">
            <span className="pk-booking-details-card__label pk-text-label-x-small">Date</span>
            <span className="pk-booking-details-card__value pk-text-title-medium">{date}</span>
          </div>
        </div>
      )}
      {time && (
        <div className="pk-booking-details-card__row">
          <Clock className="pk-booking-details-card__icon" aria-hidden="true" />
          <div className="pk-booking-details-card__text">
            <span className="pk-booking-details-card__label pk-text-label-x-small">Time</span>
            <span className="pk-booking-details-card__value pk-text-title-medium">{time}</span>
          </div>
        </div>
      )}
      {perks && (
        <div className="pk-booking-details-card__row">
          <Sparkles className="pk-booking-details-card__icon" aria-hidden="true" />
          <span className="pk-booking-details-card__perks pk-text-title-small">{perks}</span>
        </div>
      )}
    </div>
  )
}
