import React from 'react'
import { cx } from '../../../lib/cx'
import { Button } from '../../../components/Button/Button'
import { InputField } from '../../../components/InputField/InputField'
import { ArrowLeft, CheckCircle2, Pencil, X } from '../../../icons'
import './Registration.css'

/**
 * Composition scaffold for the Figma "Registration" component set (Web /
 * Child Components / Party & Registration, node 844:47365) — the largest
 * and most complex piece in this batch, so this file documents its
 * reasoning inline rather than only in this header.
 *
 * Figma variant property `Property 1` -> `variant`:
 * "Player Registered successfully" / "Register Player" / "Link Sent" /
 * "Guardian - i am guardian" / "Guardian - Another parent will complete".
 *
 * Captured instances (shared across variants, per the snapshot):
 * - `check-circle-2` (Lucide `CheckCircle2`) — success confirmation glyph.
 * - Four `Input Field` instances (Figma: `State=Typed, Mode=Mobile,
 *   Inverse=Yes`) bound to Display Name ("Alex"), Phone
 *   ("(•••) •••-0199"), Age Group ("Adult (21+)"), Date of Birth — the
 *   registration form fields, all rendered inverse per the capture.
 * - `Button / Type=Primary, Only Icon=True, Label="back to party"` — a
 *   persistent back-navigation control, present regardless of variant.
 * - `Button / Type=Tertiary, Only Icon=True, Label="Edit Details"` and
 *   `Button / Type=Ghost/Link, Only Icon=True, Label="Remove from party"`
 *   — management actions shown once a player record exists.
 *
 * The snapshot doesn't separate which buttons belong to which of the 5
 * variants (Figma flattens all instances used anywhere in the component
 * set into one list), so variant-to-content mapping below is inferred
 * from each variant's name and is intentionally conservative: the back
 * button always shows (structural nav), the form fields show only for the
 * two variants that require data entry, the success icon + Edit/Remove
 * pair show only for the "registered"/"guardian sent" variants where a
 * record already exists to manage, and "Link Sent" gets plain copy with
 * no icon since none was distinctly captured for it. No pixel layout is
 * assumed beyond that — see the CSS file's comment.
 *
 * Figma text styles: `Title/Medium` (headings), `Body/Small` (supporting
 * copy).
 */
export type RegistrationVariant =
  | 'registered-success'
  | 'register-player'
  | 'link-sent'
  | 'guardian-self'
  | 'guardian-other'

export interface RegistrationFieldValues {
  displayName?: string
  phone?: string
  ageGroup?: string
  dateOfBirth?: string
}

export interface RegistrationProps {
  /** Figma: `Property 1` variant. */
  variant: RegistrationVariant
  /** Heading shown at the top of the card. */
  title?: string
  /** Supporting copy for message-only variants (Link Sent / Guardian - Another parent). */
  message?: string
  /** Current field values — used by `register-player` and `guardian-self`. */
  values?: RegistrationFieldValues
  onFieldChange?: (field: keyof RegistrationFieldValues, value: string) => void
  onBackToParty?: () => void
  onEditDetails?: () => void
  onRemoveFromParty?: () => void
  className?: string
}

const TITLES: Record<RegistrationVariant, string> = {
  'registered-success': 'Player registered successfully',
  'register-player': 'Register player',
  'link-sent': 'Registration link sent',
  'guardian-self': "I'm the guardian",
  'guardian-other': 'Another parent will complete this',
}

export function Registration({
  variant,
  title = TITLES[variant],
  message,
  values = {},
  onFieldChange,
  onBackToParty,
  onEditDetails,
  onRemoveFromParty,
  className,
}: RegistrationProps) {
  const showForm = variant === 'register-player' || variant === 'guardian-self'
  const showSuccessIcon = variant === 'registered-success'
  const showManageActions = variant === 'registered-success' || variant === 'guardian-other'
  const showMessage = (variant === 'link-sent' || variant === 'guardian-other') && message

  return (
    <div className={cx('pk-registration', className)}>
      <div className="pk-registration__header">
        <Button
          variant="primary"
          onlyIcon
          leadingIcon={<ArrowLeft aria-hidden="true" />}
          onClick={onBackToParty}
          className="pk-registration__back"
        >
          Back to party
        </Button>

        <div className="pk-registration__heading">
          {showSuccessIcon && (
            <span className="pk-registration__success-icon" aria-hidden="true">
              <CheckCircle2 />
            </span>
          )}
          <span className="pk-registration__title pk-text-title-medium">{title}</span>
        </div>
      </div>

      {showMessage && <p className="pk-registration__message pk-text-body-small">{message}</p>}

      {showForm && (
        <div className="pk-registration__form">
          <InputField
            label="Display Name"
            inverse
            value={values.displayName ?? ''}
            onChange={(e) => onFieldChange?.('displayName', e.target.value)}
          />
          <InputField
            label="Phone"
            inverse
            value={values.phone ?? ''}
            onChange={(e) => onFieldChange?.('phone', e.target.value)}
          />
          <InputField
            label="Age Group"
            inverse
            value={values.ageGroup ?? ''}
            onChange={(e) => onFieldChange?.('ageGroup', e.target.value)}
          />
          <InputField
            label="Date of Birth"
            required
            inverse
            value={values.dateOfBirth ?? ''}
            onChange={(e) => onFieldChange?.('dateOfBirth', e.target.value)}
          />
        </div>
      )}

      {showManageActions && (
        <div className="pk-registration__actions">
          <Button
            variant="tertiary"
            onlyIcon
            leadingIcon={<Pencil aria-hidden="true" />}
            onClick={onEditDetails}
          >
            Edit Details
          </Button>
          <Button
            variant="ghost"
            onlyIcon
            leadingIcon={<X aria-hidden="true" />}
            onClick={onRemoveFromParty}
          >
            Remove from party
          </Button>
        </div>
      )}
    </div>
  )
}
