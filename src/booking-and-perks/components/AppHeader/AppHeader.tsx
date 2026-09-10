import React from 'react'
import { cx } from '../../../lib/cx'
import { Logo } from '../../../components/Logo/Logo'
import './AppHeader.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "App Header" (Web / Navigation & Layout), node 333:21199.
 *
 * DS usage:
 * - `Logo` — the capture's single instance is `Status Bar / Dark=False`,
 *   the mobile OS status bar strip, not a wordmark component; there is no
 *   "Status Bar" scaffold in booking-and-perks/components (it's an OS
 *   chrome element, not a Puttshack component) so it renders as a
 *   `pk-placeholder` below. The DS `Logo` component is used for the actual
 *   Puttshack wordmark in the header body, per the header's role as
 *   top-level app navigation.
 */
export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Shows the mobile OS status bar strip above the header content. @default true */
  showStatusBar?: boolean
}

export function AppHeader({ showStatusBar = true, className, ...rest }: AppHeaderProps) {
  return (
    <header className={cx('pk-app-header', className)} {...rest}>
      {showStatusBar && (
        // TODO: replace with <StatusBar> from booking-and-perks/components once built
        <div className="pk-placeholder pk-app-header__status-bar">Status Bar</div>
      )}
      <div className="pk-app-header__content">
        <Logo size={104} />
      </div>
    </header>
  )
}
