import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { Toast } from '../../../components/Toast/Toast'
import { Stepper } from '../../../components/Stepper/Stepper'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import { Info, X, ChevronLeft } from '../../../icons'
import './Modal.css'

/** Figma variant property `Property 1`. */
export type ModalVariant = 'default' | 'variant2'

export interface ModalProps {
  /** Figma: `Property 1`. @default 'default' */
  variant?: ModalVariant
  /** Modal Headings text (node 4199:161760 inside this Modal — a different, simpler
   * shape than the standalone `ModalHeadings` DS component: just a small-caps title
   * + a body subtitle, no eyebrow category or icon). */
  title?: string
  subtitle?: string
  /** Body slot content (Figma: `Body#4199:77` SLOT property). */
  children?: React.ReactNode
  /** Figma: `Body2#4199:81` boolean — a second body region, off by default in this scaffold since no data describes its content. @default false */
  showSecondaryBody?: boolean
  secondaryBody?: React.ReactNode
  /** Figma: `Button Group#4199:79` boolean. @default true */
  showButtonGroup?: boolean
  /** Figma: `Information#4199:82` slot + `information#4199:83` boolean toggle. Real
   * captures show two different shapes here (a plain icon+text row with no
   * background, and a checkbox+text confirmation row) — so this takes the whole
   * row as a node rather than a fixed icon+string, and renders no box of its own. */
  showInformation?: boolean
  information?: React.ReactNode
  /** Figma: `Is 2nd Modal#4199:78` boolean — shows the "BACK" tertiary button in the header. @default false */
  isSecondModal?: boolean
  /** Figma: `TnC#4538:21` boolean — shows the `TermsAndConditions` composite inline. @default false */
  showTnC?: boolean
  /** Figma: `Toast#4199:80` boolean. @default false */
  showToast?: boolean
  toastMessage?: React.ReactNode
  primaryLabel?: string
  /** Leading icon on the primary button (e.g. the message icon on "Share via Text"). */
  primaryIcon?: React.ReactNode
  onPrimaryAction?: () => void
  secondaryLabel?: string
  /** Leading icon on the secondary button (e.g. the mail icon on "Share via Email"). */
  secondaryLeadingIcon?: React.ReactNode
  /** Trailing icon on the secondary button (e.g. the "+" on "Add more player"). */
  secondaryIcon?: React.ReactNode
  onSecondaryAction?: () => void
  /** The third, "ghost/link" button in the group — real capture default is "Cancel
   * changes", but plenty of real usages (e.g. the T&C overlay) only have 2 buttons,
   * so this is opt-in via a label rather than always rendered. */
  linkLabel?: string
  /** Leading icon on the ghost/link button (e.g. the "X" on "Remove from party" in the
   * link-sent player state — the not-yet-sent state's "Remove From Party" has no icon). */
  linkIcon?: React.ReactNode
  onLinkAction?: () => void
  onBack?: () => void
  /** Figma: the "Add" close ("X") button, top-right of every real capture. */
  onClose?: () => void
  /** Figma: the Stepper("Add") instance seen in this scaffold's original capture —
   * not present in either of the two real captures this session verified (the
   * "Review your changes" default and the T&C overlay), so off by default. */
  showStepper?: boolean
  onAdd?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Modal", node 4199:164515,
 * https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-164515).
 * A generic modal shell: an "X" close button, a Modal Header (optional
 * "BACK" for stacked/second modals, then title + subtitle), a `children`
 * body slot, optional info banner / toast / inline `TermsAndConditions`,
 * and a button group (primary, tertiary secondary, optional ghost link).
 * Renders its own fixed, centered backdrop — nothing else needs to wrap it.
 *
 * Real resolved variables (`get_variable_defs` on both the generic "Review
 * your changes" capture, node 4195:161696, and the Terms & Conditions
 * overlay instance, node 4281:91061) confirm this card is always a plain
 * white `Background/Default` card with dark text throughout — including
 * "Interactive/Tertiary-Inverse/Text" resolving to `#0e0115` (dark), not
 * white. There's no real dark/inverse variant of this Modal; an earlier
 * pass here added one from eyeballing a design-context screenshot whose
 * dark canvas backdrop was misread as the modal's own fill.
 */
export function Modal({
  variant = 'default',
  title,
  subtitle,
  children,
  showSecondaryBody = false,
  secondaryBody,
  showButtonGroup = true,
  showInformation = false,
  information,
  isSecondModal = false,
  showTnC = false,
  showToast = false,
  toastMessage,
  primaryLabel = 'Pay $100.00 & confirm',
  primaryIcon,
  secondaryLabel,
  secondaryLeadingIcon,
  secondaryIcon,
  onPrimaryAction,
  onSecondaryAction,
  linkLabel,
  linkIcon,
  onLinkAction,
  onBack,
  onClose,
  showStepper = false,
  onAdd,
  className,
}: ModalProps) {
  return (
    <div className="pk-modal__overlay">
      <div className={cx('pk-modal', `pk-modal--${variant}`, className)} role="dialog" aria-modal="true">
        <button type="button" className="pk-modal__close" aria-label="Close" onClick={onClose}>
          <X aria-hidden="true" size={24} />
        </button>

        {(isSecondModal || title || subtitle) && (
          <div className="pk-modal__header">
            {isSecondModal && (
              <button type="button" className="pk-modal__back" onClick={onBack}>
                <ChevronLeft aria-hidden="true" size={20} />
                Back
              </button>
            )}
            {title && <h2 className="pk-modal__title pk-text-title-small-capital">{title}</h2>}
            {subtitle && <p className="pk-modal__subtitle pk-text-body-small">{subtitle}</p>}
          </div>
        )}

        {children && <div className="pk-modal__body">{children}</div>}

        {showSecondaryBody && secondaryBody && <div className="pk-modal__body-secondary">{secondaryBody}</div>}

        {showInformation && information && <div className="pk-modal__info-row">{information}</div>}

        {showToast && toastMessage && (
          <Toast variant="informative" inverse icon={<Info aria-hidden="true" />} message={toastMessage} />
        )}

        {showTnC && <TermsAndConditions />}

        {showButtonGroup && (
          <div className="pk-modal__button-group">
            <Button variant="primary" leadingIcon={primaryIcon} onClick={onPrimaryAction}>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button
                variant="tertiary"
                leadingIcon={secondaryLeadingIcon}
                trailingIcon={secondaryIcon}
                onClick={onSecondaryAction}
              >
                {secondaryLabel}
              </Button>
            )}
            {linkLabel && (
              <Button variant="ghost" leadingIcon={linkIcon} onClick={onLinkAction}>
                {linkLabel}
              </Button>
            )}
          </div>
        )}

        {showStepper && <Stepper direction="add" aria-label="Add" onClick={onAdd} />}
      </div>
    </div>
  )
}
