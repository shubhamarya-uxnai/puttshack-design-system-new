import React from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Button } from '../../../components/Button/Button'
import './PromoCodeInput.css'

/** Figma variant property `Property 1`. `Property 2` ("October") is a constant release tag, not modeled. */
export type PromoCodeInputState = 'default' | 'applied'

/** Figma variant property `Property 3`. */
export type PromoCodeInputMode = 'desktop' | 'mobile'

export interface PromoCodeInputProps {
  /** Figma: `Property 1`. @default 'default' */
  state?: PromoCodeInputState
  /** Figma: `Property 3`. @default 'mobile' */
  mode?: PromoCodeInputMode
  promoValue?: string
  giftCardValue?: string
  onApplyPromo?: () => void
  onApplyGiftCard?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Promo Code Input"). Two DS
 * `InputField` + DS `Button` (tertiary, onlyIcon "Apply") pairs — one for a
 * promo code, one for a gift card number — matching the captured instances.
 */
export function PromoCodeInput({
  state = 'default',
  mode = 'mobile',
  promoValue = 'Promo code',
  giftCardValue = 'Gift card number',
  onApplyPromo,
  onApplyGiftCard,
  className,
}: PromoCodeInputProps) {
  const applied = state === 'applied'

  return (
    <div className={cx('pk-promo-code-input', `pk-promo-code-input--${mode}`, className)}>
      <div className="pk-promo-code-input__row">
        <InputField
          label="Promo code"
          required
          defaultValue={promoValue}
          state={applied ? 'disabled' : 'default'}
        />
        <Button variant="tertiary" onlyIcon onClick={onApplyPromo} disabled={applied}>
          Apply
        </Button>
      </div>

      <div className="pk-promo-code-input__row">
        <InputField label="Gift card" required defaultValue={giftCardValue} />
        <Button variant="tertiary" onlyIcon onClick={onApplyGiftCard}>
          Apply
        </Button>
      </div>
    </div>
  )
}
