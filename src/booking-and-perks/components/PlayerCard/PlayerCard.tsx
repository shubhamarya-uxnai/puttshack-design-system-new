import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { Button } from '../../../components/Button/Button'
import { RegistrationStatusBadge } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import type { RegistrationStatus } from '../RegistrationStatusBadge/RegistrationStatusBadge'
import { Lock, ChevronRight } from '../../../icons'
import './PlayerCard.css'

/**
 * Booking-and-Perks composite (Figma: "Player Card", real capture inside the
 * "Manage Your Party" modal, node 4281:90882). Corrected against that real
 * instance: the row is a rectangular card (not a full pill), bordered in a
 * subtle dark line (the codegen's literal `border/inverse,rgba(255,255,255,.24)`
 * was stale — on this modal's real white card a white-based translucent
 * border is invisible; the visible line in the render is dark), and the
 * trailing action is a plain 48px circular icon-only button (a chevron, no
 * label) rather than a labeled "Change player" pill. The lead player also
 * shows a small lock glyph next to their name (real capture's own icon
 * wasn't legible/vector data, `Lock` from Lucide is the closest real match
 * for "can't be changed").
 */
export interface PlayerCardProps {
  /** Figma: `Is Lead` boolean — shows the lock glyph + "Lead" chip, and disables the row's own action. @default false */
  isLead?: boolean
  playerName: string
  /** Figma: e.g. "Adult (21+)", "Young adult (13-20)", "Junior (0-12)". */
  playerType: string
  registrationStatus?: RegistrationStatus
  onAction?: () => void
  className?: string
}

export function PlayerCard({
  isLead = false,
  playerName,
  playerType,
  registrationStatus = 'not-registered',
  onAction,
  className,
}: PlayerCardProps) {
  return (
    <div className={cx('pk-player-card', className)}>
      <div className="pk-player-card__info">
        <div className="pk-player-card__name-row">
          <span className="pk-player-card__name pk-text-title-medium">{playerName}</span>
          {isLead && <Lock aria-hidden="true" size={12} className="pk-player-card__lock" />}
          {isLead && (
            <Chip variant="default" className="pk-player-card__lead-chip">
              Lead
            </Chip>
          )}
        </div>
        <span className="pk-player-card__type pk-text-label-small">{playerType}</span>
      </div>
      <RegistrationStatusBadge status={registrationStatus} />
      <Button
        variant="tertiary"
        onlyIcon
        leadingIcon={<ChevronRight aria-hidden="true" size={20} />}
        className="pk-player-card__action"
        onClick={onAction}
      >
        {`View ${playerName}`}
      </Button>
    </div>
  )
}
