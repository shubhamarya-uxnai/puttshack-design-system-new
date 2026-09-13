import React from 'react'
import { Modal } from '../Modal/Modal'
import { RegistrationCountSummary } from '../RegistrationCountSummary/RegistrationCountSummary'
import { PlayerCard } from '../PlayerCard/PlayerCard'
import type { RegistrationStatus } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import { Plus } from '../../../icons'

export interface ManagePartyPlayer {
  id: string
  name: string
  type: string
  isLead?: boolean
  registrationStatus?: RegistrationStatus
}

const DEFAULT_PLAYERS: ManagePartyPlayer[] = [
  { id: 'p1', name: 'Alex Parry', type: 'Adult (21+)', isLead: true, registrationStatus: 'registered' },
  { id: 'p2', name: 'Player 2', type: 'Adult (21+)', registrationStatus: 'not-registered' },
  { id: 'p3', name: 'Player 3', type: 'Young adult (13-20)', registrationStatus: 'not-registered' },
  { id: 'p4', name: 'Player 4', type: 'Junior (0-12)', registrationStatus: 'not-registered' },
]

export interface ManagePartyModalProps {
  players?: ManagePartyPlayer[]
  registrationLink?: string
  onShareLink?: () => void
  onPlayerAction?: (playerId: string) => void
  onSaveAndClose?: () => void
  onAddMorePlayer?: () => void
  onClose?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "OVERLAY" wrapping the "Manage Your
 * Party" Modal, node 4281:90882, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4281-90882). Opened by the Confirmation
 * screen's "Manage party" secondary-inverse Button. Built from the real
 * generic `Modal` (title/subtitle + button group), `RegistrationCountSummary`
 * (progress bar + share-link row), and a `PlayerCard` per party member —
 * all real booking-and-perks components, fixed against this exact capture
 * before being wired together here rather than guessed.
 */
export function ManagePartyModal({
  players = DEFAULT_PLAYERS,
  registrationLink = 'puttshack.com/register/PSK-P4381PB',
  onShareLink,
  onPlayerAction,
  onSaveAndClose,
  onAddMorePlayer,
  onClose,
  className,
}: ManagePartyModalProps) {
  const registeredCount = players.filter((p) => p.registrationStatus === 'registered').length

  return (
    <Modal
      title="Manage your party"
      subtitle="Get everyone ready before arrival. Each participating adult must complete their own registration and accept the terms using a secure link. A parent or authorized guardian can register minors. Anyone who is not ready will need to finish at the kiosk on arrival."
      primaryLabel="Save and close"
      onPrimaryAction={onSaveAndClose}
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
        onShareLink={onShareLink}
      />
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          isLead={player.isLead}
          playerName={player.name}
          playerType={player.type}
          registrationStatus={player.registrationStatus}
          onAction={() => onPlayerAction?.(player.id)}
        />
      ))}
    </Modal>
  )
}
