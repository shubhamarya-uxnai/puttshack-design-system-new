import React from 'react'
import { cx } from '../../../lib/cx'
import { MoveRight } from '../../../icons'
import './PlayerChange.css'

/**
 * Composition scaffold for the Figma "Player Change" component set (Web /
 * Child Components / Party & Registration, node 4199:163181) — a compact
 * "swap" row shown when a player is removed from or added to a booking.
 *
 * Figma variant property `Property 1`: Removed / Added -> `variant` prop.
 * Both variants instance the Lucide `move-right` icon (imported as
 * `MoveRight`) twice per the capture — used here once as the row's
 * direction glyph plus once inline before the resulting name, matching the
 * "from -> to" shape implied by two icon instances.
 *
 * Figma text styles: `Title/Large` (player name), `Title/Small` /
 * `Label/Medium` / `Label/Small` (supporting labels) — surface sits on
 * `Surface/Inverse` (dark) per the captured tokens.
 */
export type PlayerChangeVariant = 'removed' | 'added'

export interface PlayerChangeProps {
  /** Figma: `Property 1`. @default 'added' */
  variant?: PlayerChangeVariant
  /** The player's display name. */
  playerName: string
  /** Optional supporting copy, e.g. "Swapped in for Jordan". */
  detail?: string
  className?: string
}

export function PlayerChange({ variant = 'added', playerName, detail, className }: PlayerChangeProps) {
  return (
    <div className={cx('pk-player-change', `pk-player-change--${variant}`, className)}>
      <span className="pk-player-change__icon" aria-hidden="true">
        <MoveRight />
      </span>
      <div className="pk-player-change__text">
        <span className="pk-player-change__status pk-text-label-small">
          {variant === 'added' ? 'Added' : 'Removed'}
        </span>
        <span className="pk-player-change__name pk-text-title-large">{playerName}</span>
        {detail && <span className="pk-player-change__detail pk-text-label-medium">{detail}</span>}
      </div>
    </div>
  )
}
