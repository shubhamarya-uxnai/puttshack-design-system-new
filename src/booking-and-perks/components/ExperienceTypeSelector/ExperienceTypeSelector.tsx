import React, { useState } from 'react'
import { Utensils } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { SelectionCards } from '../SelectionCards/SelectionCards'
import './ExperienceTypeSelector.css'

/**
 * Composition scaffold for "Experience Type Selector/October" (Figma:
 * booking-and-perks snapshot, loc "Web / Cards", node 4083:113410).
 *
 * Wraps a stack of the real `SelectionCards` scaffold (captured example
 * shows a bay-count picker, e.g. "1 Bay" / "2 Bays") plus a "View Menu"
 * DS `Button` when the `diningMenu` toggle is on. The Figma "Experience
 * selector" instance (the segmented Mini Golf / Puttcade / Dining tab
 * control above the cards) is not one of the 45 October Release
 * components and has no capture data, so it's a placeholder.
 */
export interface ExperienceTypeSelectorOption {
  title: string
  content?: string
  adultPrice?: string
  juniorPrice?: string
  totalPrice?: string
  popular?: boolean
}

export interface ExperienceTypeSelectorProps {
  /** Figma: `Dining menu#940:1` boolean — shows the "View Menu" button. @default false */
  diningMenu?: boolean
  /** Figma: `Mini Golf#139:18` boolean. @default false */
  miniGolf?: boolean
  /** Figma: `Puttcade#139:19` boolean. @default false */
  puttcade?: boolean
  /** The selectable options rendered as `SelectionCards`. */
  options?: ExperienceTypeSelectorOption[]
  /** Forwarded to each `SelectionCards`' own `onDarkBackground` — set true when this sits on a dark/branded page background. @default false */
  onDarkBackground?: boolean
  onViewMenu?: () => void
}

const DEFAULT_OPTIONS: ExperienceTypeSelectorOption[] = [
  { title: '1 Bay', content: 'Cozier — one room, one vibe', adultPrice: '$36', juniorPrice: '$24' },
  {
    title: '2 Bays',
    content: 'More room to spread out & rotate',
    adultPrice: '$28',
    juniorPrice: '$18',
    popular: true,
  },
]

export function ExperienceTypeSelector({
  diningMenu = false,
  miniGolf = false,
  puttcade = false,
  options = DEFAULT_OPTIONS,
  onDarkBackground = false,
  onViewMenu,
}: ExperienceTypeSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="pk-oct-experience-selector">
      {/* TODO: replace with <ExperienceSelector> from booking-and-perks/components once built —
          "Experience selector" is not one of the 45 October Release components and has no capture data. */}
      <div className="pk-placeholder">Experience selector ({miniGolf ? 'Mini Golf' : puttcade ? 'Puttcade' : 'Dining'})</div>

      <div className="pk-oct-experience-selector__cards">
        {options.map((opt, i) => (
          <SelectionCards
            key={opt.title}
            name="experience-type-selector"
            title={opt.title}
            content={opt.content}
            showDetails
            popular={opt.popular}
            showPriceBreakdown
            adultPrice={opt.adultPrice}
            juniorPrice={opt.juniorPrice}
            showTotalPrice={Boolean(opt.totalPrice)}
            totalPrice={opt.totalPrice}
            selected={selectedIndex === i}
            onSelect={() => setSelectedIndex(i)}
            onDarkBackground={onDarkBackground}
          />
        ))}
      </div>

      {diningMenu && (
        <Button variant="tertiary" leadingIcon={<Utensils aria-hidden="true" />} onClick={onViewMenu}>
          View Menu
        </Button>
      )}
    </section>
  )
}
