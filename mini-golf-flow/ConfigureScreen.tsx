import React, { useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { BookingFooter } from '../src/booking-and-perks/components/BookingFooter/BookingFooter'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { LocationPlayerPicker } from '../src/booking-and-perks/components/LocationPlayerPicker/LocationPlayerPicker'
import {
  ExperienceTypeSelector,
  MINI_GOLF_ROUND_OPTION_GROUPS,
  PUTTCADE_SETUP_OPTION_GROUPS,
} from '../src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector'
import { DiningPromptCard } from '../src/booking-and-perks/components/DiningPromptCard/DiningPromptCard'
import './Screens.css'

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
 * is added). Both Interactive Mini Golf's "HOW MANY ROUNDS?" (the
 * component's own default `optionGroups`) and Puttcade's "CHOOSE YOUR
 * SETUP" (bay count + duration, `PUTTCADE_SETUP_OPTION_GROUPS`) reuse the
 * same `ExperienceTypeSelector`/`SelectionCards` — only the heading and
 * option data change per experience. Dining Only has no pricing-tier
 * list of its own — instead a standalone `DiningPromptCard` ("Just here
 * to eat?" + a View Menu button) appears, a distinct real card rather
 * than another `ExperienceTypeSelector` variant.
 */
export function ConfigureScreen({ onCheckout }: { onCheckout: () => void }) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined)
  const [selectedRound, setSelectedRound] = useState<number | undefined>(undefined)
  const [selectedBay, setSelectedBay] = useState<number | undefined>(undefined)
  const [selectedDuration, setSelectedDuration] = useState<number | undefined>(undefined)

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
        <LocationPlayerPicker onDateSelect={setSelectedDate} />
        {selectedDate && selectedExperience !== 'puttcade' && (
          <ExperienceTypeSelector
            experienceValue={selectedExperience}
            onExperienceChange={setSelectedExperience}
            showOptions={selectedExperience === 'mini-golf'}
            optionGroups={[
              { ...MINI_GOLF_ROUND_OPTION_GROUPS[0], selectedIndex: selectedRound, onSelect: setSelectedRound },
            ]}
          />
        )}
        {selectedDate && selectedExperience === 'puttcade' && (
          <ExperienceTypeSelector
            experienceValue={selectedExperience}
            onExperienceChange={setSelectedExperience}
            optionsHeading="Choose your setup"
            optionGroups={[
              { ...PUTTCADE_SETUP_OPTION_GROUPS[0], selectedIndex: selectedBay, onSelect: setSelectedBay },
              { ...PUTTCADE_SETUP_OPTION_GROUPS[1], selectedIndex: selectedDuration, onSelect: setSelectedDuration },
            ]}
          />
        )}
        {selectedDate && selectedExperience === 'dining' && <DiningPromptCard />}
      </div>

      <BookingFooter variant="checkout" location="Chicago, IL" price="$0.00" checkoutDisabled onCheckout={onCheckout} />
    </div>
  )
}
