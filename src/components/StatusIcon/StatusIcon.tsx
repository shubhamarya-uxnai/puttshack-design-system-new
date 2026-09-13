import React from 'react'
import { cx } from '../../lib/cx'
import { UserX2, BadgeCheck } from '../../icons'
import './StatusIcon.css'

/** Figma variant property `Property 1` (node 4199:165532, "Icons"). */
export type StatusIconVariant = 'negative' | 'positive' | 'warning' | 'informative' | 'brand'

export interface StatusIconProps {
  /** Figma: `Property 1`. @default 'negative' */
  variant?: StatusIconVariant
  /** Figma: `icon` instance-swap slot — every variant defaults to "user-x-2" in the
   * source file, but every real usage (e.g. Perks Card) swaps in its own glyph. */
  icon?: React.ReactNode
  className?: string
}

/**
 * DS atom (Figma: "Icons", node 4199:165532) — a 48px circular status badge in one of
 * five feedback colors, wrapping a 24px icon. `brand` is the gold-bordered magenta
 * gradient used by Perks-branded surfaces; the other four are plain feedback fills
 * (negative/positive/warning/informative). Every real capture only ever showed the
 * placeholder "user-x-2" Lucide glyph, so that's the default `icon` here too — pass a
 * different one via the `icon` prop for real usage (Perks Card passes `Gift`/`UserCheck`).
 */
export function StatusIcon({ variant = 'negative', icon, className }: StatusIconProps) {
  return (
    <div className={cx('pk-status-icon', `pk-status-icon--${variant}`, className)}>
      {icon ?? <UserX2 aria-hidden="true" size={24} />}
    </div>
  )
}

/**
 * `Property 1=Positive, Type=Special` (node 4590:114882) — a 78px green "verified" seal.
 * Captured as a flat image in Figma (no vector detail); `BadgeCheck` from the Lucide set
 * is the closest real icon to that scalloped-seal-plus-checkmark shape.
 */
export function StatusIconPositiveSpecial({ className }: { className?: string }) {
  return (
    <div className={cx('pk-status-icon-special', className)}>
      <BadgeCheck aria-hidden="true" size={78} strokeWidth={1.5} />
    </div>
  )
}
