import React, { useState } from 'react'
import { PhoneFrame } from './PhoneFrame'
import { ConfigureScreen } from './ConfigureScreen'
import { CheckoutScreen } from './CheckoutScreen'
import { ConfirmationScreen } from './ConfirmationScreen'
import { DEFAULT_PARTY_PLAYERS } from '../src/booking-and-perks/components/ManagePartyModal/ManagePartyModal'
import type { ManagePartyPlayer } from '../src/booking-and-perks/components/ManagePartyModal/ManagePartyModal'
import { Button } from '../src/components/Button/Button'
import { UserCheck } from '../src/icons'

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
  // Whether the "guest" has signed in to Puttshack Perks — drives which real Figma
  // checkout layout renders (node 4281:91157 "Background" when true, vs. node
  // 5000:153811 "Checkout (NOT Perk User)" when false: the latter has no Perks
  // Cards at all, since rewards can't be available to someone who isn't signed in).
  const [isSignedIn, setIsSignedIn] = useState(false)
  // Party roster lives here (not inside ManagePartyModal) so the prototype's external
  // "Accept invite" control — simulating the invited player tapping their own link on
  // their own device — can flip a player's status from outside the phone entirely.
  const [players, setPlayers] = useState<ManagePartyPlayer[]>(DEFAULT_PARTY_PLAYERS)

  const pendingInvite = players.find((p) => p.registrationStatus === 'link-sent')

  return (
    <PhoneFrame
      resetScrollKey={screen}
      sideAction={
        screen === 'confirmation' && pendingInvite ? (
          <Button
            variant="secondary"
            leadingIcon={<UserCheck aria-hidden="true" />}
            onClick={() =>
              setPlayers((prev) =>
                prev.map((p) => (p.id === pendingInvite.id ? { ...p, registrationStatus: 'registered' } : p))
              )
            }
          >
            {`Accept invite as ${pendingInvite.name}`}
          </Button>
        ) : undefined
      }
    >
      {screen === 'configure' && (
        <ConfigureScreen
          isSignedIn={isSignedIn}
          onSignIn={() => setIsSignedIn(true)}
          onLogOut={() => setIsSignedIn(false)}
          onCheckout={() => setScreen('checkout')}
        />
      )}
      {screen === 'checkout' && (
        <CheckoutScreen
          isSignedIn={isSignedIn}
          onLogOut={() => setIsSignedIn(false)}
          onBack={() => setScreen('configure')}
          onComplete={() => setScreen('confirmation')}
        />
      )}
      {screen === 'confirmation' && (
        <ConfirmationScreen
          players={players}
          onPlayersChange={setPlayers}
          onRestart={() => setScreen('configure')}
        />
      )}
    </PhoneFrame>
  )
}
