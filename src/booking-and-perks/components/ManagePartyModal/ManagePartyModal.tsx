import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { RegistrationCountSummary } from '../RegistrationCountSummary/RegistrationCountSummary'
import { PlayerCard } from '../PlayerCard/PlayerCard'
import { ShareLinkModal } from '../ShareLinkModal/ShareLinkModal'
import { PlayerDetailModal } from '../PlayerDetailModal/PlayerDetailModal'
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

const DEFAULT_PLAYERS: ManagePartyPlayer[] = [
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

export interface ManagePartyModalProps {
  players?: ManagePartyPlayer[]
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
 * - "Register {name}" (node 4753:118285 registered / 4281:91288 not) —
 *   opened from a `PlayerCard`'s chevron, with "Back"/close returning here.
 */
export function ManagePartyModal({
  players: initialPlayers = DEFAULT_PLAYERS,
  registrationLink = 'puttshack.com/register/PSK-P4381PB',
  onSaveAndClose,
  onAddMorePlayer,
  onClose,
  className,
}: ManagePartyModalProps) {
  const [players, setPlayers] = useState(initialPlayers)
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
          registered={player.registrationStatus === 'registered'}
          phone={player.phone}
          displayName={player.name}
          ageGroup={player.type}
          onBack={() => setView({ name: 'list' })}
          onSendRegistrationLink={({ displayName, phone }) => {
            setPlayers((prev) =>
              prev.map((p) => (p.id === player.id ? { ...p, name: displayName || p.name, phone } : p))
            )
            setView({ name: 'list' })
          }}
          onRemoveFromParty={() => {
            setPlayers((prev) => prev.filter((p) => p.id !== player.id))
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
