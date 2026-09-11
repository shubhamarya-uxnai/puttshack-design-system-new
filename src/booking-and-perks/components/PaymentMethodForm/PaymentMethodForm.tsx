import React from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Plus, Check, CreditCard } from '../../../icons'
import './PaymentMethodForm.css'

export type SavedCardBrand = 'visa' | 'mastercard'

export interface SavedCard {
  id: string
  brand: SavedCardBrand
  last4: string
}

export interface PaymentMethodFormProps {
  /** Figma: `Cards added#342:0` boolean — shows the saved-card list. @default true */
  cardsAdded?: boolean
  /** Figma: `New Card#4145:6` boolean — expands the "add new card" field group. @default false */
  newCard?: boolean
  /** Saved cards — brand + last 4 digits, matching the real captured rows. */
  savedCards?: SavedCard[]
  selectedCardId?: string
  onSelectCard?: (id: string) => void
  onToggleNewCard?: () => void
  onApplePay?: () => void
  onGooglePay?: () => void
  className?: string
}

const DEFAULT_CARDS: SavedCard[] = [
  { id: 'card-1', brand: 'mastercard', last4: '3745' },
  { id: 'card-2', brand: 'visa', last4: '3045' },
]

function BrandMark({ brand }: { brand: SavedCardBrand }) {
  if (brand === 'mastercard') {
    return (
      <svg viewBox="0 0 32 20" width="24" height="15" aria-hidden="true">
        <circle cx="12" cy="10" r="9" fill="var(--pk-ref-red-500, #eb001b)" />
        <circle cx="20" cy="10" r="9" fill="var(--pk-ref-orange-400, #ff671d)" fillOpacity="0.85" />
      </svg>
    )
  }
  return (
    <span className="pk-payment-method-form__visa-mark" aria-hidden="true">
      VISA
    </span>
  )
}

/**
 * Booking-and-Perks composite (Figma: "Payment Method Form/Default/October",
 * node 4145:156714, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4145-156714). "PAYMENT" heading, real
 * Apple Pay / Google Pay buttons, an "OR PAY WITH CARD" divider, a "Cards"
 * label, an "Add Debit/Credit Card" row, and saved cards with a brand mark
 * + masked number + selection indicator (filled magenta circle with a
 * check when selected, a plain outline otherwise) — replacing the earlier
 * version's plain DS `RadioButton` list and "Add new card" toggle button,
 * which didn't match this real capture.
 */
export function PaymentMethodForm({
  cardsAdded = true,
  newCard = false,
  savedCards = DEFAULT_CARDS,
  selectedCardId = 'card-1',
  onSelectCard,
  onToggleNewCard,
  onApplePay,
  onGooglePay,
  className,
}: PaymentMethodFormProps) {
  return (
    <section className={cx('pk-payment-method-form', className)}>
      <span className="pk-payment-method-form__heading pk-text-title-small-capital">Payment</span>

      <div className="pk-payment-method-form__wallets">
        <button type="button" className="pk-payment-method-form__wallet pk-payment-method-form__wallet--apple" onClick={onApplePay}>
          <svg viewBox="0 0 17 20" width="17" height="20" aria-hidden="true" fill="currentColor">
            <path d="M14.03 10.6c-.02-2.1 1.72-3.1 1.8-3.16-.98-1.44-2.51-1.63-3.05-1.65-1.3-.13-2.54.77-3.2.77-.66 0-1.68-.75-2.76-.73-1.42.02-2.73.83-3.46 2.1-1.47 2.56-.38 6.33 1.06 8.4.7 1.02 1.53 2.15 2.63 2.11 1.05-.04 1.45-.68 2.72-.68 1.27 0 1.63.68 2.75.66 1.14-.02 1.86-1.03 2.55-2.06.8-1.19 1.13-2.34 1.15-2.4-.03-.01-2.17-.83-2.19-3.36ZM11.98 3.9c.58-.7.97-1.68.86-2.65-.83.03-1.85.56-2.45 1.25-.53.61-1 1.6-.87 2.55.93.07 1.88-.47 2.46-1.15Z" />
          </svg>
          <span className="pk-text-title-medium">Pay</span>
        </button>
        <button type="button" className="pk-payment-method-form__wallet pk-payment-method-form__wallet--google" onClick={onGooglePay}>
          <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62Z" />
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18Z" />
            <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.96H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.04l3-2.33Z" />
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.96l3 2.33C4.66 5.17 6.65 3.58 9 3.58Z" />
          </svg>
          <span className="pk-text-title-medium">Pay</span>
        </button>
      </div>

      <div className="pk-payment-method-form__divider" role="separator">
        <span className="pk-text-label-medium">Or pay with card</span>
      </div>

      <div className="pk-payment-method-form__cards-section">
        <span className="pk-payment-method-form__cards-label pk-text-body-small">Cards</span>

        <button type="button" className="pk-payment-method-form__row" onClick={onToggleNewCard}>
          <span className="pk-payment-method-form__row-icon pk-payment-method-form__row-icon--white">
            <CreditCard aria-hidden="true" size={18} />
          </span>
          <span className="pk-payment-method-form__row-label pk-text-body-small">Add Debit/Credit Card</span>
          <Plus aria-hidden="true" size={24} />
        </button>

        {newCard && (
          <div className="pk-payment-method-form__new-card">
            <InputField label="Card Number" required inverse defaultValue="1234 5678 3425 4342" />
            <div className="pk-payment-method-form__new-card-row">
              <InputField label="Expiry" required inverse placeholder="MM/YY" />
              <InputField label="CVV" required inverse placeholder="..." />
            </div>
          </div>
        )}

        {cardsAdded && savedCards.length > 0 && (
          <>
            <div className="pk-payment-method-form__hr" />
            {savedCards.map((card) => {
              const selected = selectedCardId === card.id
              return (
                <button
                  type="button"
                  key={card.id}
                  className="pk-payment-method-form__row"
                  aria-pressed={selected}
                  onClick={() => onSelectCard?.(card.id)}
                >
                  <span className="pk-payment-method-form__row-icon pk-payment-method-form__row-icon--white">
                    <BrandMark brand={card.brand} />
                  </span>
                  <span className="pk-payment-method-form__row-label pk-text-body-small">**** **** **** {card.last4}</span>
                  <span
                    className={cx(
                      'pk-payment-method-form__radio',
                      selected && 'pk-payment-method-form__radio--selected'
                    )}
                  >
                    {selected && <Check aria-hidden="true" size={14} />}
                  </span>
                </button>
              )
            })}
          </>
        )}
      </div>
    </section>
  )
}
