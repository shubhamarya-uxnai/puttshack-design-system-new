import React from 'react'
import { cx } from '../../../lib/cx'
import './Icons.css'

/**
 * Composition scaffold for "Icons" (Figma: booking-and-perks snapshot,
 * loc "Web / Child Components / Icons & Misc", node 4199:165532).
 *
 * A small circular status-icon wrapper: swaps in any Lucide icon and tints
 * it by feedback status. Not a Design System atom (Badge is the closest DS
 * equivalent but is text/label-first) — this is a booking-and-perks-only
 * composite, so it lives here rather than in src/components.
 *
 * The captured instance always shows `user-x-2`, but the Figma prop is an
 * INSTANCE_SWAP slot with no fixed icon — exposed here as `icon`.
 */
export type IconsStatus = 'negative' | 'positive' | 'warning' | 'informative' | 'brand'
export type IconsType = 'default' | 'special'

export interface IconsProps {
  /** Figma variant: `Property 1` (Negative/Positive/Warning/Informative/Brand). @default 'negative' */
  status?: IconsStatus
  /** Figma variant: `Type` (Default/Special). Special renders a larger, more prominent treatment. @default 'default' */
  type?: IconsType
  /** Figma: `Icon` instance-swap slot. Captured example uses the `user-x-2` Lucide icon. */
  icon: React.ReactNode
}

export function Icons({ status = 'negative', type = 'default', icon }: IconsProps) {
  return (
    <span className={cx('pk-oct-icons', `pk-oct-icons--${status}`, `pk-oct-icons--${type}`)} aria-hidden="true">
      {icon}
    </span>
  )
}
