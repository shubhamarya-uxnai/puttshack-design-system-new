import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { Share2 } from '../../../icons'
import './RegistrationCountSummary.css'

/**
 * Composition scaffold for the Figma "Registration Count Summary" component
 * (Web / Child Components / Party & Registration, node 4261:215796) — a
 * summary row showing how many players have registered plus a share-link
 * action.
 *
 * DS usage: `Button` (Figma: `Button / Size=Default, Type=Secondary`,
 * leading icon shown, label "SHARE LINK"). Note: the captured instance has
 * both `Show leading icon=true` and `Only Icon=true` set — a contradiction
 * in the source data — this scaffold renders the label visibly (matching
 * the literal "SHARE LINK" text prop) with a leading `Share2` icon rather
 * than hiding the label.
 *
 * Figma text styles: `Title/Small` (heading), `Label/Large` (count),
 * `Label/Small` / `Label/x-Small` (supporting copy).
 */
export interface RegistrationCountSummaryProps {
  /** Figma: `Title/Small` heading. @default 'Registration' */
  title?: string
  /** Number of players registered so far. */
  registeredCount: number
  /** Total party size. */
  totalCount: number
  onShareLink?: () => void
  className?: string
}

export function RegistrationCountSummary({
  title = 'Registration',
  registeredCount,
  totalCount,
  onShareLink,
  className,
}: RegistrationCountSummaryProps) {
  return (
    <div className={cx('pk-registration-count-summary', className)}>
      <div className="pk-registration-count-summary__text">
        <span className="pk-registration-count-summary__title pk-text-title-small">{title}</span>
        <span className="pk-registration-count-summary__count pk-text-label-large">
          {registeredCount} of {totalCount} registered
        </span>
      </div>
      <Button
        variant="secondary"
        leadingIcon={<Share2 aria-hidden="true" />}
        onClick={onShareLink}
      >
        SHARE LINK
      </Button>
    </div>
  )
}
