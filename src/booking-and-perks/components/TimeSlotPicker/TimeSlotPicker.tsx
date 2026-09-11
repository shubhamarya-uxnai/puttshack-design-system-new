import React from 'react'
import { cx } from '../../../lib/cx'
import { ChevronDown } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { TimeSelectionPanel, type TimeSelectionPeriod, type TimeSlot } from '../TimeSelectionPanel/TimeSelectionPanel'
import './TimeSlotPicker.css'

export interface TimeSlotPickerProps {
  /** Figma: `Property 1` (Morning/Afternoon/Evening). @default 'afternoon' */
  period?: TimeSelectionPeriod
  onPeriodChange?: (period: TimeSelectionPeriod) => void
  slots?: TimeSlot[]
  selectedTime?: string
  onSelectTime?: (time: string) => void
  onViewAllTimes?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Time Slot Picker", node
 * 4435:179396, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179396).
 * The real captured instance is just the dark card wrapper (--pk-sys-bg-card)
 * around a `TimeSelectionPanel` and a "SEE ALL TIMES" tertiary `Button`
 * with a chevron-down icon — the earlier placeholder's own period-label
 * header and per-round wrapping weren't real, since this node wasn't
 * scannable yet at the time.
 */
export function TimeSlotPicker({
  period = 'afternoon',
  onPeriodChange,
  slots,
  selectedTime,
  onSelectTime,
  onViewAllTimes,
  className,
}: TimeSlotPickerProps) {
  return (
    <section className={cx('pk-time-slot-picker', className)}>
      <TimeSelectionPanel
        period={period}
        onPeriodChange={onPeriodChange}
        slots={slots}
        selectedTime={selectedTime}
        onSelectTime={onSelectTime}
      />
      <Button variant="tertiary" inverse trailingIcon={<ChevronDown aria-hidden="true" />} onClick={onViewAllTimes}>
        See all times
      </Button>
    </section>
  )
}
