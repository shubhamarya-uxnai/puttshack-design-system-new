import React from 'react'
import { cx } from '../../../lib/cx'
import { Share2 } from '../../../icons'
import './RegistrationCountSummary.css'

/**
 * Booking-and-Perks composite (Figma: "Registration Count Summary", real
 * capture inside the "Manage Your Party" modal, node 4281:90882). A light
 * gray card: "{n} OF {total} PLAYERS REGISTERED" + a helper line + a "{pct}%"
 * pill, a progress bar, and a registration-link row (the link text truncated
 * on the left, a dark "SHARE LINK" pill on the right).
 *
 * Corrected against that real instance — the earlier scaffold guessed a
 * magenta-filled card with one plain "SHARE LINK" `Button`; the real card is
 * a pale gray panel (Surface/Inverse's literal near-transparent-white
 * fallback would stay invisible on this white modal — the real render is a
 * light gray wash) with a visible progress bar and the share row built as
 * its own bordered pill, not a full DS `Button`.
 */
export interface RegistrationCountSummaryProps {
  registeredCount: number
  totalCount: number
  registrationLink: string
  onShareLink?: () => void
  className?: string
}

export function RegistrationCountSummary({
  registeredCount,
  totalCount,
  registrationLink,
  onShareLink,
  className,
}: RegistrationCountSummaryProps) {
  const percent = totalCount > 0 ? Math.round((registeredCount / totalCount) * 100) : 0

  return (
    <div className={cx('pk-registration-count-summary', className)}>
      <div className="pk-registration-count-summary__header">
        <div className="pk-registration-count-summary__text">
          <span className="pk-registration-count-summary__title pk-text-title-small">
            {registeredCount} of {totalCount} players registered
          </span>
          <span className="pk-registration-count-summary__note pk-text-label-small">
            Once everyone has completed registration and accepted the terms, your party can skip the line at
            check-in and go straight to the course.
          </span>
        </div>
        <span className="pk-registration-count-summary__percent pk-text-label-x-small">{percent}%</span>
      </div>

      <div className="pk-registration-count-summary__progress-track">
        <div className="pk-registration-count-summary__progress-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="pk-registration-count-summary__link-row">
        <span className="pk-registration-count-summary__link pk-text-label-medium">{registrationLink}</span>
        <button type="button" className="pk-registration-count-summary__share" onClick={onShareLink}>
          <Share2 aria-hidden="true" size={16} />
          Share link
        </button>
      </div>
    </div>
  )
}
