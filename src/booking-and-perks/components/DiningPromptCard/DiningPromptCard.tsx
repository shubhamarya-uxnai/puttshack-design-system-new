import React from 'react'
import { Utensils } from '../../../icons'
import { Button } from '../../../components/Button/Button'
import './DiningPromptCard.css'

export interface DiningPromptCardProps {
  /** @default 'Just here to eat?' */
  title?: string
  /** @default 'We got you. No booking fee- show up hungry, leave happy.' */
  description?: string
  /** @default 'View Menu' */
  buttonLabel?: string
  onViewMenu?: () => void
  className?: string
}

/**
 * Standalone dark-card prompt shown when "Dining Only" is the chosen
 * Experience — a `Utensils` icon, heading + description, and a "VIEW MENU"
 * `Button` (tertiary, inverse). A distinct real card in its own right, not
 * a variant of `ExperienceTypeSelector` or `SelectionCards` — it never
 * shows a `SelectionCards` pricing-tier list of its own.
 */
export function DiningPromptCard({
  title = 'Just here to eat?',
  description = 'We got you. No booking fee- show up hungry, leave happy.',
  buttonLabel = 'View Menu',
  onViewMenu,
  className,
}: DiningPromptCardProps) {
  return (
    <div className={`pk-dining-prompt-card${className ? ` ${className}` : ''}`}>
      <div className="pk-dining-prompt-card__heading">
        <Utensils aria-hidden="true" className="pk-dining-prompt-card__icon" />
        <div className="pk-dining-prompt-card__text">
          <h3 className="pk-dining-prompt-card__title pk-text-title-medium">{title}</h3>
          <p className="pk-dining-prompt-card__description pk-text-body-medium">{description}</p>
        </div>
      </div>
      <Button variant="tertiary" inverse onClick={onViewMenu} className="pk-dining-prompt-card__button">
        {buttonLabel}
      </Button>
    </div>
  )
}
