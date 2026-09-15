import React from 'react'
import { StatusIcon } from '../../../components/StatusIcon/StatusIcon'
import { Toast } from '../../../components/Toast/Toast'
import { Button } from '../../../components/Button/Button'
import { AlertTriangle, X } from '../../../icons'
import './RemovePlayerModal.css'

export interface RemovePlayerModalProps {
  /** Figma: `Player 2` in "Player {n} won't be able to play on this booking". */
  playerName: string
  /** Figma: the "YOU MAY RECEIVE $20.00 REFUND" warning Toast — omitted when the
   * removed player carries no refundable amount. */
  refundAmount?: string
  onConfirm: () => void
  onKeep: () => void
  onClose?: () => void
  className?: string
}

/**
 * Booking-and-Perks composite (Figma: "OVERLAY" wrapping "Remove from Party",
 * node 4281:91417, https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/
 * Booking-and-Perks-Flow?node-id=4281-91417). A small confirmation dialog —
 * red `StatusIcon` badge, centered "REMOVE FROM PARTY" title + a per-player
 * subtitle, an optional warning `Toast` about a possible refund, then a
 * Primary "Yes, remove and review" / Tertiary "Keep in party" button pair.
 * Opened from `PlayerDetailModal`'s "Remove from party"/"Remove From Party"
 * action instead of removing the player immediately.
 */
export function RemovePlayerModal({
  playerName,
  refundAmount,
  onConfirm,
  onKeep,
  onClose,
  className,
}: RemovePlayerModalProps) {
  return (
    <div className="pk-remove-player-modal__overlay">
      <div className={`pk-remove-player-modal${className ? ` ${className}` : ''}`}>
        <button
          type="button"
          className="pk-remove-player-modal__close"
          aria-label="Close"
          onClick={onClose ?? onKeep}
        >
          <X aria-hidden="true" size={24} />
        </button>

        <div className="pk-remove-player-modal__header">
          <StatusIcon variant="negative" />
          <h2 className="pk-remove-player-modal__title pk-text-title-small-capital">Remove from Party</h2>
          <p className="pk-remove-player-modal__subtitle pk-text-body-small">
            {playerName} won&rsquo;t be able to play on this booking
          </p>
        </div>

        {refundAmount && (
          <Toast
            variant="warning"
            inverse
            icon={<AlertTriangle aria-hidden="true" />}
            title={`You may receive ${refundAmount} refund`}
            message="Your refund will be back to the card you paid with. Review your updated payment changes."
          />
        )}

        <div className="pk-remove-player-modal__actions">
          <Button variant="primary" onClick={onConfirm}>
            Yes, remove and review
          </Button>
          <Button variant="tertiary" onClick={onKeep}>
            Keep in party
          </Button>
        </div>
      </div>
    </div>
  )
}
