import React from 'react'
import { Utensils } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import { SelectionCards } from '../SelectionCards/SelectionCards'
import { ExperienceSelector, ExperienceSelectorOption } from '../ExperienceSelector/ExperienceSelector'
import './ExperienceTypeSelector.css'

/**
 * Composition scaffold for "Experience Type Selector/October" (Figma:
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=5000-149789
 * — the real instance shown once a date is picked on the "Unlimited Round"
 * screen). Two real sections: "CHOOSE YOUR EXPERIENCE" (the `ExperienceSelector`
 * photo-card row) and a second heading + a column of `SelectionCards` —
 * captured here as "HOW MANY ROUNDS?" with Unlimited/2 Rounds/1 Round, but
 * both the heading and the option list are props so the same component
 * can be reused for Puttcade/Dining Only's own option lists later, rather
 * than forking a new component per experience.
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
  /** The `ExperienceSelector` options (Puttcade / Mini Golf / Dining Only by default). */
  experienceOptions?: ExperienceSelectorOption[]
  /** Selected `ExperienceSelector` option key. */
  experienceValue?: string
  onExperienceChange?: (key: string) => void
  /** Whether the pricing-tier section renders at all — the caller decides when its `options` data
   * is actually relevant (e.g. only once the matching `ExperienceSelector` option is chosen).
   * @default true */
  showOptions?: boolean
  /** Figma: "HOW MANY ROUNDS?" — the heading above the `SelectionCards` list. Pass a different
   * heading + `options` to reuse this same section for another experience's own pricing tiers. */
  optionsHeading?: string
  /** The selectable `SelectionCards`, rendered from data rather than one hardcoded card per tier. */
  options?: ExperienceTypeSelectorOption[]
  /** Selected option index within `options`. */
  selectedOptionIndex?: number
  onOptionSelect?: (index: number) => void
  /** Forwarded to each `SelectionCards`' own `onDarkBackground` — set true when this sits on a dark/branded page background. @default false */
  onDarkBackground?: boolean
  onViewMenu?: () => void
}

const DEFAULT_OPTIONS: ExperienceTypeSelectorOption[] = [
  {
    title: 'UNLIMITED',
    content: 'Keep the fun going with unlimited rounds, perfect for the full Puttshack experience and nonstop competition',
    adultPrice: '$36',
    juniorPrice: '$24',
    totalPrice: '$144',
    popular: true,
  },
  {
    title: '2 ROUNDS',
    content: 'Play two rounds and settle the score. Great for more time on the course without committing to an unlimited session.',
    adultPrice: '$28',
    juniorPrice: '$18',
    totalPrice: '$112',
  },
  {
    title: '1 ROUND',
    content: 'Enjoy one round of high-tech mini golf packed with interactive holes, automatic scoring, and plenty of moments to brag about.',
    adultPrice: '$18',
    juniorPrice: '$12',
    totalPrice: '$72',
  },
]

export function ExperienceTypeSelector({
  diningMenu = false,
  experienceOptions,
  experienceValue,
  onExperienceChange,
  showOptions = true,
  optionsHeading = 'How many rounds?',
  options = DEFAULT_OPTIONS,
  selectedOptionIndex,
  onOptionSelect,
  onDarkBackground = false,
  onViewMenu,
}: ExperienceTypeSelectorProps) {
  return (
    <div className="pk-oct-experience-selector">
      <div className="pk-oct-experience-selector__section">
        <h3 className="pk-oct-experience-selector__heading pk-text-title-medium">Choose your experience</h3>
        <ExperienceSelector options={experienceOptions} value={experienceValue} onChange={onExperienceChange} />
      </div>

      {showOptions && (
        <div className="pk-oct-experience-selector__section">
          <h3 className="pk-oct-experience-selector__heading pk-text-title-medium">{optionsHeading}</h3>
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
                selected={selectedOptionIndex === i}
                onSelect={() => onOptionSelect?.(i)}
                onDarkBackground={onDarkBackground}
              />
            ))}
          </div>
        </div>
      )}

      {diningMenu && (
        <Button variant="tertiary" leadingIcon={<Utensils aria-hidden="true" />} onClick={onViewMenu}>
          View Menu
        </Button>
      )}
    </div>
  )
}
