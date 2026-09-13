import React, { useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { BookingDetails } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import { ContactInformationForm } from '../src/booking-and-perks/components/ContactInformationForm/ContactInformationForm'
import { PromoCodeInput } from '../src/booking-and-perks/components/PromoCodeInput/PromoCodeInput'
import { PaymentMethodForm } from '../src/booking-and-perks/components/PaymentMethodForm/PaymentMethodForm'
import { TermsModal } from '../src/booking-and-perks/components/TermsModal/TermsModal'
import { Button } from '../src/components/Button/Button'
import { ChevronLeft } from '../src/icons'
import './Screens.css'

/**
 * Screen 2 — "Checkout — Contact Info & Booking Summary". Two real captures,
 * both verified via design-context, that this screen switches between on
 * `isSignedIn`:
 *
 * - Signed in (node 4281:91157, "Background") — a small "Signed in as
 *   {name}" Perks Card right below the hero, then Booking Details, then the
 *   "Your available rewards" Perks Card, then Contact Information Form
 *   (`isSignedIn`, the shorter variant).
 * - Not signed in (node 5000:153811, "Checkout (NOT Perk User)") — no Perks
 *   Card at all (rewards can't be available to a guest who isn't signed
 *   in): straight from Booking Details into Contact Information Form
 *   (`isSignedIn={false}`, the taller variant with its own "Join Perks"
 *   card and phone-verification flow already covering that pitch).
 *
 * Promo Code Input / Payment Method Form / the terms fine-print are
 * identical in both captures.
 *
 * "Complete booking" opens the real Terms & Conditions overlay (node
 * 4281:91061) instead of completing the booking directly — "I agree"
 * closes it and calls `onComplete` (advancing to the Confirmation screen,
 * node 4281:91224); "Cancel" / the close button just dismiss the overlay.
 */
export function CheckoutScreen({
  isSignedIn,
  onLogOut,
  onBack,
  onComplete,
}: {
  isSignedIn: boolean
  onLogOut: () => void
  onBack: () => void
  onComplete: () => void
}) {
  const [showTerms, setShowTerms] = useState(false)

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
        {isSignedIn && <PerksCard type="sign-in" isSignedIn onLogOut={onLogOut} />}
        <BookingDetails />
        {isSignedIn && <PerksCard type="rewards" isSignedIn rewardsAvailable />}
        <ContactInformationForm isSignedIn={isSignedIn} />
        <PromoCodeInput />
        <PaymentMethodForm />
      </div>

      <div className="pk-proto-screen__submit">
        <Button variant="primary" onClick={() => setShowTerms(true)}>
          Complete booking
        </Button>
        <p className="pk-proto-screen__fine-print pk-text-body-small">
          By completing this booking, you agree to our terms of service &amp; privacy policy.
        </p>
      </div>

      {showTerms && (
        <TermsModal
          onAgree={() => {
            setShowTerms(false)
            onComplete()
          }}
          onCancel={() => setShowTerms(false)}
        />
      )}
    </div>
  )
}
