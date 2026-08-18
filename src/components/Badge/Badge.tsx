import React from 'react'
import { cx } from '../../lib/cx'
import './Badge.css'

/** Figma variant property `Type`. */
export type BadgeType = 'dot' | 'small' | 'icon-only' | 'text-filled' | 'icon-text'

/** Figma variant property `Status`. */
export type BadgeStatus = 'linked' | 'linked-secondary' | 'warning' | 'success' | 'disabled'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma: `Type`. @default 'text-filled' */
  type?: BadgeType
  /**
   * Figma: `Status`. Pick this to match the label's meaning, not by eye:
   * `success` = positive/complete (e.g. "Joined", "Active"), `warning` = caution,
   * `disabled` = inactive, `linked` / `linked-secondary` = neutral/pending/link
   * (e.g. "Invited").
   * @default 'linked'
   */
  status?: BadgeStatus
  /** Label/content. Required for `small`, `text-filled` and `icon-text`; ignored for `dot`. */
  children?: React.ReactNode
  /** Figma: instance-swap icon slot. Used by `icon-only` (sole content) and `icon-text` (leading icon before the label). Ignored for other types. */
  icon?: React.ReactNode
}

export function Badge({ type = 'text-filled', status = 'linked', children, icon, className, ...rest }: BadgeProps) {
  const showIcon = (type === 'icon-only' || type === 'icon-text') && icon != null
  const showLabel = type === 'small' || type === 'text-filled' || type === 'icon-text'

  return (
    <span className={cx('pk-badge', `pk-badge--${type}`, `pk-badge--${status}`, className)} {...rest}>
      {showIcon && <span className="pk-badge__icon">{icon}</span>}
      {showLabel && <span className="pk-badge__label">{children}</span>}
    </span>
  )
}
