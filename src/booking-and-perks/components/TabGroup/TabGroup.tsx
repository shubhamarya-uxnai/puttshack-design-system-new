import React from 'react'
import { cx } from '../../../lib/cx'
import { Tabs, type TabState } from '../Tabs/Tabs'
import './TabGroup.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Tab Group" (Web / Child Components / Tabs), node 250:64862.
 *
 * Composes a row of `Tabs` instances. The capture shows 3 instances
 * ("Morning" default, "Afternoon" selected, "Evening" default) — modeled
 * here as an `items` array so the group works for any tab count.
 */
export interface TabGroupItem {
  label: string
  state?: TabState
}

export interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma: the row of `Tabs` instances. @default Morning/Afternoon/Evening sample */
  items?: TabGroupItem[]
  onSelectTab?: (index: number) => void
}

const DEFAULT_ITEMS: TabGroupItem[] = [
  { label: 'Morning', state: 'default' },
  { label: 'Afternoon', state: 'selected' },
  { label: 'Evening', state: 'default' },
]

export function TabGroup({ items = DEFAULT_ITEMS, onSelectTab, className, ...rest }: TabGroupProps) {
  return (
    <div className={cx('pk-tab-group', className)} role="tablist" {...rest}>
      {items.map((item, i) => (
        <Tabs key={`${item.label}-${i}`} label={item.label} state={item.state} onClick={() => onSelectTab?.(i)} />
      ))}
    </div>
  )
}
