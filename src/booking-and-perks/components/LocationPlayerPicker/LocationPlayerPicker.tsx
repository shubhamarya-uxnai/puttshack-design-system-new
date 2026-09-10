import React from 'react'
import { cx } from '../../../lib/cx'
import { Search, MapPin, X, Navigation } from '../../../icons'
import { InputField } from '../../../components/InputField/InputField'
import { Stepper } from '../../../components/Stepper/Stepper'
import { Button } from '../../../components/Button/Button'
import './LocationPlayerPicker.css'

/**
 * "Location & Player Picker" (Figma: booking-and-perks, loc "Web / Pickers",
 * node 4435:179205). One of the 3 October Release components that could
 * never be scanned — the transport limitation documented in
 * figma-changes-command.md meant zero composition data was ever captured
 * for it, so it originally shipped as a bare placeholder.
 *
 * Rebuilt 2026-09-11 from a real reference screenshot the user supplied
 * (not from Figma capture data — flagged here since it doesn't carry the
 * same verified-against-source guarantee as the other 44 components).
 * Composes DS `InputField` (location search), DS `Stepper` (age-group
 * counts), and DS `Button` (See full calendar) — no new DS atoms.
 */
export interface AgeGroupCount {
  label: string
  ageRange: string
  count: number
}

export interface DateOption {
  label: string
  day: string
  date: string
}

export interface LocationPlayerPickerProps {
  location?: string
  locationDetail?: string
  onRemoveLocation?: () => void
  ageGroups?: AgeGroupCount[]
  onChangeAgeGroup?: (index: number, delta: number) => void
  dateOptions?: DateOption[]
  selectedDateIndex?: number
  onSelectDate?: (index: number) => void
  onSeeFullCalendar?: () => void
}

const DEFAULT_AGE_GROUPS: AgeGroupCount[] = [
  { label: 'Adults', ageRange: '21+', count: 0 },
  { label: 'Young Adults', ageRange: '13-20', count: 0 },
  { label: 'Juniors', ageRange: '0-12', count: 0 },
]

const DEFAULT_DATES: DateOption[] = [
  { label: 'Today', day: 'Apr', date: '20' },
  { label: 'Tomorrow', day: 'Apr', date: '21' },
  { label: 'Wed', day: 'Apr', date: '22' },
  { label: 'Thu', day: 'Apr', date: '23' },
]

export function LocationPlayerPicker({
  location = 'Chicago, IL',
  locationDetail = 'Oakbrook Center · 60523',
  onRemoveLocation,
  ageGroups = DEFAULT_AGE_GROUPS,
  onChangeAgeGroup,
  dateOptions = DEFAULT_DATES,
  selectedDateIndex,
  onSelectDate,
  onSeeFullCalendar,
}: LocationPlayerPickerProps) {
  const totalGuests = ageGroups.reduce((sum, g) => sum + g.count, 0)

  return (
    <section className="pk-loc-player-picker">
      <div className="pk-loc-player-picker__section">
        <span className="pk-loc-player-picker__heading pk-text-title-small-capital">Where &amp; When</span>
        <InputField
          label=""
          placeholder="Search a location"
          defaultValue={location}
          leadingIcon={<Search aria-hidden="true" />}
          trailingIcon={<Navigation aria-hidden="true" />}
        />

        <div className="pk-loc-player-picker__result">
          <MapPin className="pk-loc-player-picker__result-icon" aria-hidden="true" />
          <div className="pk-loc-player-picker__result-text">
            <span className="pk-text-title-small">{location}</span>
            <span className="pk-loc-player-picker__result-detail pk-text-body-small">{locationDetail}</span>
          </div>
          <button
            type="button"
            className="pk-loc-player-picker__result-remove"
            onClick={onRemoveLocation}
            aria-label="Remove location"
          >
            <X aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="pk-loc-player-picker__section">
        <div className="pk-loc-player-picker__group-header">
          <span className="pk-loc-player-picker__heading pk-text-title-small-capital">Group Size</span>
          <span className="pk-loc-player-picker__total pk-text-body-small">
            Total: <strong className="pk-text-title-small">{totalGuests} Guests</strong>
          </span>
        </div>
        <p className="pk-loc-player-picker__group-note pk-text-body-small">How many people will be playing?</p>

        {ageGroups.map((group, i) => (
          <div className="pk-loc-player-picker__age-row" key={group.label}>
            <div className="pk-loc-player-picker__age-label">
              <span className="pk-text-title-medium">{group.label}</span>
              <span className="pk-loc-player-picker__age-range pk-text-label-medium">{group.ageRange}</span>
            </div>
            <div className="pk-loc-player-picker__age-counter">
              <Stepper direction="minus" active={group.count > 0} onClick={() => onChangeAgeGroup?.(i, -1)} />
              <span className="pk-text-title-medium">{group.count}</span>
              <Stepper direction="add" onClick={() => onChangeAgeGroup?.(i, 1)} />
            </div>
          </div>
        ))}
        {totalGuests === 0 && (
          <p className="pk-loc-player-picker__group-hint pk-text-body-small">
            Add at least 1 player to check availability.
          </p>
        )}
      </div>

      <div className="pk-loc-player-picker__section">
        <span className="pk-loc-player-picker__heading pk-text-title-small-capital">Select Date</span>
        <div className="pk-loc-player-picker__dates">
          {dateOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={cx(
                'pk-loc-player-picker__date',
                selectedDateIndex === i && 'pk-loc-player-picker__date--selected'
              )}
              onClick={() => onSelectDate?.(i)}
            >
              <span className="pk-loc-player-picker__date-label pk-text-label-x-small">{opt.label}</span>
              <span className="pk-loc-player-picker__date-day pk-text-title-small-capital">{opt.day}</span>
              <span className="pk-loc-player-picker__date-num pk-text-title-large">{opt.date}</span>
            </button>
          ))}
        </div>
        <Button variant="tertiary" inverse onClick={onSeeFullCalendar}>
          See full calendar
        </Button>
      </div>
    </section>
  )
}
