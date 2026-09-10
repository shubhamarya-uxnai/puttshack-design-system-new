import React from 'react'
import { cx } from '../../../lib/cx'
import './Menu.css'

/**
 * Composition scaffold for the Figma "Menu" component (Web / Child
 * Components / Menu & Content, node 4199:163959) — a dark modal-style panel
 * used to present ordering/menu content inside the Booking & Perks flow.
 *
 * Figma captured no instance-swap children for this node (no DS
 * component/icon instances in the source), only tokens (`Surface/Inverse`,
 * `Surface/Modal Overlay`, `Background/Magenta Dark`) and text styles
 * (`Title/Small` heading, `Label/Large` / `Body/Small` body copy). Without
 * captured child detail, this is built as a generic slotted panel: a
 * heading plus a `children` region for whatever row content (e.g. `Price`,
 * `View menu`, `Bundle Details`) gets composed inside it — no internal
 * layout is invented beyond that.
 */
export interface MenuProps {
  /** Figma: `Title/Small` heading text. */
  title?: string
  /** Menu body content — rows, prices, CTAs, etc. composed by the caller. */
  children?: React.ReactNode
  className?: string
}

export function Menu({ title, children, className }: MenuProps) {
  return (
    <div className={cx('pk-menu', className)}>
      {title && <span className="pk-menu__title pk-text-title-small">{title}</span>}
      <div className="pk-menu__body pk-text-body-small">{children}</div>
    </div>
  )
}
