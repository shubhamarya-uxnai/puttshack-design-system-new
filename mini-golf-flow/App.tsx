import React, { useState } from 'react'
import { PhoneFrame } from './PhoneFrame'
import { ConfigureScreen } from './ConfigureScreen'
import { CheckoutScreen } from './CheckoutScreen'
import { ConfirmationScreen } from './ConfirmationScreen'

/**
 * "Interactive Mini Golf" booking flow prototype — Figma: Booking and Perks
 * Flow, section node 4281:90780. Built entirely from already-shipped
 * Design System + booking-and-perks composition components; no new DS
 * atoms, no Code Connect involved. The PhoneFrame scaffold is created once
 * here and reused by every screen, rather than each screen building its
 * own device chrome.
 */
type Screen = 'configure' | 'checkout' | 'confirmation'

export default function App() {
  const [screen, setScreen] = useState<Screen>('configure')

  return (
    <PhoneFrame>
      {screen === 'configure' && <ConfigureScreen onCheckout={() => setScreen('checkout')} />}
      {screen === 'checkout' && (
        <CheckoutScreen onBack={() => setScreen('configure')} onComplete={() => setScreen('confirmation')} />
      )}
      {screen === 'confirmation' && <ConfirmationScreen onRestart={() => setScreen('configure')} />}
    </PhoneFrame>
  )
}
