import React from 'react'
import { cx } from '../../../lib/cx'
import './Price.css'

/**
 * Composition scaffold for the Figma "Price" component (Web / Child
 * Components / Menu & Content, node 4199:163303) — a small price readout
 * used inside Menu / Bundle rows. Figma captured no instance-swap children
 * for this one (it's built from text layers only), so this is a plain text
 * assembly rather than a DS-component composite.
 *
 * Figma text styles: `Title/Large` (current price) + `Label/Medium`
 * (struck-through original price, shown only when discounted).
 */
export interface PriceProps {
  /** The current/effective price, e.g. "$45". Figma: bound text on the price layer. */
  amount: string
  /** Optional original price shown struck-through when a discount applies. */
  originalAmount?: string
  /** Figma: `Surface/Inverse` token usage — set when this sits on a dark magenta surface. */
  inverse?: boolean
  className?: string
}

export function Price({ amount, originalAmount, inverse = false, className }: PriceProps) {
  return (
    <div className={cx('pk-price', inverse && 'pk-price--inverse', className)}>
      {originalAmount && <span className="pk-price__original pk-text-label-medium">{originalAmount}</span>}
      <span className="pk-price__amount pk-text-title-large">{amount}</span>
    </div>
  )
}
