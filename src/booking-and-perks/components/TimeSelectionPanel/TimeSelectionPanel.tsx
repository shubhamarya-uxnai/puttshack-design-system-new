import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { TimeSlotChip, type TimeSlotChipState } from '../TimeSlotChip/TimeSlotChip'
import './TimeSelectionPanel.css'

export interface TimeSlot {
  time: string
  state?: TimeSlotChipState
  ageLimit?: boolean
  hasValue?: boolean
}

export interface TimeSelectionPanelProps {
  /** Figma: `See all times#1116:1` boolean — shows the "See All Times" tertiary DS Button. @default false */
  seeAllTimes?: boolean
  /**
   * The captured instance list shows repeated `Time Slot Chip` instances at
   * 1:00 PM, 2:00 PM, 2:30 PM, 3:00 PM, 4:00 PM and 5:00 PM (some rows
   * appearing more than once — Figma auto-layout doesn't capture a data
   * source, so a representative default list is used here).
   */
  slots?: TimeSlot[]
  className?: string
}

const DEFAULT_SLOTS: TimeSlot[] = [
  { time: '1:00 PM', state: 'selected' },
  { time: '2:00 PM', state: 'selected' },
  { time: '2:30 PM' },
  { time: '3:00 PM' },
  { time: '4:00 PM' },
  { time: '5:00 PM' },
]

/**
 * Booking-and-Perks composite (Figma: "Time Selection Panel/October").
 * Composes the DS `Button` (tertiary, "See All Times") with this batch's
 * `TimeSlotChip` grid. The captured `Tab Group` instance is a separate
 * October Release component being built by another agent in this batch run
 * — placeholdered here rather than guessed at.
 */
export function TimeSelectionPanel({ seeAllTimes = false, slots = DEFAULT_SLOTS, className }: TimeSelectionPanelProps) {
  return (
    <section className={cx('pk-time-selection-panel', className)}>
      {/* TODO: replace with <TabGroup> from booking-and-perks/components once built */}
      <div className="pk-placeholder">Tab Group</div>

      <div className="pk-time-selection-panel__grid">
        {slots.map((slot, i) => (
          <TimeSlotChip
            key={`${slot.time}-${i}`}
            time={slot.time}
            state={slot.state}
            ageLimit={slot.ageLimit}
            hasValue={slot.hasValue}
          />
        ))}
      </div>

      {seeAllTimes && (
        <Button variant="tertiary" onlyIcon>
          See All Times
        </Button>
      )}
    </section>
  )
}
