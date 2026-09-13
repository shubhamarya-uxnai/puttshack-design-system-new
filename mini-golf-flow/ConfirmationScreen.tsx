import React, { useEffect, useState } from 'react'
import { AppHeader } from '../src/booking-and-perks/components/AppHeader/AppHeader'
import { ShareBookingLink } from '../src/booking-and-perks/components/ShareBookingLink/ShareBookingLink'
import { BookingDetails } from '../src/booking-and-perks/components/BookingDetails/BookingDetails'
import { ManagePartyModal } from '../src/booking-and-perks/components/ManagePartyModal/ManagePartyModal'
import { Toast } from '../src/components/Toast/Toast'
import { Info } from '../src/icons'
import { PageTitle } from './ScreenChrome'
import './Screens.css'

/**
 * Screen 3 — "Confirmation" (Figma: Interactive Mini Golf section, frame
 * "Confirmation — Booking Complete", node 4281:91224). Content column
 * confirmed via a read-only drill-down: Page Title Container, Share
 * Booking Link/October, Booking details, plus fine-print terms text.
 *
 * "Manage party" opens the real "Manage Your Party" overlay (node
 * 4281:90882) — registration progress + share link + a `PlayerCard` per
 * party member. "Save and close" saves the party changes, dismisses the
 * modal, and surfaces a top informative Toast confirming the save, which
 * auto-dismisses after 2 seconds.
 */
export function ConfirmationScreen({ onRestart }: { onRestart: () => void }) {
  const [showManageParty, setShowManageParty] = useState(false)
  const [showSavedToast, setShowSavedToast] = useState(false)

  useEffect(() => {
    if (!showSavedToast) return
    const timer = setTimeout(() => setShowSavedToast(false), 2000)
    return () => clearTimeout(timer)
  }, [showSavedToast])

  return (
    <div className="pk-proto-screen">
      <AppHeader />
      <PageTitle title="You're in!" />

      <div className="pk-proto-screen__body">
        <ShareBookingLink
          shareRegistrationLink
          onPrimaryAction={onRestart}
          onManageParty={() => setShowManageParty(true)}
        />
        <BookingDetails variant="mini-golf" heading round2 modify />
        <p className="pk-proto-screen__fine-print pk-text-body-small">
          By completing this booking, you agree to our terms of service &amp; privacy policy.
        </p>
      </div>

      {showManageParty && (
        <ManagePartyModal
          onSaveAndClose={() => {
            setShowManageParty(false)
            setShowSavedToast(true)
          }}
          onClose={() => setShowManageParty(false)}
        />
      )}

      {showSavedToast && (
        <div className="pk-proto-screen__top-toast">
          <Toast variant="informative" icon={<Info aria-hidden="true" />} message="Your changes have been saved." />
        </div>
      )}
    </div>
  )
}
