import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import './ExperienceCard.css'

/**
 * Composition scaffold for "Expericne Card" [sic — kept verbatim from the
 * Figma layer name] (Figma: booking-and-perks snapshot, node 5508:105557).
 *
 * A selectable experience-type tile: a yellow DS `Chip` label over a title
 * and a supporting description, on the inverse/magenta surface.
 */
export interface ExperienceCardProps {
  /** Figma variant: `isSelected` (False/True). @default false */
  selected?: boolean
  /** Figma: `Experince#5508:0` [sic] — the Chip label, e.g. "PUTTCADE". */
  experience: string
  /** Figma: `Details#5508:6` — supporting description. */
  details: string
  onSelect?: () => void
}

export function ExperienceCard({ selected = false, experience, details, onSelect }: ExperienceCardProps) {
  return (
    <button
      type="button"
      className={cx('pk-oct-experience-card', selected && 'pk-oct-experience-card--selected')}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <Chip variant="promo">{experience}</Chip>
      <span className="pk-oct-experience-card__details pk-text-title-small">{details}</span>
    </button>
  )
}
