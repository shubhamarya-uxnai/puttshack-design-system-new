import React from 'react'
import { cx } from '../../lib/cx'
import { X } from '../../icons'
import './Toast.css'

/**
 * Figma variant property `Property 1`. "Yellow" -> 'warning', "Megenta"
 * [sic, source typo] -> 'promo', "Success" -> 'success', "Error" -> 'error',
 * "Informative" -> 'informative', "Brand" -> 'brand', "Neutral" -> 'neutral'.
 */
export type ToastVariant = 'warning' | 'promo' | 'success' | 'error' | 'informative' | 'brand' | 'neutral'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: `Property 1`. @default 'warning' */
  variant?: ToastVariant
  /**
   * Figma: `Inverse`. Switches the surface/border/icon-badge to the
   * Feedback-Inverse/* token set for a toast sitting on a dark or colored
   * surface — `title` and `message` both go light regardless of `variant`.
   * Figma only captures an Inverse=True instance for warning / success /
   * error / informative / neutral. `promo` and `brand` have no inverse
   * instance in the source file, so their inverse look here falls back to
   * the DS's generic inverse-surface tokens rather than a confirmed Figma
   * value — flagged in the component report.
   *
   * Session-wide rule: a Toast used as a floating card on top of any surface —
   * a Modal's card, a screen background, anything — reads as this saturated
   * `inverse` treatment in every real capture seen so far, not the flatter
   * default. So `inverse` now defaults `true`; pass `inverse={false}`
   * explicitly for the rare non-inverse case instead of the other way around.
   * @default true
   */
  inverse?: boolean
  /**
   * Figma: `Heading` text prop. Bold uppercase line shown above `message`,
   * in the same row as the leading icon badge.
   */
  title?: string
  /**
   * Figma: `Content` text prop. Primary body copy. Pass a string, or a
   * fragment with an inner `<strong>` for a bold lead-in — the component
   * doesn't parse bold out of a plain string itself. Omit entirely for a
   * single-line toast (e.g. a plain confirmation like "Changes saved") —
   * real captures with only one line of copy put it in `title` alone and
   * render no second line, rather than repeating it as a body line too.
   */
  message?: React.ReactNode
  /**
   * Figma: `Subheading` boolean + its bound text layer. An optional second
   * line rendered below `message`, off by default (mirrors the boolean's
   * `false` default) — distinct from `title`, which is the bold heading
   * above `message`, not below it.
   */
  subheading?: React.ReactNode
  /** Figma: `Icon` boolean + instance-swap icon slot inside the leading badge. */
  icon?: React.ReactNode
  /** Figma: `Close` boolean. Renders the dismiss control and calls this on click when provided. */
  onDismiss?: () => void
  /** Documentation only — pins an interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
}

export function Toast({
  variant = 'warning',
  inverse = true,
  title,
  message,
  subheading,
  icon,
  onDismiss,
  forceState,
  className,
  ...rest
}: ToastProps) {
  return (
    <div
      role="status"
      className={cx('pk-toast', `pk-toast--${variant}`, inverse && 'pk-toast--inverse', className)}
      {...rest}
    >
      <div className="pk-toast__row">
        {icon && (
          <span className="pk-toast__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        {title && <p className="pk-toast__title">{title}</p>}
      </div>
      {message && <p className="pk-toast__message">{message}</p>}
      {subheading && <p className="pk-toast__subheading">{subheading}</p>}
      {onDismiss && (
        <button
          type="button"
          className="pk-toast__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
          data-force-state={forceState}
        >
          <X aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
