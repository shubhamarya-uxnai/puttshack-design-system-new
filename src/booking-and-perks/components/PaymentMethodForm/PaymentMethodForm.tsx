import React from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { RadioButton } from '../../../components/RadioButton/RadioButton'
import { Plus } from '../../../icons'
import './PaymentMethodForm.css'

export interface SavedCard {
  id: string
  label: string
}

export interface PaymentMethodFormProps {
  /** Figma: `Cards added#342:0` boolean — shows the saved-card radio list. @default true */
  cardsAdded?: boolean
  /** Figma: `New Card#4145:6` boolean — expands the "add new card" field group. @default false */
  newCard?: boolean
  /** Saved cards to list as radio options — not captured in the snapshot's text data, so a representative default is used. */
  savedCards?: SavedCard[]
  selectedCardId?: string
  onSelectCard?: (id: string) => void
  onToggleNewCard?: () => void
  className?: string
}

const DEFAULT_CARDS: SavedCard[] = [
  { id: 'card-1', label: 'Visa •••• 4242' },
  { id: 'card-2', label: 'Mastercard •••• 8831' },
]

/**
 * Booking-and-Perks composite (Figma: "Payment Method Form/Default/October").
 * Composes DS `InputField` (card number/expiry/CVV) and DS `RadioButton`
 * (saved-card selection) per the captured instance list. The captured
 * "Divider / Label=Yes" instance has no reusable DS Divider in this
 * codebase, so a plain labeled `<hr>` rule is used locally instead of
 * guessing at a shared component.
 */
export function PaymentMethodForm({
  cardsAdded = true,
  newCard = false,
  savedCards = DEFAULT_CARDS,
  selectedCardId,
  onSelectCard,
  onToggleNewCard,
  className,
}: PaymentMethodFormProps) {
  return (
    <section className={cx('pk-payment-method-form', className)}>
      <span className="pk-payment-method-form__heading pk-text-title-small-capital">Payment Method</span>

      {cardsAdded && (
        <div className="pk-payment-method-form__saved-cards">
          {savedCards.map((card) => (
            <RadioButton
              key={card.id}
              name="pk-payment-method-form-card"
              label={card.label}
              checked={selectedCardId === card.id}
              onChange={() => onSelectCard?.(card.id)}
            />
          ))}
        </div>
      )}

      <div className="pk-payment-method-form__divider" role="separator">
        <span className="pk-text-body-small">Or add a new card</span>
      </div>

      <button type="button" className="pk-payment-method-form__add-toggle" onClick={onToggleNewCard}>
        <Plus aria-hidden="true" />
        <span className="pk-text-title-small-capital">Add new card</span>
      </button>

      {newCard && (
        <div className="pk-payment-method-form__new-card">
          <InputField label="Card Number" required defaultValue="1234 5678 3425 4342" />
          <div className="pk-payment-method-form__row">
            <InputField label="Expiry" required placeholder="MM/YY" />
            <InputField label="CVV" required placeholder="..." />
          </div>
        </div>
      )}
    </section>
  )
}
