import React from 'react'
import { SelectionCards } from '../SelectionCards/SelectionCards'
import { ExperienceSelector, ExperienceSelectorOption } from '../ExperienceSelector/ExperienceSelector'
import { DiningPromptCard } from '../DiningPromptCard/DiningPromptCard'
import './ExperienceTypeSelector.css'

/**
 * Composition scaffold for "Experience Type Selector/October" (Figma:
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=5000-149789
 * — the real instance shown once a date is picked on the "Unlimited Round"
 * screen). Two real sections: "CHOOSE YOUR EXPERIENCE" (the `ExperienceSelector`
 * photo-card row) and a second heading + one or more `SelectionCards`
 * groups — Interactive Mini Golf's own capture is a single group ("HOW
 * MANY ROUNDS?": Unlimited/2 Rounds/1 Round), but the same real
 * `SelectionCards` also reappears for Puttcade's "CHOOSE YOUR SETUP" as
 * TWO groups under one heading (bay count, then duration, separated by a
 * divider) — so `optionGroups` is a list rather than one hardcoded set,
 * and every string on it (including the badge chip's text — "Popular" on
 * rounds, "Reccomended" [sic, verbatim from Figma's own text layer] on
 * setup) is data, not something forked into a new component per screen.
 */
export interface ExperienceTypeSelectorOption {
  title: string
  content?: string
  adultPrice?: string
  juniorPrice?: string
  totalPrice?: string
  /** Yellow `Chip` text, e.g. "Popular" or "Reccomended" — omit for no badge. */
  badge?: string
}

export interface ExperienceTypeSelectorOptionGroup {
  /** Radio-group name — must be unique per group so each group selects independently. */
  name: string
  options: ExperienceTypeSelectorOption[]
  selectedIndex?: number
  onSelect?: (index: number) => void
}

export interface ExperienceTypeSelectorProps {
  /** The `ExperienceSelector` options (Puttcade / Mini Golf / Dining Only by default). */
  experienceOptions?: ExperienceSelectorOption[]
  /** Selected `ExperienceSelector` option key. */
  experienceValue?: string
  onExperienceChange?: (key: string) => void
  /** Whether the pricing-tier section renders at all — the caller decides when its `optionGroups`
   * data is actually relevant (e.g. only once the matching `ExperienceSelector` option is chosen).
   * @default true */
  showOptions?: boolean
  /** Figma: "HOW MANY ROUNDS?" / "CHOOSE YOUR SETUP" — the heading above the `SelectionCards`
   * group(s). Pass a different heading + `optionGroups` to reuse this section for another
   * experience's own pricing tiers. */
  optionsHeading?: string
  /** One or more `SelectionCards` groups rendered under `optionsHeading`, each selecting
   * independently — e.g. a single "rounds" group, or "bays" + "duration" side by side. */
  optionGroups?: ExperienceTypeSelectorOptionGroup[]
  /** Forwarded to each `SelectionCards`' own `onDarkBackground` — set true when this sits on a dark/branded page background. @default false */
  onDarkBackground?: boolean
  /** Shows the standalone `DiningPromptCard` below this section — the caller decides when it's
   * relevant (e.g. once "Dining Only" is the chosen `ExperienceSelector` option), the same pattern
   * as `showOptions`. @default false */
  showDiningPrompt?: boolean
  onViewMenu?: () => void
}

/** Real "HOW MANY ROUNDS?" data for Interactive Mini Golf — exported so a consumer can supply its
 * own `selectedIndex`/`onSelect` while reusing the real option content. */
export const MINI_GOLF_ROUND_OPTION_GROUPS: Omit<ExperienceTypeSelectorOptionGroup, 'selectedIndex' | 'onSelect'>[] = [
  {
    name: 'rounds',
    options: [
      {
        title: 'UNLIMITED',
        content:
          'Keep the fun going with unlimited rounds, perfect for the full Puttshack experience and nonstop competition',
        adultPrice: '$36',
        juniorPrice: '$24',
        totalPrice: '$144',
        badge: 'Popular',
      },
      {
        title: '2 ROUNDS',
        content:
          'Play two rounds and settle the score. Great for more time on the course without committing to an unlimited session.',
        adultPrice: '$28',
        juniorPrice: '$18',
        totalPrice: '$112',
      },
      {
        title: '1 ROUND',
        content:
          'Enjoy one round of high-tech mini golf packed with interactive holes, automatic scoring, and plenty of moments to brag about.',
        adultPrice: '$18',
        juniorPrice: '$12',
        totalPrice: '$72',
      },
    ],
  },
]

/** Real "CHOOSE YOUR SETUP" data for Puttcade — the same `SelectionCards` reused as two
 * independently-selecting groups (bay count, then duration) rather than a one-off layout. */
export const PUTTCADE_SETUP_OPTION_GROUPS: Omit<ExperienceTypeSelectorOptionGroup, 'selectedIndex' | 'onSelect'>[] = [
  {
    name: 'bays',
    options: [
      { title: '1 BAY', content: 'Cozier — one room, one vibe', badge: 'Reccomended' },
      { title: '2 BAYS', content: 'More room to spread out & rotate', badge: 'Reccomended' },
    ],
  },
  {
    name: 'duration',
    options: [
      { title: '90 MINUTES', content: 'More time, more games, more memories.', totalPrice: '$250' },
      {
        title: '60 MINUTES',
        content: 'The perfect amount of time for serious fun.',
        totalPrice: '$150',
        badge: 'Reccomended',
      },
    ],
  },
]

export function ExperienceTypeSelector({
  experienceOptions,
  experienceValue,
  onExperienceChange,
  showOptions = true,
  optionsHeading = 'How many rounds?',
  optionGroups = MINI_GOLF_ROUND_OPTION_GROUPS,
  onDarkBackground = false,
  showDiningPrompt = false,
  onViewMenu,
}: ExperienceTypeSelectorProps) {
  return (
    <>
      <div className="pk-oct-experience-selector">
        <div className="pk-oct-experience-selector__section">
          <h3 className="pk-oct-experience-selector__heading pk-text-title-medium">Choose your experience</h3>
          <ExperienceSelector options={experienceOptions} value={experienceValue} onChange={onExperienceChange} />
        </div>

        {showOptions && (
          <div className="pk-oct-experience-selector__section">
            <h3 className="pk-oct-experience-selector__heading pk-text-title-medium">{optionsHeading}</h3>
            {optionGroups.map((group, g) => (
              <React.Fragment key={group.name}>
                {g > 0 && <div className="pk-oct-experience-selector__group-divider" />}
                <div className="pk-oct-experience-selector__cards">
                  {group.options.map((opt, i) => (
                    <SelectionCards
                      key={opt.title}
                      name={group.name}
                      title={opt.title}
                      content={opt.content}
                      showDetails={Boolean(opt.content)}
                      badge={opt.badge}
                      showPriceBreakdown={Boolean(opt.adultPrice || opt.juniorPrice)}
                      adultPrice={opt.adultPrice}
                      juniorPrice={opt.juniorPrice}
                      showTotalPrice={Boolean(opt.totalPrice)}
                      totalPrice={opt.totalPrice}
                      selected={group.selectedIndex === i}
                      onSelect={() => group.onSelect?.(i)}
                      onDarkBackground={onDarkBackground}
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {showDiningPrompt && <DiningPromptCard onViewMenu={onViewMenu} />}
    </>
  )
}
