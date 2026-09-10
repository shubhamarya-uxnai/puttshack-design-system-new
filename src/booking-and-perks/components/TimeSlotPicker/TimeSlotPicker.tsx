import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { TimeSelectionPanel } from '../TimeSelectionPanel/TimeSelectionPanel'
import './TimeSlotPicker.css'

/** Figma variant property `Property 1`. `Property 2` ("October") is a constant release tag, not modeled. */
export type TimeSlotPickerPeriod = 'afternoon' | 'evening'

export interface TimeSlotPickerProps {
  /** Figma: `Property 1`. @default 'afternoon' */
  period?: TimeSlotPickerPeriod
  /** Figma: `2 Rounds - Empty#4435:15` boolean — shows an empty-state message instead of the panel. */
  twoRoundsEmpty?: boolean
  /** Figma: `2 Rounds - Selector#4435:16` boolean — shows a second-round selector alongside the panel. */
  twoRoundsSelector?: boolean
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Time Slot Picker"). NOT the DS
 * `Chip`/pure atom set — this wraps this batch's own `TimeSelectionPanel`
 * (which itself composes `TimeSlotChip`) with a period switch and the
 * "see all times" DS Button, matching the captured instance list.
 */
export function TimeSlotPicker({
  period = 'afternoon',
  twoRoundsEmpty = false,
  twoRoundsSelector = false,
  className,
}: TimeSlotPickerProps) {
  return (
    <section className={cx('pk-time-slot-picker', className)} data-period={period}>
      <div className="pk-time-slot-picker__header">
        <span className="pk-time-slot-picker__period pk-text-title-small-capital">{period}</span>
        <Button variant="tertiary" onlyIcon>
          see all times
        </Button>
      </div>

      {twoRoundsEmpty ? (
        <p className="pk-time-slot-picker__empty pk-text-body-small">No times available for this round yet.</p>
      ) : (
        <TimeSelectionPanel />
      )}

      {twoRoundsSelector && !twoRoundsEmpty && (
        <div className="pk-time-slot-picker__round-2">
          <span className="pk-text-title-small-capital">Round 2</span>
          <TimeSelectionPanel />
        </div>
      )}
    </section>
  )
}
