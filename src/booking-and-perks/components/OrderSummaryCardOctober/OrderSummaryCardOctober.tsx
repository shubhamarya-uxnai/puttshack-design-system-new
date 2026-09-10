import React from 'react'
import { cx } from '../../../lib/cx'
import './OrderSummaryCardOctober.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "Order Summary Card/October" (Web / Child Components /
 * Booking & Order Details), node 4220:77008.
 *
 * Same shape as `OrderSummaryCard` (no DS/icon instances captured either),
 * but on an inverse/dark surface (Surface/Inverse, Border/Inverse,
 * Text + Icon/Inverse tokens) — kept as its own component since it's a
 * distinct captured Figma node.
 */
export interface OrderSummaryLineItem {
  label: string
  value: string
}

export interface OrderSummaryCardOctoberProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  lineItems?: OrderSummaryLineItem[]
  totalLabel?: string
  totalValue?: string
}

const DEFAULT_ITEMS: OrderSummaryLineItem[] = [
  { label: 'Round 1 (4 guests)', value: '$112' },
  { label: 'Round 2 (4 guests)', value: '$112' },
]

export function OrderSummaryCardOctober({
  title = 'Order Summary',
  lineItems = DEFAULT_ITEMS,
  totalLabel = 'Total',
  totalValue = '$224',
  className,
  ...rest
}: OrderSummaryCardOctoberProps) {
  return (
    <div className={cx('pk-order-summary-card-october', className)} {...rest}>
      <span className="pk-order-summary-card-october__title pk-text-title-small">{title}</span>
      <dl className="pk-order-summary-card-october__rows">
        {lineItems.map((item) => (
          <div className="pk-order-summary-card-october__row" key={item.label}>
            <dt className="pk-order-summary-card-october__label pk-text-label-medium">{item.label}</dt>
            <dd className="pk-order-summary-card-october__value pk-text-label-x-small">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div className="pk-order-summary-card-october__total-row">
        <span className="pk-order-summary-card-october__total-label pk-text-title-medium">{totalLabel}</span>
        <span className="pk-order-summary-card-october__total-value pk-text-title-large">{totalValue}</span>
      </div>
    </div>
  )
}
