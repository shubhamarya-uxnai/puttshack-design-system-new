import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { Plus } from '../../../icons'
import './ViewMenu.css'

/**
 * Composition scaffold for the Figma "View menu" component (Web / Child
 * Components / Menu & Content, node 959:14927) — a subtle card prompting
 * the guest to view/add from the venue's menu.
 *
 * Figma instance: `Add / Active=True, Hover=False` — a small circular
 * add affordance from a remote library not present in this file's DS
 * (not a Lucide icon name, not one of the 45 October Release components).
 * There's no captured internal structure for it, so it's rendered here as
 * the closest DS equivalent: a small `Button` (primary, only-icon, `Plus`
 * leading icon) rather than guessed bespoke markup.
 *
 * Figma text styles: `Headline/Small` (heading), `Title/Small` / `Body/Small`
 * (supporting copy), `Label/Large` (the Add control's accessible label).
 */
export interface ViewMenuProps {
  /** Figma: `Headline/Small` heading text. @default 'View Menu' */
  heading?: string
  /** Figma: `Body/Small` supporting copy. */
  description?: string
  onAdd?: () => void
  className?: string
}

export function ViewMenu({ heading = 'View Menu', description, onAdd, className }: ViewMenuProps) {
  return (
    <div className={cx('pk-view-menu', className)}>
      <div className="pk-view-menu__text">
        <span className="pk-view-menu__heading pk-text-headline-small">{heading}</span>
        {description && <span className="pk-view-menu__description pk-text-body-small">{description}</span>}
      </div>
      {/* TODO: replace with the real "Add" affordance once its source component is captured — using DS Button as the closest stand-in. */}
      <Button
        variant="primary"
        onlyIcon
        leadingIcon={<Plus aria-hidden="true" />}
        onClick={onAdd}
        className="pk-view-menu__add"
      >
        Add to order
      </Button>
    </div>
  )
}
