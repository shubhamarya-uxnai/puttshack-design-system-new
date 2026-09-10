import React from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { BookingFooter } from '../src/booking-and-perks/components/BookingFooter/BookingFooter'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { ExperienceTypeSelector } from '../src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector'
import { BundleUpsellSection } from '../src/booking-and-perks/components/BundleUpsellSection/BundleUpsellSection'
import { TimeSlotPicker } from '../src/booking-and-perks/components/TimeSlotPicker/TimeSlotPicker'
import { PageTitle, StepProgress } from './ScreenChrome'
import './Screens.css'

/**
 * Screen 1 — "Configure your round" (Figma: Interactive Mini Golf section,
 * frames "2 Rounds — Round 1 Set, Picking Round" / "Unlimited Round —
 * Default Package Selection", node e.g. 4281:90781). Content column
 * confirmed via a read-only shallow scan: Page Title Container, Perks
 * Card, Stepper (progress), Location & Player Picker, Experience Type
 * Selector/October, Bundle Upsell Section, Time Slot Picker, Booking Footer.
 *
 * "Location & Player Picker" and "Page Title Container" are both real
 * captured instances on this screen but neither is one of the 45 built
 * October Release components, and neither had any Figma-captured text/prop
 * content — rendered as honest placeholders / generic chrome rather than
 * invented copy, per instruction: this screen should reflect only verified
 * Figma composition data, not guesses from a reference screenshot.
 */
export function ConfigureScreen({ onCheckout }: { onCheckout: () => void }) {
  return (
    <div className="pk-proto-screen">
      <AppHeader />
      <PageTitle title="Configure your round" />
      <StepProgress step={1} of={3} />

      <div className="pk-proto-screen__body">
        <PerksCard type="rewards" />

        {/* "Location & Player Picker" is one of the 3 October Release components
            that could never be scanned (persistent transport limitation
            documented in figma-changes-command.md) — no composition data exists
            for it, so it's rendered as an honest placeholder. */}
        <div className="pk-placeholder">Location &amp; Player Picker</div>

        <ExperienceTypeSelector diningMenu onDarkBackground />
        <BundleUpsellSection />
        <TimeSlotPicker period="afternoon" twoRoundsSelector />
      </div>

      <BookingFooter variant="checkout" location="Chicago, IL" time="5:00 PM" ageGroup="4 Adults" onCheckout={onCheckout} />
    </div>
  )
}
