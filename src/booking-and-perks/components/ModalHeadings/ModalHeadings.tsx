import React from 'react'
import { cx } from '../../../lib/cx'
import { UserX2 } from '../../../icons'
import { StatusIcon } from '../../../components/StatusIcon/StatusIcon'
import './ModalHeadings.css'

/**
 * Composition scaffold for "Modal Headings" (Figma: booking-and-perks
 * snapshot, node 4199:161757, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4199-161757). A section heading: an
 * optional `StatusIcon` badge (real capture always shows the `negative`
 * variant with a `user-x-2` glyph — the Figma `icon` prop is an
 * instance-swap slot with no fixed icon, so it's exposed the same way
 * here), an uppercase "Category" eyebrow, and a bold headline `Title`.
 * `layout` controls whether the icon sits beside (Horizontal) or above
 * (Vertical) the text.
 *
 * Real captures (Horizontal/SubHeading node 4199:161729, Vertical/
 * SubHeading node 4590:114806) show dark text (`--pk-sys-text-secondary`
 * for the eyebrow, `--pk-sys-text-primary` for the title) — the codegen's
 * literal `text+icon/inverse,white` fallback for both was stale. Those two
 * captures had an empty `Sub Title#4199:58` field, but Code Connect
 * confirms it's a real property on this component, so `subtitle` stays
 * supported — just corrected to the same dark text as the title/category.
 */
export type ModalHeadingsLayout = 'vertical' | 'horizontal'
export type ModalHeadingsType = 'caption' | 'subheading' | 'title'

export interface ModalHeadingsProps {
  /** Figma variant: `Property 1` (Vertical/Horizontal). @default 'horizontal' */
  layout?: ModalHeadingsLayout
  /**
   * Figma variant: `Type` (Caption/SubHeading/Title) — controls which text
   * style tier is used for the main heading line. SubHeading and Title
   * both render at Headline/Small in the real captures.
   * @default 'subheading'
   */
  type?: ModalHeadingsType
  /** Figma: `Category` text. */
  category?: string
  /** Figma: `Title` text. */
  title?: string
  /** Figma: `Sub Title#4199:58` text. */
  subtitle?: string
  /** Figma: `Icon` boolean — shows the `StatusIcon` badge before/above the text. */
  icon?: boolean
  className?: string
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
  className,
}: ModalHeadingsProps) {
  return (
    <div className={cx('pk-oct-modal-heading', `pk-oct-modal-heading--${layout}`, className)}>
      {icon && (
        <StatusIcon
          variant="negative"
          icon={<UserX2 aria-hidden="true" size={24} />}
          className="pk-oct-modal-heading__icon"
        />
      )}
      <div className="pk-oct-modal-heading__text">
        {category && (
          <span className="pk-oct-modal-heading__category pk-text-label-large">{category}</span>
        )}
        {type !== 'caption' ? (
          <h2 className={cx('pk-oct-modal-heading__title', TITLE_STYLE[type])}>{title}</h2>
        ) : (
          <span className={cx('pk-oct-modal-heading__title', TITLE_STYLE[type])}>{title}</span>
        )}
        {subtitle && <p className="pk-oct-modal-heading__subtitle pk-text-body-small">{subtitle}</p>}
      </div>
    </div>
  )
}
