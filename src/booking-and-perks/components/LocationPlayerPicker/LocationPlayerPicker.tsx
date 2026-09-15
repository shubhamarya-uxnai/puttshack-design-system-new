import React, { useEffect, useState } from 'react'
import { InputField } from '../../../components/InputField/InputField'
import { Button } from '../../../components/Button/Button'
import { LocateFixed, MapPin, X, Minus, Plus } from '../../../icons'
import './LocationPlayerPicker.css'

export interface LocationPlayerPickerLocation {
  name: string
  address: string
}

/** Figma: `Interactive/Disabled` on the Group Size stepper — 12 guests is the cap for a
 * standard (non-event) booking (node 4281:91078: "You've reached the maximum amount of
 * 12 guests for a standard booking" + a "Plan an event for 12+ guest" CTA). */
const MAX_GUESTS = 12

/** Demo-only location suggestions — this app has no real places API, so the dropdown
 * (and the locate-icon's "nearest location") both resolve to fixed sample data. */
const DEMO_LOCATIONS: LocationPlayerPickerLocation[] = [
  { name: 'Chicago, IL', address: 'Oakbrook Center · 60523' },
  { name: 'Chicago, IL', address: 'River North · 60654' },
  { name: 'Schaumburg, IL', address: 'Woodfield Mall · 60173' },
  { name: 'Naperville, IL', address: 'Downtown Naperville · 60540' },
]

const NEAREST_LOCATION = DEMO_LOCATIONS[0]

export interface LocationPlayerPickerProps {
  /** Figma: the selected-location result card (`Container` under "Background+Border").
   * @default null — no location is preselected; the guest picks one from the dropdown
   * or taps the locate icon for the (demo) nearest location. */
  selectedLocation?: LocationPlayerPickerLocation | null
  onClearLocation?: () => void
  /** Fires whenever the picked location changes — `null` once cleared/unselected. */
  onLocationChange?: (location: LocationPlayerPickerLocation | null) => void
  /** Figma: the 5 `Date Picker Card` instances — `{ day, label }` pairs, e.g. `{ day: 'APR 20', label: 'Today' }`. */
  dates?: { day: string; label: string }[]
  /** Day (matching a `dates` entry's `day`) with no availability. @default the last date */
  disabledDate?: string
  /** Fires with the picked day whenever a date card is selected. */
  onDateSelect?: (day: string) => void
  /** Fires whenever the group-size counts change. */
  onGuestsChange?: (guests: { adults: number; youngAdults: number; juniors: number }) => void
  /** Figma: "Plan an event for 12+ guest" — shown once the 12-guest cap is hit. */
  onPlanEvent?: () => void
  /** Opens the Full Calendar modal (node 4281:91048). */
  onViewCalendar?: () => void
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
 * 5000:149754 on the "Unlimited Round — Default Package Selection" screen,
 * and node 4281:91078 for the maxed-out Group Size state). DS `InputField`
 * for the location search + a Group Size quantity-stepper block + a row of
 * Date Picker Cards, all on the dark magenta card surface.
 *
 * Location starts empty (not preselected) and focused/typed-into shows a
 * demo suggestions dropdown; picking one shows the real result card below
 * with a working "X" to clear it, and the input's trailing locate icon
 * jumps straight to a fixed "nearest location" — both real interactions,
 * backed by demo data since this app has no real places API.
 *
 * Group size starts at 0/0/0; each row's Minus stays disabled at 0 (both
 * Minus and Plus otherwise share the same real active look — a previous
 * pass had Minus permanently styled with the disabled tokens, so it never
 * looked active once incremented). Every row's Plus disables once the
 * total hits the real 12-guest cap, and the real "maxed out" copy + "Plan
 * an event for 12+ guest" button (node 4281:91078) appear in its place.
 */
export function LocationPlayerPicker({
  selectedLocation = null,
  onClearLocation,
  onLocationChange,
  dates = DEFAULT_DATES,
  disabledDate,
  onDateSelect,
  onGuestsChange,
  onPlanEvent,
  onViewCalendar,
  className,
}: LocationPlayerPickerProps) {
  const [adults, setAdults] = useState(0)
  const [youngAdults, setYoungAdults] = useState(0)
  const [juniors, setJuniors] = useState(0)
  const [location, setLocation] = useState(selectedLocation)
  const [query, setQuery] = useState(selectedLocation?.name ?? '')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)

  useEffect(() => {
    onGuestsChange?.({ adults, youngAdults, juniors })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adults, youngAdults, juniors])

  const unavailableDay = disabledDate ?? dates[dates.length - 1]?.day

  const total = adults + youngAdults + juniors
  const hasPlayers = total > 0
  const atMaxGuests = total >= MAX_GUESTS
  // Figma node 4281:91078: juniors can't book unsupervised — the hint below the steppers
  // swaps to this warning as soon as a junior is added without a chaperoning Adult/Young Adult.
  const juniorsNeedChaperone = juniors > 0 && adults === 0 && youngAdults === 0

  function selectLocation(next: LocationPlayerPickerLocation) {
    setLocation(next)
    setQuery(next.name)
    setShowSuggestions(false)
    onLocationChange?.(next)
  }

  const suggestions = DEMO_LOCATIONS.filter((l) =>
    query.trim() ? l.name.toLowerCase().includes(query.trim().toLowerCase()) : true
  )

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
        <div className="pk-location-player-picker__location-field">
          <InputField
            label="LOCATION"
            required
            inverse
            placeholder="Search city, state, or zip"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
            trailingIcon={
              <button
                type="button"
                className="pk-location-player-picker__locate-btn"
                aria-label="Use my current location"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectLocation(NEAREST_LOCATION)}
              >
                <LocateFixed aria-hidden="true" />
              </button>
            }
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="pk-location-player-picker__suggestions">
              {suggestions.map((s) => (
                <li key={`${s.name}-${s.address}`}>
                  <button
                    type="button"
                    className="pk-location-player-picker__suggestion"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectLocation(s)}
                  >
                    <MapPin aria-hidden="true" size={16} />
                    <span>
                      <span className="pk-location-player-picker__suggestion-name pk-text-title-small">
                        {s.name}
                      </span>
                      <span className="pk-location-player-picker__suggestion-address pk-text-body-small">
                        {s.address}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
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
                setQuery('')
                onClearLocation?.()
                onLocationChange?.(null)
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
                    disabled={atMaxGuests}
                    onClick={() => row.set((v) => Math.min(MAX_GUESTS, v + 1))}
                  >
                    <Plus aria-hidden="true" size={18} />
                  </button>
                </div>
              </div>
              {i < rows.length - 1 && <div className="pk-location-player-picker__divider" />}
            </React.Fragment>
          ))}
        </div>
        {atMaxGuests ? (
          <>
            <p className="pk-location-player-picker__group-hint pk-location-player-picker__group-hint--max pk-text-body-small">
              You&rsquo;ve reached the maximum amount of 12 guests for a standard booking
            </p>
            <Button variant="secondary" onClick={onPlanEvent} className="pk-location-player-picker__plan-event-btn">
              Plan an event for 12+ guest
            </Button>
          </>
        ) : juniorsNeedChaperone ? (
          <p className="pk-location-player-picker__group-hint pk-location-player-picker__group-hint--max pk-text-body-small">
            Juniors must be accompanied by at least one Adult or Young Adult.
          </p>
        ) : !hasPlayers ? (
          <p className="pk-location-player-picker__group-hint pk-text-label-small">
            Add at least 1 player to check availability.
          </p>
        ) : null}
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
        <Button
          variant="tertiary"
          inverse
          disabled={!hasPlayers}
          onClick={onViewCalendar}
          className="pk-location-player-picker__calendar-btn"
        >
          See Full Calendar
        </Button>
      </div>
    </div>
  )
}
