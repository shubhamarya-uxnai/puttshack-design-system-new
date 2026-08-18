import React from 'react'
import { cx } from '../../lib/cx'
import './Button.css'

/** Figma variant property `Type`. "Ghost/Link" in Figma is `'ghost'` here. */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'ghost'

/**
 * Figma variant property `Size`. `'large'` is the Kiosk touch-target size
 * (326×104px in the source file) — never use it in web/desktop or mobile
 * contexts, only on kiosk hardware.
 */
export type ButtonSize = 'default' | 'large'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Figma: `Type`. @default 'primary' */
  variant?: ButtonVariant
  /** Figma: `Size`. `'large'` is Kiosk-only — see the `ButtonSize` doc. @default 'default' */
  size?: ButtonSize
  /** Figma: `Enabled=False` / `State=Disabled`. */
  disabled?: boolean
  /** Figma: `Inverse` — set true when the button sits on a dark/brand surface. */
  inverse?: boolean
  /** Figma: instance-swap icon slot before the label. */
  leadingIcon?: React.ReactNode
  /** Figma: instance-swap icon slot after the label. */
  trailingIcon?: React.ReactNode
  /**
   * Figma: `Only Icon`. Visually hides the label and shows icon(s) only.
   * The label is kept as visually-hidden text so the button stays
   * accessible to screen readers — always pass a real, descriptive
   * `children` string even when this is true.
   */
  onlyIcon?: boolean
  /** Figma: the label. @default 'Button' */
  children?: React.ReactNode
  /** Documentation only — pins an interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
  htmlType?: 'button' | 'submit' | 'reset'
}

/**
 * Design rule (not enforceable in code): never show more than one Primary
 * button in the same view — Primary is the single loudest call to action.
 */
export function Button({
  variant = 'primary',
  size = 'default',
  disabled = false,
  inverse = false,
  leadingIcon,
  trailingIcon,
  onlyIcon = false,
  children = 'Button',
  forceState,
  htmlType = 'button',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      disabled={disabled}
      data-force-state={forceState}
      className={cx(
        'pk-button',
        `pk-button--${variant}`,
        `pk-button--${size}`,
        inverse && 'pk-button--inverse',
        className
      )}
      {...rest}
    >
      {leadingIcon && (
        <span className="pk-button__icon" aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <span
        className={cx(
          'pk-button__label',
          size === 'large' ? 'pk-text-title-large' : 'pk-text-title-small',
          onlyIcon && 'pk-button__label--sr-only'
        )}
      >
        {children}
      </span>
      {trailingIcon && (
        <span className="pk-button__icon" aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  )
}
