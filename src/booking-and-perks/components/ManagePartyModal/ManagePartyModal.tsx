import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { RegistrationCountSummary } from '../RegistrationCountSummary/RegistrationCountSummary'
import { PlayerCard } from '../PlayerCard/PlayerCard'
import { ShareLinkModal } from '../ShareLinkModal/ShareLinkModal'
import { PlayerDetailModal } from '../PlayerDetailModal/PlayerDetailModal'
import type { PlayerDetailStatus } from '../PlayerDetailModal/PlayerDetailModal'
import type { RegistrationStatus } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import { Plus } from '../../../icons'

export interface ManagePartyPlayer {
  id: string
  name: string
  type: string
  isLead?: boolean
  registrationStatus?: RegistrationStatus
  phone?: string
}

export const DEFAULT_PARTY_PLAYERS: ManagePartyPlayer[] = [
  {
    id: 'p1',
    name: 'Alex Parry',
    type: 'Adult (21+)',
    isLead: true,
    registrationStatus: 'registered',
    phone: '(•••) •••-0199',
  },
  { id: 'p2', name: 'Player 2', type: 'Adult (21+)', registrationStatus: 'not-registered' },
  { id: 'p3', name: 'Player 3', type: 'Young adult (13-20)', registrationStatus: 'not-registered' },
  { id: 'p4', name: 'Player 4', type: 'Junior (0-12)', registrationStatus: 'not-registered' },
]

/** Maps a party member's badge status to which of the 3 real "Register {name}"
 * sub-modal captures they should open. */
function toDetailStatus(status?: RegistrationStatus): PlayerDetailStatus {
  if (status === 'registered') return 'registered'
  if (status === 'link-sent') return 'link-sent'
  return 'not-registered'
}

export interface ManagePartyModalProps {
  players: ManagePartyPlayer[]
  onPlayersChange: (players: ManagePartyPlayer[]) => void
  registrationLink?: string
  onSaveAndClose?: (players: ManagePartyPlayer[]) => void
  onAddMorePlayer?: () => void
  onClose?: () => void
  className?: string
}

type View = { name: 'list' } | { name: 'share' } | { name: 'player'; playerId: string }

/**
 * Booking-and-Perks composite (Figma: "OVERLAY" wrapping the "Manage Your
 * Party" Modal, node 4281:90882). Opened by the Confirmation screen's
 * "Manage party" Button. Owns which of its 3 real sub-modals is on screen —
 * only one is ever open at once, matching the real "Is 2nd Modal" / Back
 * pattern:
 *
 * - The party list itself (this Modal's default view).
 * - "Share registration link" (node 4281:91056) — opened from "Share Link".
 * - "Register {name}" (registered/link-sent/not-registered, see
 *   `PlayerDetailModal`) — opened from a `PlayerCard`'s chevron, with
 *   "Back"/close returning here.
 *
 * `players` is controlled by the caller (not local state) so a change made
 * here — e.g. sending a registration link — is visible outside this modal
 * too, such as the prototype's external "Accept invite" control simulating
 * the invited guest.
 */
export function ManagePartyModal({
  players,
  onPlayersChange,
  registrationLink = 'puttshack.com/register/PSK-P4381PB',
  onSaveAndClose,
  onAddMorePlayer,
  onClose,
  className,
}: ManagePartyModalProps) {
  const [view, setView] = useState<View>({ name: 'list' })

  const registeredCount = players.filter((p) => p.registrationStatus === 'registered').length

  if (view.name === 'share') {
    return (
      <ShareLinkModal
        registrationLink={registrationLink}
        onClose={() => setView({ name: 'list' })}
        className={className}
      />
    )
  }

  if (view.name === 'player') {
    const player = players.find((p) => p.id === view.playerId)
    if (player) {
      return (
        <PlayerDetailModal
          playerName={player.name}
          status={toDetailStatus(player.registrationStatus)}
          phone={player.phone}
          displayName={player.name}
          ageGroup={player.type}
          onBack={() => setView({ name: 'list' })}
          onSendRegistrationLink={({ displayName, phone }) => {
            onPlayersChange(
              players.map((p) =>
                p.id === player.id ? { ...p, name: displayName || p.name, phone, registrationStatus: 'link-sent' } : p
              )
            )
            setView({ name: 'list' })
          }}
          onRemoveFromParty={() => {
            onPlayersChange(players.filter((p) => p.id !== player.id))
            setView({ name: 'list' })
          }}
          className={className}
        />
      )
    }
  }

  return (
    <Modal
      title="Manage your party"
      subtitle="Get everyone ready before arrival. Each participating adult must complete their own registration and accept the terms using a secure link. A parent or authorized guardian can register minors. Anyone who is not ready will need to finish at the kiosk on arrival."
      primaryLabel="Save and close"
      onPrimaryAction={() => onSaveAndClose?.(players)}
      secondaryLabel="Add more player"
      secondaryIcon={<Plus aria-hidden="true" size={20} />}
      onSecondaryAction={onAddMorePlayer}
      onClose={onClose}
      className={className}
    >
      <RegistrationCountSummary
        registeredCount={registeredCount}
        totalCount={players.length}
        registrationLink={registrationLink}
        onShareLink={() => setView({ name: 'share' })}
      />
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          isLead={player.isLead}
          playerName={player.name}
          playerType={player.type}
          registrationStatus={player.registrationStatus}
          onAction={() => setView({ name: 'player', playerId: player.id })}
        />
      ))}
    </Modal>
  )
}
