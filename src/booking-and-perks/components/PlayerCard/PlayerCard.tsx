import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { Button } from '../../../components/Button/Button'
import { RegistrationStatusBadge } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import type { RegistrationStatus } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import './PlayerCard.css'

/**
 * Composition scaffold for the Figma "Player Card" component (Web / Child
 * Components / Party & Registration, node 4261:215484).
 *
 * DS usage:
 * - `Chip` (Figma: `Chip / Size=Small`) — used for the "Lead" marker.
 * - `RegistrationStatusBadge` (Figma instance: `Registration Status Badge /
 *   Property 1=Registered`) — this file's own sibling component.
 * - `Button` (Figma: `Button / Size=Default, Type=Tertiary, Inverse=On`,
 *   leading icon shown, label "Button") — the row's action button. No
 *   specific icon was captured for the leading-icon slot, so it's left as
 *   an optional `actionIcon` prop rather than guessed.
 *
 * Figma prop `Is Lead` (boolean) -> `isLead`. Figma text style: `Label/Small`.
 */
export interface PlayerCardProps {
  /** Figma: `Is Lead` boolean. Shows the "Lead" chip when true. @default false */
  isLead?: boolean
  playerName: string
  registrationStatus?: RegistrationStatus
  /** Label for the row's tertiary action button. @default 'Change player' */
  actionLabel?: string
  /** Optional leading icon for the action button — not captured in the Figma instance data. */
  actionIcon?: React.ReactNode
  onAction?: () => void
  className?: string
}

export function PlayerCard({
  isLead = false,
  playerName,
  registrationStatus = 'not-registered',
  actionLabel = 'Change player',
  actionIcon,
  onAction,
  className,
}: PlayerCardProps) {
  return (
    <div className={cx('pk-player-card', className)}>
      <div className="pk-player-card__info">
        <div className="pk-player-card__name-row">
          <span className="pk-player-card__name pk-text-label-small">{playerName}</span>
          {isLead && (
            <Chip variant="default" className="pk-player-card__lead-chip">
              Lead
            </Chip>
          )}
        </div>
        <RegistrationStatusBadge status={registrationStatus} />
      </div>
      <Button variant="tertiary" inverse leadingIcon={actionIcon} onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  )
}
