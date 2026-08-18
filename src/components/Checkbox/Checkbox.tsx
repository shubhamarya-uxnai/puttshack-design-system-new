import React, { useEffect, useRef } from 'react'
import { cx } from '../../lib/cx'
import { Check, CircleHelp, Minus } from '../../icons'
import './Checkbox.css'

/** Figma variant property `Size`. Drives the `data-screen` attribute the DS uses for per-mode sizing. */
export type CheckboxSize = 'mobile' | 'desktop' | 'kiosk'

/** Figma variant property `Checked`. Mirrors native `<input type="checkbox">`, which exposes
 * indeterminate as a DOM property rather than a JSX attribute. */
export type CheckboxCheckedState = boolean | 'indeterminate'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'onChange'> {
  /** Figma: `Size`. @default 'desktop' */
  size?: CheckboxSize
  /** Figma: `Checked` (No / Yes / Indeterminate). @default false */
  checked?: CheckboxCheckedState
  /** Figma: `Label` (Yes/No) — also supplies the label's text content. */
  label?: string
  /** Figma: `Tooltip icon` (Yes/No). @default false */
  tooltipIcon?: boolean
  /** Figma: `Status=Error`. Only ever renders when `checked` is `false` — matches the Figma
   * component, which has no Error variant for Checked=Yes or Checked=Indeterminate. */
  error?: boolean
  /** Figma: `Enabled=False` / `Status=Disabled`. */
  disabled?: boolean
  /** Fires with the resolved next value. An indeterminate checkbox always resolves to `true`
   * on the first click — it never toggles to `false`. */
  onCheckedChange?: (checked: boolean) => void
  /** Documentation only — pins `Status=Hover` or the focus ring open so Storybook can screenshot
   * it on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus'
}

/**
 * Checkbox groups (a stack of related checkboxes) should keep 8–12px vertical spacing between
 * items — that's layout guidance for the consumer to apply on their container, not something
 * this component enforces itself.
 */
export function Checkbox({
  size = 'desktop',
  checked = false,
  label,
  tooltipIcon = false,
  error = false,
  disabled = false,
  onCheckedChange,
  forceState,
  className,
  ...rest
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const isChecked = checked === true
  const isIndeterminate = checked === 'indeterminate'
  const showError = error && checked === false

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = isIndeterminate
    }
  }, [isIndeterminate])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = isIndeterminate ? true : event.target.checked
    onCheckedChange?.(next)
  }

  return (
    <label
      className={cx('pk-checkbox', disabled && 'pk-checkbox--disabled', showError && 'pk-checkbox--error', className)}
      data-screen={size}
      data-force-state={forceState}
    >
      <span className="pk-checkbox__hit-area">
        <input
          ref={inputRef}
          type="checkbox"
          className="pk-checkbox__input"
          checked={isChecked}
          disabled={disabled}
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          aria-invalid={showError || undefined}
          onChange={handleChange}
          {...rest}
        />
        <span
          className={cx(
            'pk-checkbox__box',
            (isChecked || isIndeterminate) && 'pk-checkbox__box--checked',
          )}
          aria-hidden="true"
        >
          {isChecked && <Check className="pk-checkbox__icon" aria-hidden="true" />}
          {isIndeterminate && <Minus className="pk-checkbox__icon" aria-hidden="true" />}
        </span>
      </span>
      {label && <span className="pk-checkbox__label pk-text-body-medium">{label}</span>}
      {tooltipIcon && <CircleHelp className="pk-checkbox__tooltip-icon" aria-hidden="true" />}
    </label>
  )
}
