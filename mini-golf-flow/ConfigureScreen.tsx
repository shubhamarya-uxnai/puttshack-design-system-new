import React, { useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { BookingFooter } from '../src/booking-and-perks/components/BookingFooter/BookingFooter'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { LocationPlayerPicker } from '../src/booking-and-perks/components/LocationPlayerPicker/LocationPlayerPicker'
import { ExperienceTypeSelector } from '../src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector'
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
 * is added). Its "HOW MANY ROUNDS?" pricing tiers are only real for the
 * Interactive Mini Golf experience — Puttcade/Dining Only's own tiers
 * aren't captured yet, so the section only shows once that option is
 * chosen.
 */
export function ConfigureScreen({ onCheckout }: { onCheckout: () => void }) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined)
  const [selectedRound, setSelectedRound] = useState<number | undefined>(undefined)

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
        {selectedDate && (
          <ExperienceTypeSelector
            experienceValue={selectedExperience}
            onExperienceChange={setSelectedExperience}
            showOptions={selectedExperience === 'mini-golf'}
            selectedOptionIndex={selectedRound}
            onOptionSelect={setSelectedRound}
          />
        )}
      </div>

      <BookingFooter variant="checkout" location="Chicago, IL" price="$0.00" checkoutDisabled onCheckout={onCheckout} />
    </div>
  )
}
