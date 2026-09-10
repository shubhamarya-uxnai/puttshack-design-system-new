import React from 'react'
import { cx } from '../../../lib/cx'
import { Toast } from '../../../components/Toast/Toast'
import { Button } from '../../../components/Button/Button'
import { Plus } from '../../../icons'
import './BundleDetails.css'

/**
 * Composition scaffold for the Figma "Bundle Details" component (Web /
 * Child Components / Menu & Content, node 4199:164912).
 *
 * DS usage:
 * - `Toast` (Figma: `Toast / Property 1=Informative, Version=October,
 *   Inverse=True`, heading "Why we're suggesting this", icon on, no close)
 *   — explains why a bundle is recommended.
 * - `Button` (Figma: `Button / Size=Default, Type=Primary, Only
 *   Icon=True`, label "Add bundle") — the add-to-order CTA. No specific
 *   icon was captured for the button; `Plus` is used as the closest
 *   reasonable default and is overridable.
 *
 * Figma text styles: `Title/Large` (bundle name), `Title/Small Capital`
 * (eyebrow), `Body/Medium` / `Body/Small` (description + toast body).
 */
export interface BundleDetailsProps {
  /** Figma: `Title/Small Capital` eyebrow label. */
  eyebrow?: string
  /** Figma: `Title/Large` bundle name. */
  bundleName: string
  /** Figma: `Body/Medium` description copy. */
  description?: string
  /** Figma: Toast `Heading` text. */
  toastHeading?: string
  /** Figma: Toast `Content` text. */
  toastMessage: string
  addIcon?: React.ReactNode
  onAddBundle?: () => void
  className?: string
}

export function BundleDetails({
  eyebrow,
  bundleName,
  description,
  toastHeading = "Why we're suggesting this",
  toastMessage,
  addIcon,
  onAddBundle,
  className,
}: BundleDetailsProps) {
  return (
    <div className={cx('pk-bundle-details', className)}>
      <div className="pk-bundle-details__header">
        <div className="pk-bundle-details__text">
          {eyebrow && <span className="pk-bundle-details__eyebrow pk-text-title-small-capital">{eyebrow}</span>}
          <span className="pk-bundle-details__name pk-text-title-large">{bundleName}</span>
          {description && <p className="pk-bundle-details__description pk-text-body-medium">{description}</p>}
        </div>
        <Button
          variant="primary"
          onlyIcon
          leadingIcon={addIcon ?? <Plus aria-hidden="true" />}
          onClick={onAddBundle}
        >
          Add bundle
        </Button>
      </div>

      <Toast variant="informative" inverse title={toastHeading} message={toastMessage} icon />
    </div>
  )
}
