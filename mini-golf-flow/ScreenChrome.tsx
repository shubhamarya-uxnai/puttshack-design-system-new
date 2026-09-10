import React from 'react'
import { ChevronLeft } from '../src/icons'
import './ScreenChrome.css'

/**
 * Small screen-local furniture shared by all 3 flow screens — a back
 * button + title row, and a step progress indicator. Figma shows these as
 * "Page Title Container" and "Stepper" instances inside each screen's
 * content column; neither is one of the 45 built October Release
 * components, so per the established convention (see BookingRegistration
 * screen) they're hardcoded locally here rather than promoted into
 * src/booking-and-perks/components.
 */
export function PageTitle({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <div className="pk-proto-page-title">
      {onBack && (
        <button type="button" className="pk-proto-page-title__back" onClick={onBack} aria-label="Back">
          <ChevronLeft aria-hidden="true" />
        </button>
      )}
      <h1 className="pk-proto-page-title__text pk-text-headline-small">{title}</h1>
    </div>
  )
}

export function StepProgress({ step, of }: { step: number; of: number }) {
  return (
    <div className="pk-proto-step-progress" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={of}>
      {Array.from({ length: of }).map((_, i) => (
        <span key={i} className={`pk-proto-step-progress__bar${i < step ? ' pk-proto-step-progress__bar--done' : ''}`} />
      ))}
    </div>
  )
}
