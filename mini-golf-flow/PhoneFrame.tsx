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
