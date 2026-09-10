import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { Button } from '../../../components/Button/Button'
import './BundleUpsellSection.css'

/**
 * Composition scaffold for "Bundle Upsell Section" (Figma: booking-and-perks
 * snapshot, loc "Web / Cards", node 4435:179207).
 *
 * `added=false` shows the upsell carousel with a promo `Chip`; `added=true`
 * shows the "Bundle Added" confirmation state with a Ghost/Link "Remove"
 * DS `Button`.
 */
export interface BundleUpsellSectionProps {
  /** Figma variant: `Property 1` (Default/Bundle Added). @default false */
  added?: boolean
  onRemove?: () => void
}

export function BundleUpsellSection({ added = false, onRemove }: BundleUpsellSectionProps) {
  return (
    <section className={cx('pk-oct-bundle-upsell', added && 'pk-oct-bundle-upsell--added')}>
      <div className="pk-oct-bundle-upsell__header">
        <span className="pk-oct-bundle-upsell__title pk-text-title-small-capital">Bundle &amp; save</span>
        {!added && <Chip variant="promo">Save 15%</Chip>}
      </div>

      {/* TODO: replace with <BundleCarouselGroup> from booking-and-perks/components once built —
          "Bundle Carousel Group" is not one of the 45 October Release components and has no capture data. */}
      <div className="pk-oct-bundle-upsell__body">
        {added ? (
          <div className="pk-placeholder pk-oct-bundle-upsell__added-summary">Bundle Carousel Group (Added)</div>
        ) : (
          <div className="pk-placeholder">Bundle Carousel Group</div>
        )}
      </div>

      {added && (
        <Button variant="ghost" onlyIcon onClick={onRemove}>
          Remove
        </Button>
      )}
    </section>
  )
}
