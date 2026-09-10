import React from 'react'
import { cx } from '../../../lib/cx'
import './Tabs.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: component set "Tabs" (Web / Child Components / Tabs), node 250:64442.
 *
 * A single tab item. Figma variant property `State` (Default/Selected) and
 * text prop `Tabs#250:0` (the tab's label). No DS atom instances are used
 * inside this node in the capture — it's a plain text label on a background,
 * styled directly with tokens.
 */
export type TabState = 'default' | 'selected'

export interface TabsProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Figma: `State`. @default 'default' */
  state?: TabState
  /** Figma: `Tabs#250:0` text prop. @default 'Tab Name' */
  label?: string
  onClick?: () => void
}

export function Tabs({ state = 'default', label = 'Tab Name', onClick, className, ...rest }: TabsProps) {
  return (
    <button
      type="button"
      className={cx('pk-tab', `pk-tab--${state}`, className)}
      aria-selected={state === 'selected'}
      onClick={onClick}
      {...rest}
    >
      <span className="pk-tab__label pk-text-label-medium">{label}</span>
    </button>
  )
}
