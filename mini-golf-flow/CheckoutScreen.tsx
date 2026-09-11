import React from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { BookingDetails } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import { ContactInformationForm } from '../src/booking-and-perks/components/ContactInformationForm/ContactInformationForm'
import { PromoCodeInput } from '../src/booking-and-perks/components/PromoCodeInput/PromoCodeInput'
import { PaymentMethodForm } from '../src/booking-and-perks/components/PaymentMethodForm/PaymentMethodForm'
import { Button } from '../src/components/Button/Button'
import { ChevronLeft } from '../src/icons'
import './Screens.css'

/**
 * Screen 2 — "Checkout — Contact Info & Booking Summary" (Figma:
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4281-91137).
 * Real top-to-bottom composition: App Header, a "BACK TO BOOKING" tertiary
 * Button (not the small chevron+title chrome used before), the same
 * Page-Title-Container hero pattern as ConfigureScreen ("CHECKOUT" +
 * subtitle — Stepper on this frame is hidden, matching the same real
 * pattern seen on screen 1), then Booking Details / Perks Card / Contact
 * Information Form / Promo Code Input / Payment Method Form, all real
 * booking-and-perks components already in the codebase — verified against
 * this node before wiring, not re-guessed.
 */
export function CheckoutScreen({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  return (
    <div className="pk-proto-screen">
      <AppHeader />

      <div className="pk-proto-screen__hero">
        <Button
          variant="tertiary"
          inverse
          leadingIcon={<ChevronLeft aria-hidden="true" />}
          onClick={onBack}
          className="pk-proto-screen__back-button"
        >
          Back to booking
        </Button>
        <h1 className="pk-proto-screen__hero-title pk-text-headline-medium">Checkout</h1>
        <p className="pk-proto-screen__hero-subtitle pk-text-body-medium">
          Review your selected experiences and complete your booking
        </p>
      </div>

      <div className="pk-proto-screen__body">
        <BookingDetails />
        <PerksCard type="rewards" isSignedIn rewardsAvailable />
        <ContactInformationForm />
        <PromoCodeInput />
        <PaymentMethodForm />
      </div>

      <div className="pk-proto-screen__submit">
        <Button variant="primary" onClick={onComplete}>
          Complete booking
        </Button>
        <p className="pk-proto-screen__fine-print pk-text-body-small">
          By completing this booking, you agree to our terms of service &amp; privacy policy.
        </p>
      </div>
    </div>
  )
}
