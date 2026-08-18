import React from 'react'
import { cx } from '../../lib/cx'
import { X } from '../../icons'
import './Chip.css'

/**
 * Figma variant property `Size` (component set "_Chip", node 1948:162667).
 * Renamed to `variant` here because Figma's values describe visual style,
 * not pixel size: Small -> 'default', Yellow -> 'promo', AVATAR -> 'avatar'.
 */
export type ChipVariant = 'default' | 'promo' | 'avatar'

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma: `Chip label` text node. */
  children?: React.ReactNode
  /** Figma: `Size` (Small/Yellow/AVATAR), renamed — see `ChipVariant`. @default 'default' */
  variant?: ChipVariant
  /** Figma: `Avatars` instance image fill. Only rendered when `variant='avatar'`. */
  avatarSrc?: string
  /** Fallback initials shown in the avatar circle when `avatarSrc` isn't given. Only meaningful when `variant='avatar'`. */
  avatarInitials?: string
  /**
   * Figma: `Remove icon` instance. Only rendered — as an interactive ×
   * button — when `variant='avatar'` AND this is provided. Chips don't
   * assume a remove handler always exists; wire it manually.
   */
  onRemove?: () => void
  /** Documentation only — pins the remove button's interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
}

export function Chip({
  children,
  variant = 'default',
  avatarSrc,
  avatarInitials,
  onRemove,
  forceState,
  className,
  ...rest
}: ChipProps) {
  const isAvatar = variant === 'avatar'
  const showRemove = isAvatar && Boolean(onRemove)

  return (
    <div className={cx('pk-chip', `pk-chip--${variant}`, className)} {...rest}>
      {isAvatar && (
        <span className="pk-chip__avatar" aria-hidden="true">
          {avatarSrc ? (
            <img className="pk-chip__avatar-image" src={avatarSrc} alt="" />
          ) : (
            <span className="pk-text-label-x-small pk-chip__avatar-initials">{avatarInitials}</span>
          )}
        </span>
      )}
      <span className="pk-text-label-medium pk-chip__label">{children}</span>
      {showRemove && (
        <button
          type="button"
          className="pk-chip__remove"
          onClick={onRemove}
          aria-label={typeof children === 'string' ? `Remove ${children}` : 'Remove'}
          data-force-state={forceState}
        >
          <X aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
