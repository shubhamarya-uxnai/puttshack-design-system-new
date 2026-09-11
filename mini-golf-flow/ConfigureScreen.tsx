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
import './Screens.css'

const EXPERIENCE_LABELS: Record<string, string> = {
  puttcade: 'Puttcade',
  'mini-golf': 'Interactive Mini Golf',
  dining: 'Dining Only',
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
export function ConfigureScreen({ onCheckout }: { onCheckout: () => void }) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)
  const [guests, setGuests] = useState({ adults: 0, youngAdults: 0, juniors: 0 })
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined)
  const [selectedRound, setSelectedRound] = useState<number | undefined>(undefined)
  const [selectedBay, setSelectedBay] = useState<number | undefined>(undefined)
  const [selectedDuration, setSelectedDuration] = useState<number | undefined>(undefined)
  const [period, setPeriod] = useState<TimeSelectionPeriod>('afternoon')
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const isPuttcade = selectedExperience === 'puttcade'
  const readyForTime = isPuttcade ? selectedBay !== undefined && selectedDuration !== undefined : selectedRound !== undefined

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
        <PerksCard type="unlock" />
        <LocationPlayerPicker onDateSelect={setSelectedDate} onGuestsChange={setGuests} />
        {selectedDate && (
          <ExperienceTypeSelector
            experienceValue={selectedExperience}
            onExperienceChange={setSelectedExperience}
            showOptions={selectedExperience === 'mini-golf' || isPuttcade}
            optionsHeading={isPuttcade ? 'Choose your setup' : 'How many rounds?'}
            optionGroups={
              isPuttcade
                ? [
                    { ...PUTTCADE_SETUP_OPTION_GROUPS[0], selectedIndex: selectedBay, onSelect: setSelectedBay },
                    {
                      ...PUTTCADE_SETUP_OPTION_GROUPS[1],
                      selectedIndex: selectedDuration,
                      onSelect: setSelectedDuration,
                    },
                  ]
                : [{ ...MINI_GOLF_ROUND_OPTION_GROUPS[0], selectedIndex: selectedRound, onSelect: setSelectedRound }]
            }
            showDiningPrompt={selectedExperience === 'dining'}
          />
        )}
        {readyForTime && (
          <TimeSlotPicker period={period} onPeriodChange={setPeriod} selectedTime={selectedTime} onSelectTime={setSelectedTime} />
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
        onCheckout={onCheckout}
      />
    </div>
  )
}
