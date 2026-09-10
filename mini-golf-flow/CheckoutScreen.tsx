import React from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { PerksCard } from '../src/booking-and-perks/components/PerksCard/PerksCard'
import { ContactInformationForm } from '../src/booking-and-perks/components/ContactInformationForm/ContactInformationForm'
import { PromoCodeInput } from '../src/booking-and-perks/components/PromoCodeInput/PromoCodeInput'
import { PaymentMethodForm } from '../src/booking-and-perks/components/PaymentMethodForm/PaymentMethodForm'
import { Button } from '../src/components/Button/Button'
import { PageTitle, StepProgress } from './ScreenChrome'
import './Screens.css'

/**
 * Screen 2 — "Checkout" (Figma: Interactive Mini Golf section, frame
 * "Checkout — Contact Info & Booking Summary", node 4281:91195). Content
 * column confirmed via a read-only drill-down: Page Title Container,
 * Stepper (progress), then Perks Card / Contact Information Form / Promo
 * Code Input / Payment Method Form, then a submit Button and fine-print
 * text.
 */
export function CheckoutScreen({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  return (
    <div className="pk-proto-screen">
      <AppHeader />
      <PageTitle title="Checkout" onBack={onBack} />
      <StepProgress step={2} of={3} />

      <div className="pk-proto-screen__body">
        <PerksCard type="rewards" isSignedIn rewardsAvailable />
        <ContactInformationForm />
        <PromoCodeInput inverse />
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
