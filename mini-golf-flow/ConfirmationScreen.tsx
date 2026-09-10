import React from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { ShareBookingLink } from '../src/booking-and-perks/components/ShareBookingLink/ShareBookingLink'
import { BookingDetails } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import { PageTitle } from './ScreenChrome'
import './Screens.css'

/**
 * Screen 3 — "Confirmation" (Figma: Interactive Mini Golf section, frame
 * "Confirmation — Booking Complete", node 4281:91224). Content column
 * confirmed via a read-only drill-down: Page Title Container, Share
 * Booking Link/October, Booking details, plus fine-print terms text.
 */
export function ConfirmationScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="pk-proto-screen">
      <AppHeader />
      <PageTitle title="You're in!" />

      <div className="pk-proto-screen__body">
        <ShareBookingLink shareRegistrationLink onPrimaryAction={onRestart} />
        <BookingDetails variant="mini-golf" heading round2 modify />
        <p className="pk-proto-screen__fine-print pk-text-body-small">
          By completing this booking, you agree to our terms of service &amp; privacy policy.
        </p>
      </div>
    </div>
  )
}
