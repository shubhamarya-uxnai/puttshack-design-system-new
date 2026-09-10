import React from 'react'
import { Badge } from '../../../components/Badge/Badge'
import type { BadgeStatus } from '../../../components/Badge/Badge'

/**
 * Composition scaffold for the Figma "Registration Status Badge" component
 * set (Web / Child Components / Party & Registration, node 4261:215658).
 *
 * Figma's own captured instance is literally `Badge / Type=Small,
 * Status=Success` — this component set is a thin variant wrapper around the
 * DS `Badge`, not a new atom. No new CSS file: all visuals come from
 * `Badge.css`.
 *
 * Figma variant property `Property 1` -> our `status` prop. Mapped to the
 * closest DS `BadgeStatus` + label by meaning (no 1:1 Figma capture for the
 * other 4 states' exact Badge status, since only "Registered" was
 * instanced) — flagged here rather than guessed pixel detail.
 */
export type RegistrationStatus = 'not-registered' | 'registered' | 'guardian' | 'link-sent' | 'in-progress'

const STATUS_MAP: Record<RegistrationStatus, { badgeStatus: BadgeStatus; label: string }> = {
  'not-registered': { badgeStatus: 'disabled', label: 'Not Registered' },
  registered: { badgeStatus: 'success', label: 'Registered' },
  guardian: { badgeStatus: 'linked', label: 'Guardian' },
  'link-sent': { badgeStatus: 'linked-secondary', label: 'Link Sent' },
  'in-progress': { badgeStatus: 'warning', label: 'In Progress' },
}

export interface RegistrationStatusBadgeProps {
  /** Figma: `Property 1` variant. @default 'not-registered' */
  status?: RegistrationStatus
  className?: string
}

export function RegistrationStatusBadge({ status = 'not-registered', className }: RegistrationStatusBadgeProps) {
  const { badgeStatus, label } = STATUS_MAP[status]
  return (
    <Badge type="small" status={badgeStatus} className={className}>
      {label}
    </Badge>
  )
}
