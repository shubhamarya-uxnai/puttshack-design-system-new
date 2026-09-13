import type { TimeSelectionPeriod, TimeSlot } from '../components/TimeSelectionPanel/TimeSelectionPanel'

/**
 * Demo "now" — kept in sync with the `StatusBar`'s own default displayed time (Figma: App
 * Header's status bar, node 333:21199) rather than the real system clock, so the mocked
 * "past times are disabled" behavior matches what's printed at the top of the phone.
 */
export const DEMO_NOW_LABEL = '10:01 AM'

/** "h:mm AM/PM" -> minutes since midnight, e.g. '1:30 PM' -> 810. */
export function parseTimeToMinutes(time: string): number {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return 0
  let [, h, m, period] = match
  let hours = Number(h) % 12
  if (period.toUpperCase() === 'PM') hours += 12
  return hours * 60 + Number(m)
}

export const DEMO_NOW_MINUTES = parseTimeToMinutes(DEMO_NOW_LABEL)

/** Figma node 4281:91102 / 4437:180189: booking hours run 11:00 AM to 10:00 PM, split into
 * three tabs, with the last five evening slots (8:00 PM–10:00 PM) carrying the "21+" badge. */
const PERIOD_TIMES: Record<TimeSelectionPeriod, string[]> = {
  morning: ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
  afternoon: ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'],
  evening: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'],
}

const BEST_VALUE_BY_PERIOD: Partial<Record<TimeSelectionPeriod, string>> = {
  morning: '11:30 AM',
  afternoon: '1:00 PM',
  evening: '7:30 PM',
}

const AGE_RESTRICTED_FROM_MINUTES = parseTimeToMinutes('8:00 PM')

/** Builds a period's time-slot chips, marking anything at/before `nowMinutes` as disabled
 * (a "today" simplification — this demo doesn't model booking for a future date differently). */
export function buildTimeSlots(period: TimeSelectionPeriod, nowMinutes: number = DEMO_NOW_MINUTES): TimeSlot[] {
  return PERIOD_TIMES[period].map((time) => {
    const minutes = parseTimeToMinutes(time)
    const isPast = minutes <= nowMinutes
    return {
      time,
      state: isPast ? 'disabled' : undefined,
      badge: !isPast && BEST_VALUE_BY_PERIOD[period] === time ? 'Best Value' : undefined,
      ageRestricted: minutes >= AGE_RESTRICTED_FROM_MINUTES,
    }
  })
}

/** A period is fully disabled once every one of its slots has already passed. */
export function isPeriodFullyPast(period: TimeSelectionPeriod, nowMinutes: number = DEMO_NOW_MINUTES): boolean {
  const times = PERIOD_TIMES[period]
  return parseTimeToMinutes(times[times.length - 1]) <= nowMinutes
}

export function getDisabledPeriods(nowMinutes: number = DEMO_NOW_MINUTES): TimeSelectionPeriod[] {
  return (['morning', 'afternoon', 'evening'] as TimeSelectionPeriod[]).filter((p) => isPeriodFullyPast(p, nowMinutes))
}

/** Picks the first non-fully-past period, falling back to 'evening' if the whole day is gone. */
export function firstAvailablePeriod(nowMinutes: number = DEMO_NOW_MINUTES): TimeSelectionPeriod {
  const order: TimeSelectionPeriod[] = ['morning', 'afternoon', 'evening']
  return order.find((p) => !isPeriodFullyPast(p, nowMinutes)) ?? 'evening'
}
