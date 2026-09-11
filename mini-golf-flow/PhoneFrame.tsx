import React, { useState } from 'react'
import { Sun, Moon } from '../src/icons'
import './PhoneFrame.css'

export interface PhoneFrameProps {
  children: React.ReactNode
}

/**
 * Shared prototype scaffold — a solid-color backdrop with an iPhone-shaped
 * device frame (402×874pt screen, home indicator) around the screen
 * content. The frame markup/dimensions are ported from the real reference
 * mockup at https://takoha-test.com/squad-up-armory/ (scraped via its
 * inline styles: a solid-black 412×872 shell at `border-radius: 52px` with
 * `padding: 11px`, a `0 40px 120px rgba(0,0,0,.6)` drop shadow plus a
 * `0 0 0 2px rgb(42,43,46)` hairline edge ring, wrapping a 390×850 inner
 * screen at `border-radius: 42px` — scaled up proportionally to this flow's
 * 402×874 screen size). That reference has no Dynamic Island or visible
 * side buttons, just the plain status-bar text baked into each screen, so
 * this frame doesn't render either. Built once; every screen in this flow
 * renders inside it rather than each screen re-implementing its own frame.
 *
 * Owns the light/dark toggle for the whole demo — sets `data-theme` on the
 * phone itself so every --pk-sys-* token inside (tokens.css's real
 * [data-theme="dark"] block, sourced live from Figma's Dark semantic mode)
 * switches. Known caveat: this flow's screens were styled with tokens
 * chosen as a fixed dark look (matching the real Figma design), not built
 * as a true light/dark pair, so the "light" toggle state reflects the real
 * semantic token values rather than a curated alternate layout — some
 * elements (e.g. the Stepper's icon-on-white contrast) aren't tuned for it.
 */
export function PhoneFrame({ children }: PhoneFrameProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className="pk-proto-backdrop">
      <button
        type="button"
        className="pk-proto-theme-toggle"
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
        <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
      </button>

      <div className="pk-proto-phone-shell">
        <div className="pk-proto-phone" data-theme={theme}>
          <div className="pk-proto-phone__screen">{children}</div>
          <div className="pk-proto-phone__home-indicator" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
