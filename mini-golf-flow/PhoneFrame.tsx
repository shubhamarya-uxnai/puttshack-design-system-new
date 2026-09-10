import React from 'react'
import './PhoneFrame.css'

export interface PhoneFrameProps {
  children: React.ReactNode
}

/**
 * Shared prototype scaffold — a solid-color backdrop with an iPhone 14
 * shaped device frame (390×844pt, Dynamic Island, home indicator) around
 * the screen content. Built once; every screen in this flow renders inside
 * it rather than each screen re-implementing its own frame.
 *
 * No light/dark toggle here — this flow's dark styling matches the actual
 * Figma design (confirmed against a reference screenshot), and the
 * "Interactive Mini Golf" section has no real light-mode variant to switch
 * to. Adding one would mean inventing a look Figma doesn't have, not
 * reflecting it. The system-level dark mode tokens (tokens.css's
 * [data-theme="dark"] block, sourced from Figma's real Dark semantic mode)
 * are a separate, legitimate feature — untouched here.
 */
export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="pk-proto-backdrop">
      <div className="pk-proto-phone">
        <div className="pk-proto-phone__island" aria-hidden="true" />
        <div className="pk-proto-phone__screen">{children}</div>
        <div className="pk-proto-phone__home-indicator" aria-hidden="true" />
      </div>
    </div>
  )
}
