import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { Toast } from '../../../components/Toast/Toast'
import { Stepper } from '../../../components/Stepper/Stepper'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import { Info } from '../../../icons'
import './Modal.css'

/** Figma variant property `Property 1`. */
export type ModalVariant = 'default' | 'variant2'

export interface ModalProps {
  /** Figma: `Property 1`. @default 'default' */
  variant?: ModalVariant
  /** Body slot content (Figma: `Body#4199:77` SLOT property). */
  children?: React.ReactNode
  /** Figma: `Body2#4199:81` boolean — a second body region, off by default in this scaffold since no data describes its content. @default false */
  showSecondaryBody?: boolean
  secondaryBody?: React.ReactNode
  /** Figma: `Button Group#4199:79` boolean. @default true */
  showButtonGroup?: boolean
  /** Figma: `Information#4199:82` text + `information#4199:83` boolean toggle. */
  showInformation?: boolean
  information?: string
  /** Figma: `Is 2nd Modal#4199:78` boolean — shows the "BACK" tertiary button in the header. @default false */
  isSecondModal?: boolean
  /** Figma: `TnC#4538:21` boolean — shows the `TermsAndConditions` composite inline. @default false */
  showTnC?: boolean
  /** Figma: `Toast#4199:80` boolean. @default false */
  showToast?: boolean
  toastMessage?: React.ReactNode
  title?: string
  subtitle?: string
  primaryLabel?: string
  onPrimaryAction?: () => void
  secondaryLabel?: string
  onSecondaryAction?: () => void
  linkLabel?: string
  onLinkAction?: () => void
  onBack?: () => void
  onAdd?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "Modal"). A generic modal shell built
 * from DS `Button`, `Toast` and this batch's `TermsAndConditions` — plus a
 * `children` slot for the `Body` content, per the task brief. The captured
 * "Modal Headings" instance is a separate October Release component being
 * built by another agent in this batch run — placeholdered here.
 */
export function Modal({
  variant = 'default',
  children,
  showSecondaryBody = false,
  secondaryBody,
  showButtonGroup = true,
  showInformation = false,
  information = "Heads up — adding this player adds $20.00 to your reservation. You'll review & confirm the new total on the next screen.",
  isSecondModal = false,
  showTnC = false,
  showToast = false,
  toastMessage,
  primaryLabel = 'Pay $100.00 & confirm',
  secondaryLabel = 'Keep Editing',
  onPrimaryAction,
  onSecondaryAction,
  linkLabel = 'Cancel changes',
  onLinkAction,
  onBack,
  onAdd,
  className,
}: ModalProps) {
  return (
    <div className="pk-modal__overlay">
      <div className={cx('pk-modal', `pk-modal--${variant}`, className)} role="dialog" aria-modal="true">
        {isSecondModal && (
          <Button variant="tertiary" inverse onlyIcon onClick={onBack}>
            BACK
          </Button>
        )}

        {/* TODO: replace with <ModalHeadings> from booking-and-perks/components once built */}
        <div className="pk-placeholder">Modal Headings</div>

        {showInformation && (
          <div className="pk-modal__info-banner">
            <Info aria-hidden="true" />
            <span className="pk-text-label-small">{information}</span>
          </div>
        )}

        <div className="pk-modal__body">{children}</div>

        {showSecondaryBody && secondaryBody && <div className="pk-modal__body-secondary">{secondaryBody}</div>}

        {showToast && (
          <Toast
            variant="informative"
            inverse
            icon={<Info aria-hidden="true" />}
            message={toastMessage ?? information}
          />
        )}

        {showTnC && <TermsAndConditions />}

        {showButtonGroup && (
          <div className="pk-modal__button-group">
            <Button variant="primary" onClick={onPrimaryAction}>
              {primaryLabel}
            </Button>
            <Button variant="tertiary" inverse onClick={onSecondaryAction}>
              {secondaryLabel}
            </Button>
            <Button variant="ghost" onClick={onLinkAction}>
              {linkLabel}
            </Button>
          </div>
        )}

        <Stepper direction="add" aria-label="Add" onClick={onAdd} />
      </div>
    </div>
  )
}
