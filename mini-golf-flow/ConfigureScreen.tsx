import React, { useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { BookingFooter } from '../src/booking-and-perks/components/BookingFooter/BookingFooter'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import {
  LocationPlayerPicker,
  type AgeGroupCount,
} from '../src/booking-and-perks/components/LocationPlayerPicker/LocationPlayerPicker'
import { ExperienceTypeSelector } from '../src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector'
import { BundleUpsellSection } from '../src/booking-and-perks/components/BundleUpsellSection/BundleUpsellSection'
import { TimeSlotPicker } from '../src/booking-and-perks/components/TimeSlotPicker/TimeSlotPicker'
import './Screens.css'

const DEFAULT_AGE_GROUPS: AgeGroupCount[] = [
  { label: 'Adults', ageRange: '21+', count: 0 },
  { label: 'Young Adults', ageRange: '13-20', count: 0 },
  { label: 'Juniors', ageRange: '0-12', count: 0 },
]

/**
 * Screen 1 — "Let's plan your visit" (Figma: Interactive Mini Golf section,
 * frames "2 Rounds — Round 1 Set, Picking Round" / "Unlimited Round —
 * Default Package Selection", node e.g. 4281:90781). Content column
 * confirmed via a read-only shallow scan: Page Title Container, Perks
 * Card, Stepper (progress), Location & Player Picker, Experience Type
 * Selector/October, Bundle Upsell Section, Time Slot Picker, Booking Footer.
 *
 * Headline/subtitle copy and the Location & Player Picker composition are
 * from a reference screenshot the user supplied (2026-09-11) — the
 * original Figma capture for this page never included bound text content,
 * and "Location & Player Picker" itself hit the permanent transport
 * limitation, so neither could come from the scan data directly.
 */
export function ConfigureScreen({ onCheckout }: { onCheckout: () => void }) {
  const [ageGroups, setAgeGroups] = useState(DEFAULT_AGE_GROUPS)
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)

  return (
    <div className="pk-proto-screen">
      <AppHeader />

      <div className="pk-proto-screen__hero">
        <h1 className="pk-proto-screen__hero-title pk-text-headline-large">Let&rsquo;s plan your visit</h1>
        <p className="pk-proto-screen__hero-subtitle pk-text-body-medium">
          Build your perfect Puttshack experience — dates, drinks, high-fives, all sorted.
        </p>
      </div>

      <div className="pk-proto-screen__body">
        <PerksCard type="rewards" />

        <LocationPlayerPicker
          ageGroups={ageGroups}
          onChangeAgeGroup={(i, delta) =>
            setAgeGroups((prev) => prev.map((g, gi) => (gi === i ? { ...g, count: Math.max(0, g.count + delta) } : g)))
          }
          selectedDateIndex={selectedDateIndex}
          onSelectDate={setSelectedDateIndex}
        />

        <ExperienceTypeSelector diningMenu onDarkBackground />
        <BundleUpsellSection />
        <TimeSlotPicker period="afternoon" twoRoundsSelector />
      </div>

      <BookingFooter variant="checkout" location="Chicago, IL" time="5:00 PM" ageGroup="4 Adults" onCheckout={onCheckout} />
    </div>
  )
}
