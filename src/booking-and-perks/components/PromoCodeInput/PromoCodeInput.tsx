import React, { useState } from 'react'
import { cx } from '../../../lib/cx'
import { InputField } from '../../../components/InputField/InputField'
import { Button } from '../../../components/Button/Button'
import { Ticket, WalletCards, X } from '../../../icons'
import './PromoCodeInput.css'

/** Figma variant property `Property 1`. `Property 2` ("October") is a constant release tag, not modeled. */
export type PromoCodeInputState = 'default' | 'applied'

/** Figma variant property `Property 3`. */
export type PromoCodeInputMode = 'desktop' | 'mobile'

export interface PromoCodeInputProps {
  promoValue?: string
  giftCardValue?: string
  /** Figma: the applied promo chip's yellow-badge text, e.g. "10% off". */
  promoBadge?: string
  /** Figma: the applied gift card chip's badge text, e.g. "$100 balance applied". */
  giftCardBadge?: string
  /** Figma: `Property 3`. @default 'mobile' */
  mode?: PromoCodeInputMode
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Promo Code Input", node
 * 4435:179394, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4435-179394 — `Property 1=Applied`
 * captures). Each field is its own real interaction: typing a code and
 * pressing "Apply" swaps the input for the real "Applied" chip (a magenta
 * icon badge + the code + a colored discount/balance badge + a close
 * button), matching the captured Applied state instead of just disabling
 * the input in place.
 */
export function PromoCodeInput({
  promoValue = 'PUTT10',
  giftCardValue = 'card ***8112',
  promoBadge = '10% off',
  giftCardBadge = '$100 balance applied',
  mode = 'mobile',
  className,
}: PromoCodeInputProps) {
  const [promoInput, setPromoInput] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [giftCardInput, setGiftCardInput] = useState('')
  const [giftCardApplied, setGiftCardApplied] = useState(false)

  return (
    <div className={cx('pk-promo-code-input', `pk-promo-code-input--${mode}`, className)}>
      <h3 className="pk-promo-code-input__heading pk-text-title-small-capital">Promo &amp; gift cards</h3>

      {promoApplied ? (
        <AppliedChip
          label="Promo code"
          icon={<Ticket aria-hidden="true" size={16} />}
          value={promoValue}
          badge={promoBadge}
          onClear={() => setPromoApplied(false)}
        />
      ) : (
        <div className="pk-promo-code-input__row">
          <InputField
            label="Promo code"
            required
            inverse
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
          />
          <Button variant="tertiary" inverse disabled={!promoInput} onClick={() => setPromoApplied(true)}>
            Apply
          </Button>
        </div>
      )}

      {giftCardApplied ? (
        <AppliedChip
          label="Gift card"
          icon={<WalletCards aria-hidden="true" size={16} />}
          value={giftCardValue}
          badge={giftCardBadge}
          onClear={() => setGiftCardApplied(false)}
        />
      ) : (
        <div className="pk-promo-code-input__row">
          <InputField
            label="Gift card"
            required
            inverse
            value={giftCardInput}
            onChange={(e) => setGiftCardInput(e.target.value)}
          />
          <Button variant="tertiary" inverse disabled={!giftCardInput} onClick={() => setGiftCardApplied(true)}>
            Apply
          </Button>
        </div>
      )}
    </div>
  )
}

function AppliedChip({
  label,
  icon,
  value,
  badge,
  onClear,
}: {
  label: string
  icon: React.ReactNode
  value: string
  badge: string
  onClear: () => void
}) {
  return (
    <div className="pk-promo-code-input__field">
      <span className="pk-promo-code-input__field-label pk-text-label-medium">{label}</span>
      <div className="pk-promo-code-input__applied">
        <div className="pk-promo-code-input__applied-content">
          <span className="pk-promo-code-input__applied-icon">{icon}</span>
          <span className="pk-promo-code-input__applied-value pk-text-title-medium">{value}</span>
          <span className="pk-promo-code-input__applied-badge pk-text-title-small">{badge}</span>
        </div>
        <button type="button" className="pk-promo-code-input__applied-close" aria-label={`Remove ${label}`} onClick={onClear}>
          <X aria-hidden="true" size={24} />
        </button>
      </div>
    </div>
  )
}
