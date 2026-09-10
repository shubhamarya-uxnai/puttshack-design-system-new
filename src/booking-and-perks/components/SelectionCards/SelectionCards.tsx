import React from 'react'
import { cx } from '../../../lib/cx'
import { RadioButton } from '../../../components/RadioButton/RadioButton'
import { Chip } from '../../../components/Chip/Chip'
import './SelectionCards.css'

/**
 * Composition scaffold for "Selection Cards" (Figma: booking-and-perks
 * snapshot, loc "Web / Cards", node 4435:179395).
 *
 * A radio-selectable pricing/option card: DS `RadioButton` (tooltip on,
 * label off — the card itself carries the label), an optional "Popular"
 * `Chip` (yellow), a title/content pair, and an optional per-person price
 * breakdown with a total.
 */
export interface SelectionCardsProps {
  /** Figma variant: `Selection` (False/True) — renders the selected/highlighted treatment. @default false */
  selected?: boolean
  /** Figma variant: `Background` (False/True) — True renders on a dark/branded surface. @default false */
  onDarkBackground?: boolean
  /** Figma: `Title#4435:8`. */
  title: string
  /** Figma: `Content#4435:9` — supporting description line. */
  content?: string
  /** Figma: `Details#4605:0` boolean — shows `content`. @default true */
  showDetails?: boolean
  /** Figma: `Popularity#4435:13` boolean — shows the "Popular" Chip. @default false */
  popular?: boolean
  /** Figma: `Check#4435:14` boolean — shows the radio control. @default true */
  showCheck?: boolean
  /** Figma: `Price breakdown#4605:4` boolean — shows the adult/junior per-person lines. @default false */
  showPriceBreakdown?: boolean
  /** Figma: `Adult price#4435:10`. */
  adultPrice?: string
  /** Figma: `Junior Price#4435:11`. */
  juniorPrice?: string
  /** Figma: `Total price#4605:8` boolean — shows `totalPrice`. @default false */
  showTotalPrice?: boolean
  /** Figma: `Total Price#4435:12`. */
  totalPrice?: string
  name?: string
  onSelect?: () => void
}

export function SelectionCards({
  selected = false,
  onDarkBackground = false,
  title,
  content,
  showDetails = true,
  popular = false,
  showCheck = true,
  showPriceBreakdown = false,
  adultPrice,
  juniorPrice,
  showTotalPrice = false,
  totalPrice,
  name = 'selection-cards',
  onSelect,
}: SelectionCardsProps) {
  return (
    <label
      className={cx(
        'pk-oct-selection-card',
        selected && 'pk-oct-selection-card--selected',
        onDarkBackground && 'pk-oct-selection-card--dark'
      )}
    >
      <div className="pk-oct-selection-card__top">
        {showCheck && (
          <RadioButton
            name={name}
            checked={selected}
            onChange={onSelect}
            tooltipIcon
            tick
            className="pk-oct-selection-card__radio"
          />
        )}
        <div className="pk-oct-selection-card__heading">
          <div className="pk-oct-selection-card__title-row">
            <span className="pk-oct-selection-card__title pk-text-title-medium">{title}</span>
            {popular && <Chip variant="promo">Popular</Chip>}
          </div>
          {showDetails && content && (
            <span className="pk-oct-selection-card__content pk-text-label-medium">{content}</span>
          )}
        </div>
      </div>

      {(showPriceBreakdown || showTotalPrice) && (
        <div className="pk-oct-selection-card__prices">
          {showPriceBreakdown && (
            <div className="pk-oct-selection-card__price-lines">
              {adultPrice && (
                <span className="pk-text-label-small">
                  Adult <strong className="pk-text-title-small">{adultPrice}</strong>
                </span>
              )}
              {juniorPrice && (
                <span className="pk-text-label-small">
                  Junior <strong className="pk-text-title-small">{juniorPrice}</strong>
                </span>
              )}
            </div>
          )}
          {showTotalPrice && totalPrice && (
            <span className="pk-oct-selection-card__total pk-text-title-large">{totalPrice}</span>
          )}
        </div>
      )}
    </label>
  )
}
