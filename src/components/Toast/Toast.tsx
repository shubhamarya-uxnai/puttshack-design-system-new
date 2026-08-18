import React from 'react'
import { cx } from '../../lib/cx'
import './Toast.css'

/** Figma variant property `Property 1`. "Yellow" → 'warning', "Megenta" [sic, source typo] → 'promo', "Success" → 'success'. */
export type ToastVariant = 'warning' | 'promo' | 'success'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Property 1`. @default 'warning' */
  variant?: ToastVariant
  /**
   * Bold uppercase headline shown above `message`. Confirmed for `variant="success"`
   * (e.g. "YOU ARE READY"); leave unset for the warning/promo single-sentence layout.
   */
  title?: string
  /**
   * Primary content. For `warning`/`promo`, pass a string or a fragment with an inner
   * `<strong>` for the bold lead-in (e.g. `<><strong>Heads up —</strong> the rest of the
   * sentence.</>`) — the component doesn't parse bold out of a plain string itself. When
   * `title` is set, this renders as the secondary body line below it.
   */
  message: React.ReactNode
  /** Figma: instance-swap icon slot in the leading circle. No default icon ships with this extraction — always pass one. */
  icon?: React.ReactNode
  /** When provided, renders a dismiss control that calls this on click. */
  onDismiss?: () => void
  /** Documentation only — pins an interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
}

export function Toast({
  variant = 'warning',
  title,
  message,
  icon,
  onDismiss,
  forceState,
  className,
  ...rest
}: ToastProps) {
  return (
    <div role="status" className={cx('pk-toast', `pk-toast--${variant}`, className)} {...rest}>
      <span className="pk-toast__icon" aria-hidden="true">
        {icon}
      </span>
      <div className="pk-toast__content">
        {title && <p className="pk-toast__title pk-text-headline-small">{title}</p>}
        <p className="pk-toast__message pk-text-body-small">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          className="pk-toast__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
          data-force-state={forceState}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  )
}
