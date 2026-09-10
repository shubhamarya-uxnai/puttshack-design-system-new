import React from 'react'
import { cx } from '../../../lib/cx'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { Accessibility } from '../../../icons'
import './StepFree.css'

/**
 * Composition scaffold for the Figma "Step Free" component (Web / Child
 * Components / Party & Registration, node 4624:108772) — a labeled
 * accessibility-preference checkbox row shown in registration/party flows.
 *
 * DS usage: `Checkbox` (Figma: `Checkbox / Size=Default`, tooltip icon on,
 * no built-in label — this wrapper supplies its own label row) + Lucide
 * `Accessibility` icon (Figma instance name: `accessibility`).
 *
 * Figma text styles: `Title/Small` (row label) + `Label/Small` (helper
 * copy, shown when `description` is provided).
 */
export interface StepFreeProps {
  /** Figma: bound label text next to the accessibility icon. @default 'Step-free access' */
  label?: string
  /** Optional helper copy under the label — not captured as a required text layer in Figma, so kept optional. */
  description?: string
  /** Figma: `Checkbox` instance `Checked`. */
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function StepFree({
  label = 'Step-free access',
  description,
  checked = false,
  onCheckedChange,
  className,
}: StepFreeProps) {
  return (
    <div className={cx('pk-step-free', className)}>
      <span className="pk-step-free__icon" aria-hidden="true">
        <Accessibility />
      </span>
      <div className="pk-step-free__text">
        <span className="pk-step-free__label pk-text-title-small">{label}</span>
        {description && <span className="pk-step-free__description pk-text-label-small">{description}</span>}
      </div>
      <Checkbox
        size="desktop"
        checked={checked}
        tooltipIcon
        onCheckedChange={onCheckedChange}
        aria-label={label}
        className="pk-step-free__checkbox"
      />
    </div>
  )
}
