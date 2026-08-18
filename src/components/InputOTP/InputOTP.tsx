import React, { useEffect, useId, useRef, useState } from 'react'
import { cx } from '../../lib/cx'
import './InputOTP.css'

/**
 * Use for fixed-length digit entry: OTPs, verification codes, and PINs. Each
 * digit gets its own cell to communicate length upfront and guide entry.
 *
 * Don't use for phone numbers, booking references, or variable-length input —
 * reach for a standard text field with inputMode="numeric" instead. Avoid for
 * codes longer than 8 digits (soft guidance from the source file, not an
 * enforced cap — `length` is not artificially clamped below 8).
 *
 * States: Empty (default), Active (focused cell — visible focus ring +
 * blinking magenta caret), Filled (digit entered — no extra visual treatment
 * beyond the digit itself, since auto-advance already communicates it), and
 * Error (component-level, not per-cell — all cells take the error border and
 * clear together).
 */

export type InputOTPSize = 'mobile' | 'desktop' | 'kiosk'

export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Figma: device mode — drives cell sizing/fill via [data-screen]. @default 'desktop' */
  size?: InputOTPSize
  /** Number of digit cells. Figma's visual example uses 6. @default 6 */
  length?: number
  /** Labels the group as a whole. Never render per-cell labels (no D1/D2/D3). */
  label?: string
  /** Figma: Error state. All cells clear and take the error border together. */
  error?: boolean
  /** Message rendered below the component when `error` is true. */
  errorMessage?: string
  /** Fires once every cell is filled — no separate confirm button needed. */
  onComplete?: (code: string) => void
  /**
   * Autofocuses the first cell. Only use when the OTP input is the primary/
   * only action on the screen — stealing focus elsewhere is disorienting.
   */
  autoFocus?: boolean
}

export function InputOTP({
  size = 'desktop',
  length = 6,
  label,
  error = false,
  errorMessage,
  onComplete,
  autoFocus = false,
  className,
  ...rest
}: InputOTPProps) {
  const [digits, setDigits] = useState<string[]>(() => Array(length).fill(''))
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const labelId = useId()

  useEffect(() => {
    if (error) {
      setDigits(Array(length).fill(''))
      inputRefs.current[0]?.focus()
    }
  }, [error, length])

  const commit = (next: string[]) => {
    setDigits(next)
    if (next.every((d) => d !== '')) {
      onComplete?.(next.join(''))
    }
  }

  // Shared by paste and by browser/OS SMS autofill, which can deliver the
  // whole code into a single cell's change event despite maxLength={1}.
  const distributeDigits = (startIndex: number, value: string) => {
    const next = [...digits]
    let cursor = startIndex
    for (const char of value) {
      if (cursor >= length) break
      next[cursor] = char
      cursor++
    }
    commit(next)
    inputRefs.current[Math.min(cursor, length - 1)]?.focus()
  }

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '')
    if (raw.length > 1) {
      distributeDigits(index, raw)
      return
    }
    const next = [...digits]
    next[index] = raw
    commit(next)
    if (raw && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      e.preventDefault()
      const next = [...digits]
      next[index - 1] = ''
      setDigits(next)
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '')
    if (!pasted) return
    distributeDigits(index, pasted)
  }

  return (
    <div
      className={cx('pk-input-otp', error && 'pk-input-otp--error', className)}
      data-screen={size}
      {...rest}
    >
      {label && (
        <span className="pk-input-otp__label pk-text-label-medium" id={labelId}>
          {label}
        </span>
      )}
      <div className="pk-input-otp__cells" role="group" aria-labelledby={label ? labelId : undefined}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="pk-input-otp__cell"
            value={digit}
            aria-label={`Digit ${index + 1} of ${length}`}
            aria-invalid={error || undefined}
            autoFocus={autoFocus && index === 0}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={(e) => handlePaste(index, e)}
          />
        ))}
      </div>
      {error && errorMessage && (
        <p className="pk-input-otp__error pk-text-body-small" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
