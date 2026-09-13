import React from 'react'
import { cx } from '../../../lib/cx'
import './TimeSlotChip.css'

/** Figma variant property `Property 1`: `False` -> 'default', `True` -> 'selected', `Disabled` -> 'disabled'. */
export type TimeSlotChipState = 'default' | 'selected' | 'disabled'

export interface TimeSlotChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma: `time#4437:17` text. @default '3:00 PM' */
  time?: string
  /** Figma: `Property 1`. @default 'default' */
  state?: TimeSlotChipState
  /** Figma: the floating yellow "Best Value" chip shown on the 1:00 PM capture — real text, not a
   * generic "Peak" placeholder. */
  badge?: string
  /** Figma node 4281:91102: the corner "21+" badge shown on evening slots from 8:00 PM on. */
  ageRestricted?: boolean
}

/**
 * Booking-and-Perks composite (Figma: "Time Slot Chip" inside "Time Slot
 * Picker", node 4435:179396). A square-ish (not pill) time button: white
 * card unselected, the same dark-card + 2/4/6px magenta inset ring used
 * elsewhere when selected (thinner than the 3/6/9 ring on bigger cards —
 * this chip is much smaller), and a muted translucent look when disabled.
 */
export function TimeSlotChip({
  time = '3:00 PM',
  state = 'default',
  badge,
  ageRestricted = false,
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
      className={cx('pk-time-slot-chip', `pk-time-slot-chip--${state}`, className)}
      {...rest}
    >
      {badge && <span className="pk-time-slot-chip__badge">{badge}</span>}
      <span className="pk-time-slot-chip__time pk-text-title-small">{time}</span>
      {ageRestricted && <span className="pk-time-slot-chip__age-badge">21+</span>}
    </button>
  )
}
