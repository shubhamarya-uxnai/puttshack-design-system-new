import React from 'react'
import { cx } from '../../lib/cx'
import { CircleHelp } from '../../icons'
import './RadioButton.css'

/** Figma variant property `Size` — circle diameter (Mobile 20px, Desktop 24px, Kiosk 32px). */
export type RadioButtonSize = 'mobile' | 'desktop' | 'kiosk'

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked'> {
  /** Figma: `Size`. @default 'desktop' */
  size?: RadioButtonSize
  /**
   * Figma: `Selection` (Off/On) — named `checked` here to match standard
   * React radio-input conventions rather than the Figma property name.
   */
  checked?: boolean
  /** Figma: `Label` text. Renders inside the tap target alongside the circle. */
  label?: string
  /** Figma: `Tooltip icon`. Shows a small info glyph next to the label. */
  tooltipIcon?: boolean
  /**
   * Figma: "Selected with Tick" — when true and checked, the circle fills
   * solid with a white checkmark instead of showing a plain inner dot.
   * @default false
   */
  tick?: boolean
  /** Figma: `Enabled=False` / `Status=Disabled`. */
  disabled?: boolean
  /** Documentation only — pins an interaction state open so Storybook can screenshot hover on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
}

/**
 * A single radio input. Mutual exclusion across a group (only one radio
 * selected at a time) is the consumer's responsibility — via a shared native
 * `name` attribute or controlled state — this component does not ship a
 * RadioGroup wrapper.
 *
 * Radio groups should maintain 8–12px vertical spacing between items.
 */
export function RadioButton({
  size = 'desktop',
  checked = false,
  label,
  tooltipIcon = false,
  tick = false,
  disabled = false,
  forceState,
  className,
  ...rest
}: RadioButtonProps) {
  return (
    <label
      className={cx('pk-radio', tick && 'pk-radio--tick', className)}
      data-screen={size}
      data-force-state={forceState}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        className="pk-radio__input"
        {...rest}
      />
      <span className="pk-radio__control" aria-hidden="true" />
      {(label || tooltipIcon) && (
        <span className="pk-radio__text">
          {label && <span className={cx('pk-radio__label', 'pk-text-body-medium')}>{label}</span>}
          {tooltipIcon && <CircleHelp className="pk-radio__tooltip-icon" aria-hidden="true" />}
        </span>
      )}
    </label>
  )
}
