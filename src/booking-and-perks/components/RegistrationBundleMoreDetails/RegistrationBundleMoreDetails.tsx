import React from 'react'
import { cx } from '../../../lib/cx'
import { Chip } from '../../../components/Chip/Chip'
import { Button } from '../../../components/Button/Button'
import { Sparkles, Plus } from '../../../icons'
import './RegistrationBundleMoreDetails.css'

/**
 * Composition scaffold for the Figma "Registration/Bundle - more details"
 * component (Web / Child Components / Menu & Content, node 940:27909) — a
 * bundle upsell row shown inside the registration flow.
 *
 * DS usage:
 * - `Chip` (Figma: `Chip / Size=Yellow`) — promo/highlight marker.
 * - Lucide `Sparkles` (Figma instance name: `sparkles`) — highlight icon.
 * - `Button` (Figma: `Button / Size=Default, Type=Primary, Only
 *   Icon=True`, label "Add bundle").
 * - Figma also captures an `Add / Active=True, Hover=False` instance from
 *   a remote library that isn't a Lucide icon or one of the 45 October
 *   Release components and has no captured internal structure — rendered
 *   here as a small icon-only `Button` (Plus) stand-in, same treatment as
 *   in `ViewMenu`.
 *
 * Figma text styles: `Title/Large Capital` (bundle name), `Title/Small
 * Capital` (eyebrow), `Body/Medium` / `Body/Small` (description).
 */
export interface RegistrationBundleMoreDetailsProps {
  /** Figma: `Chip / Size=Yellow` label. @default 'New' */
  chipLabel?: string
  /** Figma: `Title/Small Capital` eyebrow. */
  eyebrow?: string
  /** Figma: `Title/Large Capital` bundle name. */
  bundleName: string
  /** Figma: `Body/Medium` description. */
  description?: string
  onAddBundle?: () => void
  className?: string
}

export function RegistrationBundleMoreDetails({
  chipLabel = 'New',
  eyebrow,
  bundleName,
  description,
  onAddBundle,
  className,
}: RegistrationBundleMoreDetailsProps) {
  return (
    <div className={cx('pk-registration-bundle-more-details', className)}>
      <span className="pk-registration-bundle-more-details__sparkle" aria-hidden="true">
        <Sparkles />
      </span>

      <div className="pk-registration-bundle-more-details__text">
        <div className="pk-registration-bundle-more-details__eyebrow-row">
          <Chip variant="promo">{chipLabel}</Chip>
          {eyebrow && (
            <span className="pk-registration-bundle-more-details__eyebrow pk-text-title-small-capital">
              {eyebrow}
            </span>
          )}
        </div>
        <span className="pk-registration-bundle-more-details__name pk-text-title-large-capital">{bundleName}</span>
        {description && (
          <p className="pk-registration-bundle-more-details__description pk-text-body-medium">{description}</p>
        )}
      </div>

      <div className="pk-registration-bundle-more-details__actions">
        {/* TODO: replace with the real "Add" affordance once its source component is captured — using DS Button as the closest stand-in. */}
        <Button variant="primary" onlyIcon leadingIcon={<Plus aria-hidden="true" />}>
          Add bundle
        </Button>
      </div>
    </div>
  )
}
