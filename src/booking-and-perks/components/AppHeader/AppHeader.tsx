import React from 'react'
import { cx } from '../../../lib/cx'
import { Logo } from '../../../components/Logo/Logo'
import { StatusBar } from '../StatusBar/StatusBar'
import './AppHeader.css'

/**
 * Composition scaffold — Booking & Perks flow, not part of the core DS.
 * Figma: "App Header" (Web / Navigation & Layout), node 333:21199.
 *
 * A real `StatusBar` (time + signal/wifi/battery) above the header body,
 * which left-aligns the DS `Logo` wordmark with real padding — the
 * earlier version rendered a dashed `StatusBar` placeholder and centered
 * the logo, since this node wasn't scannable yet at the time.
 */
export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Shows the mobile OS status bar strip above the header content. @default true */
  showStatusBar?: boolean
}

export function AppHeader({ showStatusBar = true, className, ...rest }: AppHeaderProps) {
  return (
    <header className={cx('pk-app-header', className)} {...rest}>
      {showStatusBar && <StatusBar />}
      <div className="pk-app-header__content">
        <Logo size={156} />
      </div>
    </header>
  )
}
