import React, { useMemo, useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { BookingFooter } from '../src/booking-and-perks/components/BookingFooter/BookingFooter'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { LocationPlayerPicker } from '../src/booking-and-perks/components/LocationPlayerPicker/LocationPlayerPicker'
import {
  ExperienceTypeSelector,
  MINI_GOLF_ROUND_OPTION_GROUPS,
  PUTTCADE_SETUP_OPTION_GROUPS,
} from '../src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector'
import { TimeSlotPicker } from '../src/booking-and-perks/components/TimeSlotPicker/TimeSlotPicker'
import type { TimeSelectionPeriod } from '../src/booking-and-perks/components/TimeSelectionPanel/TimeSelectionPanel'
import { FullCalendarModal } from '../src/booking-and-perks/components/FullCalendarModal/FullCalendarModal'
import { DiningMenuModal } from '../src/booking-and-perks/components/DiningMenuModal/DiningMenuModal'
import { SignInFlow } from '../src/booking-and-perks/components/SignInFlow/SignInFlow'
import { buildTimeSlots, getDisabledPeriods, firstAvailablePeriod } from '../src/booking-and-perks/utils/timeSlots'
import type { BookingDetailsVariant } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import './Screens.css'

const EXPERIENCE_LABELS: Record<string, string> = {
  puttcade: 'Puttcade',
  'mini-golf': 'Interactive Mini Golf',
  dining: 'Dining Only',
}

const EXPERIENCE_TO_BOOKING_VARIANT: Record<string, BookingDetailsVariant> = {
  puttcade: 'puttcade',
  'mini-golf': 'mini-golf',
  dining: 'dining-only',
}

/** Everything Checkout's `BookingDetails` needs to show the exact selection made on this
 * screen, rather than its own hardcoded "Interactive Mini Golf / Sat, Apr 25" defaults. */
export interface BookingSummary {
  variant: BookingDetailsVariant
  location: string
  setup: string
  groupSize: string
  groupSizeDetail: string
  date: string
  time: string
  totalPrice: string
}

/**
 * Screen 1 — "Unlimited Round — Default Package Selection" (Figma: Booking
 * and Perks Flow, node 5000:149747, https://www.figma.com/design/
 * X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=5000-149747). Real
 * captured composition: App Header, Page Title Container (hero), Perks
 * Card, Location & Player Picker (Stepper instance on this frame is
 * hidden). Content and copy below are read directly from that node via
 * Figma's design-context API, not guessed from a screenshot.
 *
 * "Experience Type Selector/October" (node 5000:149789) is a real next
 * step in this flow — the app reveals it once a date is picked in
 * Location & Player Picker, matching the flow's own progressive-
 * disclosure pattern (Select Date itself stays disabled until a player
 * is added). Mini Golf's "HOW MANY ROUNDS?", Puttcade's "CHOOSE YOUR
 * SETUP", and Dining Only's `DiningPromptCard` all live inside the same
 * `ExperienceTypeSelector` now, switched by which real props ConfigureScreen
 * passes in for the chosen experience. Once a round (or both bay + duration
 * for Puttcade) is picked, "Time Slot Picker" (node 4435:179396) reveals —
 * the same progressive-disclosure pattern continued one step further.
 *
 * `BookingFooter` (node 4437:180396) reflects every real selection made so
 * far — location/date/time in the magenta row, guests/experience/setup/
 * duration in the black/64% row — rather than the earlier static copy.
 */
export function ConfigureScreen({
  isSignedIn,
  onSignIn,
  onLogOut,
  onCheckout,
}: {
  isSignedIn: boolean
  onSignIn: () => void
  onLogOut: () => void
  onCheckout: (summary: BookingSummary) => void
}) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)
  const [guests, setGuests] = useState({ adults: 0, youngAdults: 0, juniors: 0 })
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined)
  const [selectedRound, setSelectedRound] = useState<number | undefined>(undefined)
  const [selectedBay, setSelectedBay] = useState<number | undefined>(undefined)
  const [selectedDuration, setSelectedDuration] = useState<number | undefined>(undefined)
  const [period, setPeriod] = useState<TimeSelectionPeriod>(() => firstAvailablePeriod())
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)

  // Switching experience must clear the previous one's own picks — otherwise the footer (and
  // Checkout) can keep showing e.g. "1 Bay" after the guest moves on to Dining Only.
  function handleExperienceChange(key: string) {
    setSelectedExperience(key)
    setSelectedRound(undefined)
    setSelectedBay(undefined)
    setSelectedDuration(undefined)
    setSelectedTime(undefined)
  }

  const isPuttcade = selectedExperience === 'puttcade'
  const isDining = selectedExperience === 'dining'
  const totalGuests = guests.adults + guests.youngAdults + guests.juniors
  // Figma node 4281:91078: bay count only matters once the party is big enough to need the
  // choice — under 7 guests, Puttcade skips straight to picking a duration.
  const showBaySelection = totalGuests > 6
  const readyForTime = isPuttcade
    ? (!showBaySelection || selectedBay !== undefined) && selectedDuration !== undefined
    : isDining
      ? true
      : selectedRound !== undefined

  const disabledPeriods = useMemo(() => getDisabledPeriods(), [])
  const slots = useMemo(() => buildTimeSlots(period), [period])

  const guestsLabel = useMemo(() => {
    const parts: string[] = []
    if (guests.adults > 0) parts.push(`${guests.adults} Adult${guests.adults > 1 ? 's' : ''}`)
    if (guests.youngAdults > 0) parts.push(`${guests.youngAdults} Young Adult${guests.youngAdults > 1 ? 's' : ''}`)
    if (guests.juniors > 0) parts.push(`${guests.juniors} Junior${guests.juniors > 1 ? 's' : ''}`)
    return parts.length > 0 ? parts.join(' + ') : undefined
  }, [guests])

  const roundOption = selectedRound !== undefined ? MINI_GOLF_ROUND_OPTION_GROUPS[0].options[selectedRound] : undefined
  const bayOption = selectedBay !== undefined ? PUTTCADE_SETUP_OPTION_GROUPS[0].options[selectedBay] : undefined
  const durationOption =
    selectedDuration !== undefined ? PUTTCADE_SETUP_OPTION_GROUPS[1].options[selectedDuration] : undefined

  const price = isPuttcade ? durationOption?.totalPrice : roundOption?.totalPrice

  const groupSizeDetail = useMemo(() => {
    const parts: string[] = []
    if (guests.adults > 0) parts.push(`${guests.adults} adult${guests.adults > 1 ? 's' : ''}`)
    if (guests.youngAdults > 0) parts.push(`${guests.youngAdults} young adult${guests.youngAdults > 1 ? 's' : ''}`)
    if (guests.juniors > 0) parts.push(`${guests.juniors} junior${guests.juniors > 1 ? 's' : ''}`)
    return parts.join(' · ')
  }, [guests])

  const bookingSummary: BookingSummary = {
    variant: selectedExperience ? EXPERIENCE_TO_BOOKING_VARIANT[selectedExperience] : 'mini-golf',
    location: 'Chicago, IL',
    setup: isPuttcade ? (durationOption?.title ?? '') : isDining ? '' : (roundOption?.title ?? ''),
    groupSize: `${totalGuests} guest${totalGuests === 1 ? '' : 's'}`,
    groupSizeDetail,
    date: selectedDate ?? '',
    time: selectedTime ?? '',
    totalPrice: price ?? '$0.00',
  }

  return (
    <div className="pk-proto-screen">
      <AppHeader />

      <div className="pk-proto-screen__hero">
        <h1 className="pk-proto-screen__hero-title pk-text-headline-medium">Let&apos;s plan your visit</h1>
        <p className="pk-proto-screen__hero-subtitle pk-text-body-medium">
          Build your perfect Puttshack experience — dates, drinks, high-fives, all sorted.
        </p>
      </div>

      <div className="pk-proto-screen__body">
        <PerksCard type="sign-in" isSignedIn={isSignedIn} onSignIn={() => setSignInOpen(true)} onLogOut={onLogOut} />
        <LocationPlayerPicker
          onDateSelect={setSelectedDate}
          onGuestsChange={setGuests}
          onViewCalendar={() => setCalendarOpen(true)}
        />
        {selectedDate && (
          <ExperienceTypeSelector
            experienceValue={selectedExperience}
            onExperienceChange={handleExperienceChange}
            showOptions={selectedExperience === 'mini-golf' || isPuttcade}
            optionsHeading={isPuttcade ? 'Choose your setup' : 'How many rounds?'}
            optionGroups={
              isPuttcade
                ? [
                    ...(showBaySelection
                      ? [{ ...PUTTCADE_SETUP_OPTION_GROUPS[0], selectedIndex: selectedBay, onSelect: setSelectedBay }]
                      : []),
                    {
                      ...PUTTCADE_SETUP_OPTION_GROUPS[1],
                      selectedIndex: selectedDuration,
                      onSelect: setSelectedDuration,
                    },
                  ]
                : [{ ...MINI_GOLF_ROUND_OPTION_GROUPS[0], selectedIndex: selectedRound, onSelect: setSelectedRound }]
            }
            showDiningPrompt={isDining}
            onViewMenu={() => setMenuOpen(true)}
          />
        )}
        {readyForTime && (
          <TimeSlotPicker
            period={period}
            onPeriodChange={setPeriod}
            slots={slots}
            disabledPeriods={disabledPeriods}
            selectedTime={selectedTime}
            onSelectTime={setSelectedTime}
          />
        )}
      </div>

      <BookingFooter
        location="Chicago, IL"
        date={selectedDate}
        time={selectedTime}
        guests={guestsLabel}
        experience={selectedExperience ? EXPERIENCE_LABELS[selectedExperience] : undefined}
        setup={bayOption?.title}
        duration={isPuttcade ? durationOption?.title : roundOption?.title}
        price={price ?? '$0.00'}
        checkoutDisabled={!selectedTime}
        onCheckout={() => onCheckout(bookingSummary)}
      />

      <FullCalendarModal
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        onSelectDay={(day) => {
          setSelectedDate(`APR ${day}`)
          setCalendarOpen(false)
        }}
      />
      <DiningMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SignInFlow
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSignedIn={() => {
          setSignInOpen(false)
          onSignIn()
        }}
      />
    </div>
  )
}
