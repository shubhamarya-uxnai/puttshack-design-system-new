import React from 'react'
import { Check } from '../../../icons'
import puttcadeImg from './assets/puttcade.png'
import miniGolfImg from './assets/mini-golf.png'
import diningImg from './assets/dining.png'
import './ExperienceSelector.css'

export interface ExperienceSelectorOption {
  key: string
  title: string
  description: string
  /** Figma: the "Chip" badge in the photo's top-left corner, e.g. "Private", "Interactive". */
  chip: string
  image: string
}

export interface ExperienceSelectorProps {
  options?: ExperienceSelectorOption[]
  /** Selected option's `key`. */
  value?: string | null
  onChange?: (key: string) => void
  className?: string
}

const DEFAULT_OPTIONS: ExperienceSelectorOption[] = [
  {
    key: 'puttcade',
    title: 'PUTTCADE',
    description:
      'Bring your group together for private interactive games, full-service dining, and a dedicated server. Play, eat, and compete.',
    chip: 'Private',
    image: puttcadeImg,
  },
  {
    key: 'mini-golf',
    title: 'INTERACTIVE MINI GOLF',
    description:
      'Tech-tracked putting on our interactive courses with automatic scoring and friendly competition.',
    chip: 'Interactive',
    image: miniGolfImg,
  },
  {
    key: 'dining',
    title: 'DINING ONLY',
    description: 'Skip the game and just come hang — full kitchen & bar menu, no booking fee, no commitment.',
    chip: 'No Booking Fees',
    image: diningImg,
  },
]

/**
 * Booking-and-Perks composite (Figma: "Experience selector", node
 * 4904:143453 — 3 real captures: Property 1 = PUTTCADE / INTERACTIVE MINI
 * GOLF / DINING ONLY). A horizontally-scrolling row of photo cards; the
 * selected card gets the same 3-layer magenta inset-shadow ring
 * ("Web/Border/Selected") used by Date Picker Card, a check badge, and its
 * text panel swaps from white/dark-text to the dark card fill
 * (--pk-sys-bg-card) with white text — the unselected panel's literal
 * Figma fallback ("white text on white") doesn't match the real render,
 * same stale-fallback pattern seen elsewhere on this screen.
 */
export function ExperienceSelector({
  options = DEFAULT_OPTIONS,
  value,
  onChange,
  className,
}: ExperienceSelectorProps) {
  return (
    <div className={`pk-experience-selector${className ? ` ${className}` : ''}`}>
      {options.map((option) => {
        const selected = option.key === value
        return (
          <button
            type="button"
            key={option.key}
            className={`pk-experience-selector__card${
              selected ? ' pk-experience-selector__card--selected' : ''
            }`}
            aria-pressed={selected}
            onClick={() => onChange?.(option.key)}
          >
            <div className="pk-experience-selector__photo">
              <img src={option.image} alt="" />
              <span className="pk-experience-selector__chip">{option.chip}</span>
              {selected && (
                <span className="pk-experience-selector__check" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
              )}
            </div>
            <div className="pk-experience-selector__body">
              <h4 className="pk-experience-selector__title pk-text-title-small">{option.title}</h4>
              <p className="pk-experience-selector__description pk-text-label-small">{option.description}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
