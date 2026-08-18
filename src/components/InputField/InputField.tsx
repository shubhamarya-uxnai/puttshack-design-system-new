import React from 'react'
import { cx } from '../../lib/cx'
import './InputField.css'

/** Figma variant property `State`. */
export type InputFieldState = 'default' | 'typing' | 'typed' | 'disabled' | 'error'

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  /** Figma: `Show Label` + label text content. */
  label?: string
  /** Figma: `Required`. Renders the "*" marker and sets the native `required` attribute. @default false */
  required?: boolean
  /** Figma: `Leading icon` (boolean) + `Leading Icon` (instance swap). Rendered when provided. */
  leadingIcon?: React.ReactNode
  /** Figma: `Tailing Icon` (boolean) + instance-swap icon — the source file spells this property
   * "Tailing Icon" (a typo for "Trailing"); kept correct here as `trailingIcon`. */
  trailingIcon?: React.ReactNode
  /** Figma: `Show Helper Text` + helper text content. Also used for error/validation messages. */
  helperText?: string
  /** Figma: `State`. @default 'default' */
  state?: InputFieldState
  /** Figma: `Inverse`. Places the field on a dark background. @default false */
  inverse?: boolean
  /** Documentation only — pins the real `:focus-within` visual open so Storybook can screenshot
   * it on a static page. Never use in application code. */
  forceState?: 'focus'
}

export function InputField({
  label,
  required = false,
  leadingIcon,
  trailingIcon,
  helperText,
  state = 'default',
  inverse = false,
  forceState,
  type = 'text',
  className,
  id,
  ...rest
}: InputFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const helperId = helperText ? `${inputId}-helper` : undefined
  const disabled = state === 'disabled'
  const isError = state === 'error'

  return (
    <div
      className={cx(
        'pk-input-field',
        `pk-input-field--${state}`,
        inverse && 'pk-input-field--inverse',
        className
      )}
    >
      {label && (
        <div className="pk-input-field__label-row">
          <label htmlFor={inputId} className="pk-input-field__label pk-text-label-medium">
            {label}
          </label>
          {required && (
            <span className="pk-input-field__required" aria-hidden="true">
              *
            </span>
          )}
        </div>
      )}
      <div className="pk-input-field__row" data-force-state={forceState}>
        {leadingIcon && (
          <span className="pk-input-field__icon pk-input-field__icon--leading" aria-hidden="true">
            {leadingIcon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          required={required}
          aria-invalid={isError || undefined}
          aria-describedby={helperId}
          className="pk-input-field__control pk-text-title-medium"
          {...rest}
        />
        {trailingIcon && (
          <span className="pk-input-field__icon pk-input-field__icon--trailing" aria-hidden="true">
            {trailingIcon}
          </span>
        )}
      </div>
      {helperText && (
        <div className="pk-input-field__helper-row" id={helperId}>
          <span className="pk-input-field__helper-icon" aria-hidden="true">
            {isError ? <InputFieldErrorIcon /> : <InputFieldInfoIcon />}
          </span>
          <span className="pk-input-field__helper-text pk-text-body-small">{helperText}</span>
        </div>
      )}
    </div>
  )
}

/** Presentational only — Figma's helper row shows a status icon but exposes no icon prop for it. */
function InputFieldInfoIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7.25V11.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="5.1" r="0.85" fill="currentColor" />
    </svg>
  )
}

function InputFieldErrorIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4.75V8.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="10.9" r="0.85" fill="currentColor" />
    </svg>
  )
}
