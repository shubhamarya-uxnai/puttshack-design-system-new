import React, { useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { BookingDetails } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import type { BookingSummary } from './ConfigureScreen'
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
 * "Pay $X & Book" (Figma node 4281:91137 — the real label carries the exact
 * total, not the generic "Complete booking" this used to say) opens the real
 * Terms & Conditions overlay (node 4281:91061) instead of completing the
 * booking directly — "I agree" closes it and calls `onComplete` (advancing
 * to the Confirmation screen, node 4281:91224); "Cancel" / the close button
 * just dismiss the overlay. Per that same node, the button lives in a sticky
 * bar pinned to the bottom of the screen (not simply after the last scrolled
 * section), and stays disabled until the guest has a verified phone number
 * on file — a signed-in guest's counts as already verified; an unsigned
 * guest has to complete the phone OTP flow in Contact Information first.
 */
export function CheckoutScreen({
  isSignedIn,
  booking,
  onLogOut,
  onBack,
  onComplete,
}: {
  isSignedIn: boolean
  /** The exact selection made on ConfigureScreen — null only if Checkout is somehow reached
   * without going through it first, in which case BookingDetails falls back to its own defaults. */
  booking: BookingSummary | null
  onLogOut: () => void
  onBack: () => void
  onComplete: () => void
}) {
  const [showTerms, setShowTerms] = useState(false)
  // Figma: node 6014:90572 (Add Debit/Credit Card clicked -> "New Card Details" form) vs
  // 6014:90617 (a first-time guest with no cards on file at all, before adding one).
  const [showNewCard, setShowNewCard] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState('card-1')
  const [phoneVerified, setPhoneVerified] = useState(false)

  // Figma sample shows "PAY $93 & BOOK" — no trailing cents — for a whole-dollar total.
  const displayPrice = (booking?.totalPrice ?? '$0.00').replace(/\.00$/, '')

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
        {booking ? (
          <BookingDetails
            variant={booking.variant}
            location={booking.location}
            setup={booking.setup}
            groupSize={booking.groupSize}
            groupSizeDetail={booking.groupSizeDetail}
            date={booking.date}
            time={booking.time}
            totalPrice={booking.totalPrice}
          />
        ) : (
          <BookingDetails />
        )}
        {isSignedIn && <PerksCard type="rewards" isSignedIn rewardsAvailable />}
        <ContactInformationForm isSignedIn={isSignedIn} onVerifiedChange={setPhoneVerified} />
        <PromoCodeInput />
        <PaymentMethodForm
          cardsAdded={isSignedIn}
          newCard={showNewCard}
          selectedCardId={selectedCardId}
          onSelectCard={setSelectedCardId}
          onToggleNewCard={() => setShowNewCard((v) => !v)}
        />
        <p className="pk-proto-screen__fine-print pk-text-body-small">
          By completing this booking, you agree to our terms of service &amp; privacy policy.
        </p>
      </div>

      <div className="pk-proto-screen__sticky-cta">
        <Button variant="primary" disabled={!phoneVerified} onClick={() => setShowTerms(true)}>
          {`Pay ${displayPrice} & book`}
        </Button>
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
