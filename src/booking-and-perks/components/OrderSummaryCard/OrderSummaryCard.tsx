import React from 'react'
import { cx } from '../../../lib/cx'
import './OrderSummaryCard.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: component set "Order Summary Card" (Web / Child Components /
 * Booking & Order Details), node 4220:77007. Single variant `Property 1=August`.
 *
 * The capture has NO instances (no DS atoms or icons referenced) — only
 * tokens and text styles. Built here as a generic line-item summary using
 * the captured text styles (Title/Large for the total, Title/Medium/Small
 * for row labels, Label/Medium + Label/x-Small for meta text) and a
 * `Text + Icon/Magenta` accent token, which is applied to the total value
 * to flag it as the highlighted figure. No DS component/icon guess is made
 * since none was captured.
 */
export interface OrderSummaryLineItem {
  label: string
  value: string
}

export interface OrderSummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  lineItems?: OrderSummaryLineItem[]
  totalLabel?: string
  totalValue?: string
}

const DEFAULT_ITEMS: OrderSummaryLineItem[] = [
  { label: 'Round 1 (4 guests)', value: '$112' },
  { label: 'Round 2 (4 guests)', value: '$112' },
]

export function OrderSummaryCard({
  title = 'Order Summary',
  lineItems = DEFAULT_ITEMS,
  totalLabel = 'Total',
  totalValue = '$224',
  className,
  ...rest
}: OrderSummaryCardProps) {
  return (
    <div className={cx('pk-order-summary-card', className)} {...rest}>
      <span className="pk-order-summary-card__title pk-text-title-small">{title}</span>
      <dl className="pk-order-summary-card__rows">
        {lineItems.map((item) => (
          <div className="pk-order-summary-card__row" key={item.label}>
            <dt className="pk-order-summary-card__label pk-text-label-medium">{item.label}</dt>
            <dd className="pk-order-summary-card__value pk-text-label-x-small">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div className="pk-order-summary-card__total-row">
        <span className="pk-order-summary-card__total-label pk-text-title-medium">{totalLabel}</span>
        <span className="pk-order-summary-card__total-value pk-text-title-large">{totalValue}</span>
      </div>
    </div>
  )
}
