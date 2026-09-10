import React from 'react'
import { cx } from '../../../lib/cx'
import { AlarmCheck } from '../../../icons'
import './FooterChips.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Footer chips" component set (Web / Navigation & Layout),
 * node 5672:151357. Variant property `Test`: Venue / Exeprience [sic].
 * Boolean props `Icon` (default false) and `Separator` (default true).
 *
 * Captured instance is a single Lucide icon, `alarm-check` — modeled here
 * as a generic `icon` slot rather than hardcoding that one glyph, since
 * different chip instances in the flow (venue info vs. experience info)
 * would reasonably swap it.
 */
export type FooterChipsVariant = 'venue' | 'experience'

export interface FooterChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma variant: `Test`. @default 'venue' */
  variant?: FooterChipsVariant
  /** Figma: `Icon` boolean. @default false */
  showIcon?: boolean
  icon?: React.ReactNode
  /** Figma: `Separator` boolean. @default true */
  separator?: boolean
  children?: React.ReactNode
}

export function FooterChips({
  variant = 'venue',
  showIcon = false,
  icon = <AlarmCheck aria-hidden="true" />,
  separator = true,
  children = 'Open until 11 PM',
  className,
  ...rest
}: FooterChipsProps) {
  return (
    <div className={cx('pk-footer-chips', `pk-footer-chips--${variant}`, className)} {...rest}>
      {showIcon && <span className="pk-footer-chips__icon">{icon}</span>}
      <span className="pk-footer-chips__label pk-text-title-small">{children}</span>
      {separator && <span className="pk-footer-chips__separator" aria-hidden="true" />}
    </div>
  )
}
