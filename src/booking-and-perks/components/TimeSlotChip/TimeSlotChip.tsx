import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { Badge } from '../../../components/Badge/Badge'
import './TimeSlotChip.css'

/** Figma variant property `Property 1`: `False` -> 'default', `True` -> 'selected', `Disabled` -> 'disabled'. */
export type TimeSlotChipState = 'default' | 'selected' | 'disabled'

/** Figma variant property `Property 2`. `Property 3` ("October") is a constant release tag, not modeled. */
export type TimeSlotChipSize = 'mobile' | 'desktop' | 'kiosk'

export interface TimeSlotChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma: `time#4437:17` text. @default '3:00 PM' */
  time?: string
  /** Figma: `Property 1`. @default 'default' */
  state?: TimeSlotChipState
  /** Figma: `Property 2`. @default 'mobile' */
  size?: TimeSlotChipSize
  /**
   * Figma: `Age Limit#4437:19` boolean. Shows a small "Age Limit" DS Badge
   * under the time — this booking-and-perks piece uses it to flag time
   * slots that carry an age restriction (e.g. adults-only rounds).
   */
  ageLimit?: boolean
  /**
   * Figma: `Value#4437:18` boolean. The captured instances pair this with a
   * DS Chip (`variant="promo"`, Figma "Size=Yellow") but the snapshot has no
   * bound text for it — meaning wasn't fully recoverable from the data, so
   * this renders a generic "Peak" promo chip. Flagging rather than guessing
   * further: swap the label once the real copy is confirmed.
   */
  hasValue?: boolean
}

/**
 * Booking-and-Perks composite — NOT the DS `Chip` (see that component for
 * the plain label chip). This is a tappable time-slot control built out of
 * DS `Chip` (promo marker) and DS `Badge` (age-limit marker) atoms.
 */
export function TimeSlotChip({
  time = '3:00 PM',
  state = 'default',
  size = 'mobile',
  ageLimit = false,
  hasValue = false,
  className,
  ...rest
}: TimeSlotChipProps) {
  const disabled = state === 'disabled'
  const selected = state === 'selected'

  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={selected}
      data-screen={size}
      className={cx('pk-time-slot-chip', `pk-time-slot-chip--${state}`, className)}
      {...rest}
    >
      {hasValue && (
        <Chip variant="promo" className="pk-time-slot-chip__promo">
          Peak
        </Chip>
      )}
      <span className="pk-time-slot-chip__time pk-text-title-small">{time}</span>
      {ageLimit && (
        <Badge type="small" status="linked" className="pk-time-slot-chip__age-badge">
          Age Limit
        </Badge>
      )}
    </button>
  )
}
