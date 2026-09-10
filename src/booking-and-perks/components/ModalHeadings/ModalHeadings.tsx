import React from 'react'
import { cx } from '../../../lib/cx'
import { UserX2 } from '../../../icons'
import { Icons } from '../Icons/Icons'
import './ModalHeadings.css'

/**
 * Composition scaffold for "Modal Headings" (Figma: booking-and-perks
 * snapshot, loc "Web / Child Components / Modal Elements", node
 * 4199:161757).
 *
 * A modal/section heading block: optional status icon (via the sibling
 * `Icons` scaffold), a small "Category" eyebrow, a title, and a subtitle.
 * `layout` controls whether the icon sits beside (Horizontal) or above
 * (Vertical) the text.
 */
export type ModalHeadingsLayout = 'vertical' | 'horizontal'
export type ModalHeadingsType = 'caption' | 'subheading' | 'title'

export interface ModalHeadingsProps {
  /** Figma variant: `Property 1` (Vertical/Horizontal). @default 'horizontal' */
  layout?: ModalHeadingsLayout
  /**
   * Figma variant: `Type` (Caption/SubHeading/Title) — controls which text
   * style tier is used for the main heading line.
   * @default 'subheading'
   */
  type?: ModalHeadingsType
  /** Figma: `Category` text. */
  category?: string
  /** Figma: `Title` text. */
  title?: string
  /** Figma: `Sub Title` text. */
  subtitle?: string
  /** Figma: `Icon` boolean — shows the status `Icons` scaffold before the text. */
  icon?: boolean
}

const TITLE_STYLE: Record<ModalHeadingsType, string> = {
  caption: 'pk-text-label-large',
  subheading: 'pk-text-headline-small',
  title: 'pk-text-headline-small',
}

export function ModalHeadings({
  layout = 'horizontal',
  type = 'subheading',
  category,
  title = 'Title',
  subtitle,
  icon = false,
}: ModalHeadingsProps) {
  return (
    <div className={cx('pk-oct-modal-heading', `pk-oct-modal-heading--${layout}`)}>
      {icon && (
        <span className="pk-oct-modal-heading__icon">
          <Icons status="negative" icon={<UserX2 aria-hidden="true" />} />
        </span>
      )}
      <div className="pk-oct-modal-heading__text">
        {category && <span className="pk-oct-modal-heading__category pk-text-label-large">{category}</span>}
        {type !== 'caption' ? (
          <h2 className={cx('pk-oct-modal-heading__title', TITLE_STYLE[type])}>{title}</h2>
        ) : (
          <span className={cx('pk-oct-modal-heading__title', TITLE_STYLE[type])}>{title}</span>
        )}
        {subtitle && <p className="pk-oct-modal-heading__subtitle pk-text-label-large">{subtitle}</p>}
      </div>
    </div>
  )
}
