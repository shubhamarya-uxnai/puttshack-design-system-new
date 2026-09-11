import React, { useEffect, useState } from 'react'
import { InputField } from '../../../components/InputField/InputField'
import { Button } from '../../../components/Button/Button'
import { LocateFixed, MapPin, X, Minus, Plus } from '../../../icons'
import './LocationPlayerPicker.css'

export interface LocationPlayerPickerLocation {
  name: string
  address: string
}

export interface LocationPlayerPickerProps {
  /** Figma: the "Location" `InputField`'s typed value. */
  locationQuery?: string
  /** Figma: the selected-location result card (`Container` under "Background+Border"). Pass `null` to hide it. */
  selectedLocation?: LocationPlayerPickerLocation | null
  onClearLocation?: () => void
  /** Figma: the 5 `Date Picker Card` instances — `{ day, label }` pairs, e.g. `{ day: 'APR 20', label: 'Today' }`. */
  dates?: { day: string; label: string }[]
  /** Day (matching a `dates` entry's `day`) with no availability. @default the last date */
  disabledDate?: string
  /** Fires with the picked day whenever a date card is selected. */
  onDateSelect?: (day: string) => void
  /** Fires whenever the group-size counts change. */
  onGuestsChange?: (guests: { adults: number; youngAdults: number; juniors: number }) => void
  className?: string
}

const DEFAULT_DATES = [
  { day: 'APR 20', label: 'Today' },
  { day: 'APR 21', label: 'Tomorrow' },
  { day: 'APR 22', label: 'Wed' },
  { day: 'APR 23', label: 'Thu' },
  { day: 'APR 24', label: 'Fri' },
]

/**
 * Booking-and-Perks composite (Figma: "Location & Player Picker", node
 * 5000:149754 on the "Unlimited Round — Default Package Selection" screen).
 * DS `InputField` for the location search + a Group Size quantity-stepper
 * block + a row of Date Picker Cards, all on the dark magenta card surface.
 * Group size starts at 0/0/0; the Minus control stays disabled at 0 per the
 * Figma annotation and the "Add at least 1 player to check availability"
 * helper text. Date cards are all disabled while `total === 0`; once a
 * player is added they become enabled but nothing is pre-selected — the
 * visitor has to click one — except one date (`disabledDate`, no real
 * availability data exists yet so it defaults to the last one) which stays
 * unavailable regardless of group size.
 */
export function LocationPlayerPicker({
  locationQuery = 'Chicago, IL',
  selectedLocation = { name: 'Chicago, IL', address: 'Oakbrook Center · 60523' },
  onClearLocation,
  dates = DEFAULT_DATES,
  disabledDate,
  onDateSelect,
  onGuestsChange,
  className,
}: LocationPlayerPickerProps) {
  const [adults, setAdults] = useState(0)
  const [youngAdults, setYoungAdults] = useState(0)
  const [juniors, setJuniors] = useState(0)
  const [location, setLocation] = useState(selectedLocation)
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)

  useEffect(() => {
    onGuestsChange?.({ adults, youngAdults, juniors })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adults, youngAdults, juniors])

  const unavailableDay = disabledDate ?? dates[dates.length - 1]?.day

  const total = adults + youngAdults + juniors
  const hasPlayers = total > 0

  const rows: {
    key: string
    label: string
    range: string
    value: number
    set: React.Dispatch<React.SetStateAction<number>>
  }[] = [
    { key: 'adults', label: 'Adults', range: '21+', value: adults, set: setAdults },
    { key: 'young-adults', label: 'Young Adults', range: '13-20', value: youngAdults, set: setYoungAdults },
    { key: 'juniors', label: 'Juniors', range: '0-12', value: juniors, set: setJuniors },
  ]

  return (
    <div className={`pk-location-player-picker${className ? ` ${className}` : ''}`}>
      <div className="pk-location-player-picker__section">
        <h3 className="pk-location-player-picker__heading pk-text-title-medium">Where &amp; When</h3>
        <InputField
          label="LOCATION"
          required
          inverse
          value={locationQuery}
          readOnly
          trailingIcon={<LocateFixed aria-hidden="true" />}
        />
        {location && (
          <div className="pk-location-player-picker__result">
            <div>
              <div className="pk-location-player-picker__result-name pk-text-title-small">
                <MapPin aria-hidden="true" size={12} />
                <span>{location.name}</span>
              </div>
              <p className="pk-location-player-picker__result-address pk-text-body-small">{location.address}</p>
            </div>
            <button
              type="button"
              className="pk-location-player-picker__result-close"
              aria-label={`Remove ${location.name}`}
              onClick={() => {
                setLocation(null)
                onClearLocation?.()
              }}
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="pk-location-player-picker__section">
        <div className="pk-location-player-picker__group-label">
          <div>
            <h3 className="pk-location-player-picker__heading pk-text-title-medium">Group Size</h3>
            <p className="pk-location-player-picker__group-help pk-text-label-small">How many people will be playing?</p>
          </div>
          <p className="pk-location-player-picker__group-total pk-text-body-small">
            <span className="pk-text-label-x-small">Total:</span> {total} Guests
          </p>
        </div>

        <div className="pk-location-player-picker__rows">
          {rows.map((row, i) => (
            <React.Fragment key={row.key}>
              <div className="pk-location-player-picker__row">
                <div className="pk-location-player-picker__row-label pk-text-body-small">
                  <span>{row.label}</span>
                  <span className="pk-location-player-picker__row-range pk-text-label-x-small">{row.range}</span>
                </div>
                <div className="pk-location-player-picker__stepper">
                  <button
                    type="button"
                    className="pk-location-player-picker__stepper-btn pk-location-player-picker__stepper-btn--minus"
                    aria-label={`Remove one ${row.label}`}
                    disabled={row.value === 0}
                    onClick={() => row.set((v) => Math.max(0, v - 1))}
                  >
                    <Minus aria-hidden="true" size={18} />
                  </button>
                  <span className="pk-location-player-picker__stepper-value pk-text-title-medium">{row.value}</span>
                  <button
                    type="button"
                    className="pk-location-player-picker__stepper-btn pk-location-player-picker__stepper-btn--plus"
                    aria-label={`Add one ${row.label}`}
                    onClick={() => row.set((v) => v + 1)}
                  >
                    <Plus aria-hidden="true" size={18} />
                  </button>
                </div>
              </div>
              {i < rows.length - 1 && <div className="pk-location-player-picker__divider" />}
            </React.Fragment>
          ))}
        </div>
        <p className="pk-location-player-picker__group-hint pk-text-label-small">Add at least 1 player to check availability.</p>
      </div>

      <div className="pk-location-player-picker__section">
        <h3 className="pk-location-player-picker__heading pk-text-title-medium">Select Date</h3>
        <div className="pk-location-player-picker__dates">
          {dates.map((d) => {
            const isDisabled = !hasPlayers || d.day === unavailableDay
            const isSelected = !isDisabled && d.day === selectedDate
            return (
              <button
                type="button"
                key={d.day}
                className={`pk-location-player-picker__date-card${
                  isSelected ? ' pk-location-player-picker__date-card--selected' : ''
                }`}
                disabled={isDisabled}
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedDate(d.day)
                  onDateSelect?.(d.day)
                }}
              >
                <span className="pk-location-player-picker__date-label pk-text-label-x-small">{d.label}</span>
                <span className="pk-location-player-picker__date-day pk-text-title-large">{d.day}</span>
              </button>
            )
          })}
        </div>
        <Button variant="tertiary" inverse disabled={!hasPlayers} className="pk-location-player-picker__calendar-btn">
          See Full Calendar
        </Button>
      </div>
    </div>
  )
}
