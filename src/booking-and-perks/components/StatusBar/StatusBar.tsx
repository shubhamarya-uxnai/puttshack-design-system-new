import React from 'react'
import { SignalHigh, Wifi, BatteryFull } from '../../../icons'
import { DEMO_NOW_LABEL } from '../../utils/timeSlots'
import './StatusBar.css'

/** Drops the "AM"/"PM" suffix — the OS status bar shows a bare "10:01", not "10:01 AM". */
const DEFAULT_TIME = DEMO_NOW_LABEL.replace(/\s*(AM|PM)$/i, '')

export interface StatusBarProps {
  /** Kept in sync with `DEMO_NOW_LABEL` (see `utils/timeSlots`) so the clock shown here matches
   * the "past times are disabled" logic driving the Time Slot Picker. @default '10:01' */
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
export function StatusBar({ time = DEFAULT_TIME, className }: StatusBarProps) {
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
