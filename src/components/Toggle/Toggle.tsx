import React from 'react'
import { cx } from '../../lib/cx'
import { Check, CircleHelp } from '../../icons'
import './Toggle.css'

/** Figma variant property `Size`. Track measures 40×24px (default) or 32×20px (small). */
export type ToggleSize = 'small' | 'default'

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked'> {
  /** Figma: `Size`. @default 'default' */
  size?: ToggleSize
  /** Figma: `Turn` (Off/On). @default false */
  checked?: boolean
  /** Figma: `Label` (On/Off) — also supplies the label's text content. */
  label?: string
  /** Figma: `Tooltip icon` (On/Off). Only renders when `label` is also set. @default false */
  tooltipIcon?: boolean
  /** Figma: `Enabled=False` / `Status=Disabled`. */
  disabled?: boolean
  /** Documentation only — pins `Status=Hover` open so Storybook can screenshot it on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus'
}

/**
 * Controlled switch. `checked` + `onChange` follow the standard native
 * `<input type="checkbox">` contract — pass `onChange` through props.
 */
export function Toggle({
  size = 'default',
  checked = false,
  label,
  tooltipIcon = false,
  disabled = false,
  forceState,
  className,
  ...rest
}: ToggleProps) {
  return (
    <label
      className={cx('pk-toggle', `pk-toggle--${size}`, disabled && 'pk-toggle--disabled', className)}
      data-force-state={forceState}
    >
      <span className="pk-toggle__control">
        <input
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          className="pk-toggle__input"
          {...rest}
        />
        <span className="pk-toggle__track" aria-hidden="true">
          <Check className="pk-toggle__check" aria-hidden="true" />
          <span className="pk-toggle__knob" />
        </span>
      </span>
      {label && (
        <span className={cx('pk-toggle__label', size === 'small' ? 'pk-text-body-small' : 'pk-text-body-medium')}>
          {label}
        </span>
      )}
      {label && tooltipIcon && <CircleHelp className="pk-toggle__tooltip-icon" aria-hidden="true" />}
    </label>
  )
}
