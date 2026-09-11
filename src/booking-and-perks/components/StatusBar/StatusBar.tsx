import React from 'react'
import { SignalHigh, Wifi, BatteryFull } from '../../../icons'
import './StatusBar.css'

export interface StatusBarProps {
  /** @default '10:01' */
  time?: string
  className?: string
}

/**
 * The mobile OS status bar strip at the top of "App Header" (Figma node
 * 333:21199, instance "Status Bar / Dark=False") — time on the left,
 * cellular/wifi/battery on the right. This is OS chrome, not a Puttshack
 * component, so the real capture's bespoke bar-level icon vectors are
 * stood in for with the closest Lucide equivalents (`SignalHigh`, `Wifi`,
 * `BatteryFull`) rather than hand-tracing iOS glyphs.
 */
export function StatusBar({ time = '10:01', className }: StatusBarProps) {
  return (
    <div className={`pk-status-bar${className ? ` ${className}` : ''}`}>
      <span className="pk-status-bar__time">{time}</span>
      <div className="pk-status-bar__icons">
        <SignalHigh aria-hidden="true" size={16} />
        <Wifi aria-hidden="true" size={16} />
        <BatteryFull aria-hidden="true" size={20} />
      </div>
    </div>
  )
}
