import React from 'react'
import { Modal } from '../Modal/Modal'
import './FullCalendarModal.css'

export interface FullCalendarDay {
  day: string
  weekday: string
  /** Blank filler cell before the 1st of the visible grid, or empty trailing cells. */
  isFiller?: boolean
}

export interface FullCalendarModalProps {
  open: boolean
  onClose?: () => void
  /** Days shown in the grid, left-to-right Sun→Sat, wrapping into new rows. */
  days?: FullCalendarDay[]
  selectedDay?: string
  onSelectDay?: (day: string) => void
}

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/** Figma: "Full Calendar" modal (node 4281:91048) — "Next 14 days" grid, opened from the
 * "See Full Calendar" button on the Location & Player Picker's date row. Built on the shared
 * `Modal` shell rather than a one-off overlay. */
export function FullCalendarModal({ open, onClose, days, selectedDay, onSelectDay }: FullCalendarModalProps) {
  if (!open) return null

  const grid = days ?? buildDefaultDays()

  return (
    <Modal title="Full Calendar" subtitle="Next 14 days" onClose={onClose} showButtonGroup={false}>
      <div className="pk-full-calendar">
        <div className="pk-full-calendar__banner pk-text-body-medium">Bookings open for the next 14 days</div>
        <div className="pk-full-calendar__weekdays">
          {WEEKDAY_LABELS.map((w) => (
            <span key={w} className="pk-full-calendar__weekday pk-text-label-small">
              {w}
            </span>
          ))}
        </div>
        <div className="pk-full-calendar__grid">
          {grid.map((d, i) =>
            d.isFiller ? (
              <span key={`filler-${i}`} className="pk-full-calendar__cell pk-full-calendar__cell--filler" />
            ) : (
              <button
                key={d.day}
                type="button"
                className={`pk-full-calendar__cell${d.day === selectedDay ? ' pk-full-calendar__cell--selected' : ''}`}
                onClick={() => onSelectDay?.(d.day)}
              >
                {d.day}
              </button>
            )
          )}
        </div>
      </div>
    </Modal>
  )
}

/** Demo-only 14-day range starting "today" — no real calendar/date-math dependency needed for this prototype. */
function buildDefaultDays(): FullCalendarDay[] {
  const start = 20
  const startWeekday = 3 // Wed, matching APR 20 in the rest of this flow's demo dates
  const days: FullCalendarDay[] = []
  for (let i = 0; i < startWeekday; i++) days.push({ day: '', weekday: '', isFiller: true })
  const APRIL_DAYS = 30
  for (let i = 0; i < 14; i++) {
    const raw = start + i
    const date = raw > APRIL_DAYS ? raw - APRIL_DAYS : raw
    days.push({ day: String(date), weekday: WEEKDAY_LABELS[(startWeekday + i) % 7] })
  }
  return days
}
