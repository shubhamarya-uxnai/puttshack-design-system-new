import React from 'react'
import { cx } from '../../../lib/cx'
import { TabGroup } from '../TabGroup/TabGroup'
import { TimeSlotChip, type TimeSlotChipState } from '../TimeSlotChip/TimeSlotChip'
import './TimeSelectionPanel.css'

export type TimeSelectionPeriod = 'morning' | 'afternoon' | 'evening'

const PERIODS: TimeSelectionPeriod[] = ['morning', 'afternoon', 'evening']

export interface TimeSlot {
  time: string
  /** `'disabled'` for sold-out slots — omit `state` on any selectable slot and drive selection via
   * `selectedTime`/`onSelectTime` instead of baking `'selected'` into the data. */
  state?: Exclude<TimeSlotChipState, 'selected'>
  badge?: string
}

export interface TimeSelectionPanelProps {
  /** Figma: `Property 1` on the parent Time Slot Picker (Morning/Afternoon/Evening). @default 'afternoon' */
  period?: TimeSelectionPeriod
  onPeriodChange?: (period: TimeSelectionPeriod) => void
  /** Real captured Afternoon list by default: 1:00 PM ("Best Value"), 2:00 PM, 2:30/3:00/4:00 PM
   * (all open), 5:00 PM (disabled — sold out). */
  slots?: TimeSlot[]
  /** The currently-picked time, e.g. `'2:00 PM'` — matches a `slots[].time`. */
  selectedTime?: string
  onSelectTime?: (time: string) => void
  className?: string
}

const DEFAULT_SLOTS: TimeSlot[] = [
  { time: '1:00 PM', badge: 'Best Value' },
  { time: '2:00 PM' },
  { time: '2:30 PM' },
  { time: '3:00 PM' },
  { time: '4:00 PM' },
  { time: '5:00 PM', state: 'disabled' },
]

/**
 * Booking-and-Perks composite (Figma: "Time Selection Panel/October",
 * inside "Time Slot Picker" node 4435:179396). "SELECT YOUR TIME" heading
 * + a real `TabGroup` (Morning/Afternoon/Evening) + a "TOP PICKS FOR
 * {period}" label + a grid of real `TimeSlotChip`s. Sits directly on its
 * parent's dark card background — has none of its own (the earlier
 * placeholder guessed a white card wrapper before this was scannable).
 */
export function TimeSelectionPanel({
  period = 'afternoon',
  onPeriodChange,
  slots = DEFAULT_SLOTS,
  selectedTime,
  onSelectTime,
  className,
}: TimeSelectionPanelProps) {
  return (
    <section className={cx('pk-time-selection-panel', className)}>
      <h3 className="pk-time-selection-panel__heading pk-text-title-medium">Select your time</h3>

      <TabGroup
        items={PERIODS.map((p) => ({ label: p, state: p === period ? 'selected' : 'default' }))}
        onSelectTab={(i) => onPeriodChange?.(PERIODS[i])}
      />

      <div className="pk-time-selection-panel__picks">
        <span className="pk-time-selection-panel__picks-label pk-text-label-x-small">
          Top picks for {period}
        </span>
        <div className="pk-time-selection-panel__grid">
          {slots.map((slot, i) => (
            <TimeSlotChip
              key={`${slot.time}-${i}`}
              time={slot.time}
              state={slot.state === 'disabled' ? 'disabled' : slot.time === selectedTime ? 'selected' : 'default'}
              badge={slot.badge}
              onClick={() => onSelectTime?.(slot.time)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
