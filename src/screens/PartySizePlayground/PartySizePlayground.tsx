import React, { useMemo, useState } from 'react'
import { Lock, Minus, Plus, Share2, X } from '../../icons'
import { Badge } from '../../components/Badge/Badge'
import { Button } from '../../components/Button/Button'
import { Checkbox } from '../../components/Checkbox/Checkbox'
import puttshackWordmark from '../BookingRegistration/assets/puttshack-wordmark.svg'
import './PartySizePlayground.css'

/**
 * Playground — Party Size → Registration Outcome
 *
 * Figma: X5YJsGIXBKazkrUaxk0jR9, node 3031:75761 ("Player Count &
 * Registration Logic Map" + scenario screens). Shows two screens side by
 * side — the booking "Group Size" picker and the resulting "Manage Your
 * Party" roster. The step counters live directly on the booking screen
 * (matching Figma's own "Row Adults/Young adults/Juniors" pattern) rather
 * than a separate control panel, so adjusting the party is the same action
 * a real user would take.
 *
 * Scope, per instruction: just these two screens reacting live to the
 * inputs. No real navigation, no full booking flow. Everything here is
 * hardcoded to this playground, same as the BookingRegistration screen.
 */

type AgeGroup = 'adult' | 'youngAdult' | 'junior'

const MAX_TOTAL_GUESTS = 12
const LEAD_NAME = 'Alex Parry'

export function PartySizePlayground() {
  const [adults, setAdults] = useState(1)
  const [youngAdults, setYoungAdults] = useState(0)
  const [juniors, setJuniors] = useState(2)
  const [includeMePref, setIncludeMePref] = useState(true)

  const total = adults + youngAdults + juniors
  const hasGuardianEligible = adults + youngAdults > 0
  const isAllJuniorsEdgeCase = juniors > 0 && !hasGuardianEligible
  const isAtMaxGuests = total >= MAX_TOTAL_GUESTS

  // Rule 1 (Logic Map): a solo booking always includes the booker — the
  // toggle is forced on and locked, not just defaulted. This only applies
  // when the sole guest CAN be the booker (an Adult or Young Adult) — a
  // party of "1 Junior" isn't a real solo booking, it's the all-Juniors
  // edge case below, and there's no adult/young-adult slot for the booker
  // to occupy, so nothing gets locked or force-included.
  const includeMeLocked = total <= 1 && hasGuardianEligible
  const includeMe = includeMeLocked ? true : includeMePref && hasGuardianEligible

  const roster = useMemo(() => buildRoster({ adults, youngAdults, juniors, includeMe }), [adults, youngAdults, juniors, includeMe])
  const registeredCount = roster.filter((p) => p.status === 'registered').length
  const progressPct = roster.length > 0 ? Math.round((registeredCount / roster.length) * 100) : 0

  function updateCount(group: AgeGroup, delta: number) {
    const setters: Record<AgeGroup, [number, React.Dispatch<React.SetStateAction<number>>]> = {
      adult: [adults, setAdults],
      youngAdult: [youngAdults, setYoungAdults],
      junior: [juniors, setJuniors],
    }
    const [current, setValue] = setters[group]
    const next = current + delta
    if (next < 0) return
    if (next === current) return
    // A booking always has between 1 and MAX_TOTAL_GUESTS guests.
    const nextTotal = total - current + next
    if (nextTotal < 1 || nextTotal > MAX_TOTAL_GUESTS) return
    setValue(next)
  }

  return (
    <div className="pk-playground">
      <header className="pk-playground__intro">
        <h1 className="pk-text-headline-small">Party Size → Registration Outcome</h1>
        <p className="pk-text-body-medium">
          Adjust the counters on the booking screen and watch the post-booking roster respond — straight from this
          flow&rsquo;s own Player Count &amp; Registration Logic Map. Max party size is {MAX_TOTAL_GUESTS} guests.
        </p>
      </header>

      <div className="pk-playground__screens">
        <ScreenFrame title="Booking · Group Size">
          <GroupSizeCard
            adults={adults}
            youngAdults={youngAdults}
            juniors={juniors}
            total={total}
            includeMe={includeMe}
            includeMeLocked={includeMeLocked}
            hasGuardianEligible={hasGuardianEligible}
            onIncludeMeChange={setIncludeMePref}
            onAdjust={updateCount}
            isAllJuniorsEdgeCase={isAllJuniorsEdgeCase}
            isAtMaxGuests={isAtMaxGuests}
          />
        </ScreenFrame>

        <ScreenFrame title="Manage Your Party">
          <ManagePartyCard roster={roster} registeredCount={registeredCount} progressPct={progressPct} />
        </ScreenFrame>
      </div>

      <section className={`pk-playground__explanation${isAllJuniorsEdgeCase ? ' pk-playground__explanation--warning' : ''}`}>
        <span className="pk-text-title-small-capital">Why this outcome</span>
        <p className="pk-text-body-medium">{explain({ total, includeMe, includeMeLocked, isAllJuniorsEdgeCase })}</p>
      </section>
    </div>
  )
}

/* --- Roster + explanation logic, straight from the Logic Map ------------- */

interface RosterEntry {
  name: string
  category: string
  // "guardian-needed" is kept as a distinct status in the data model — the
  // guardian registration flow ships in October and will need it — but for
  // now it renders identically to "not-registered" (see StatusBadge).
  status: 'registered' | 'not-registered' | 'guardian-needed'
  isLead: boolean
}

function buildRoster({
  adults,
  youngAdults,
  juniors,
  includeMe,
}: {
  adults: number
  youngAdults: number
  juniors: number
  includeMe: boolean
}): RosterEntry[] {
  const slots: { category: string; isJunior: boolean }[] = [
    ...Array(adults).fill({ category: 'Adult (21+)', isJunior: false }),
    ...Array(youngAdults).fill({ category: 'Young Adult (13-20)', isJunior: false }),
    ...Array(juniors).fill({ category: 'Junior (0-12)', isJunior: true }),
  ]

  let playerNumber = 1
  return slots.map((slot, i) => {
    const isBookerSlot = includeMe && i === 0
    if (isBookerSlot) {
      return { name: LEAD_NAME, category: slot.category, status: 'registered', isLead: true }
    }
    const name = `Player ${playerNumber}`
    playerNumber += 1
    const status: RosterEntry['status'] = slot.isJunior ? 'guardian-needed' : 'not-registered'
    return { name, category: slot.category, status, isLead: false }
  })
}

function explain({
  total,
  includeMe,
  includeMeLocked,
  isAllJuniorsEdgeCase,
}: {
  total: number
  includeMe: boolean
  includeMeLocked: boolean
  isAllJuniorsEdgeCase: boolean
}): string {
  if (isAllJuniorsEdgeCase) {
    return 'Edge case: this party is all Juniors. At least one person 18+ is required at the venue — a guardian added later is not counted or charged as a player.'
  }
  if (includeMeLocked) {
    return "Solo booking — you're automatically counted as the Lead player and marked Registered. The toggle can't be unchecked."
  }
  if (includeMe) {
    return `You're counted as the Lead player and marked Registered right away. The other ${total - 1} slot${total - 1 === 1 ? '' : 's'} start Not Registered.`
  }
  return `Booking count stays at ${total} (unchanged) — but you're removed from the registration list, so every slot starts unregistered.`
}

/* --- Presentational pieces -------------------------------------------------- */

function Stepper({
  label,
  sublabel,
  value,
  onChange,
  canDecrement,
  canIncrement,
}: {
  label: string
  sublabel: string
  value: number
  onChange: (delta: number) => void
  canDecrement: boolean
  canIncrement: boolean
}) {
  return (
    <div className="pk-stepper">
      <span className="pk-stepper__label">
        <span className="pk-text-body-medium">{label}</span>
        <span className="pk-text-label-small pk-stepper__sublabel">{sublabel}</span>
      </span>
      <span className="pk-stepper__control">
        <button
          type="button"
          className="pk-stepper__button"
          onClick={() => onChange(-1)}
          disabled={!canDecrement}
          aria-label={`Decrease ${label}`}
        >
          <Minus aria-hidden="true" />
        </button>
        <span className="pk-stepper__value pk-text-title-medium">{value}</span>
        <button
          type="button"
          className="pk-stepper__button"
          onClick={() => onChange(1)}
          disabled={!canIncrement}
          aria-label={`Increase ${label}`}
        >
          <Plus aria-hidden="true" />
        </button>
      </span>
    </div>
  )
}

function ScreenFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pk-screen-frame">
      <div className="pk-screen-frame__chrome">
        <span className="pk-screen-frame__time pk-text-label-small">10:01</span>
        <img className="pk-screen-frame__wordmark" src={puttshackWordmark} alt="Puttshack" />
      </div>
      <div className="pk-screen-frame__label pk-text-label-medium">{title}</div>
      <div className="pk-screen-frame__body">{children}</div>
    </div>
  )
}

function GroupSizeCard({
  adults,
  youngAdults,
  juniors,
  total,
  includeMe,
  includeMeLocked,
  hasGuardianEligible,
  onIncludeMeChange,
  onAdjust,
  isAllJuniorsEdgeCase,
  isAtMaxGuests,
}: {
  adults: number
  youngAdults: number
  juniors: number
  total: number
  includeMe: boolean
  includeMeLocked: boolean
  hasGuardianEligible: boolean
  onIncludeMeChange: (next: boolean) => void
  onAdjust: (group: AgeGroup, delta: number) => void
  isAllJuniorsEdgeCase: boolean
  isAtMaxGuests: boolean
}) {
  const canDecrement = (value: number) => value > 0 && total > 1
  const canIncrement = !isAtMaxGuests

  return (
    <div className="pk-group-size-card">
      <div className="pk-group-size-card__header">
        <span className="pk-text-title-medium">Group Size</span>
        <span className="pk-group-size-card__total pk-text-label-small">
          Total: <strong>{total} Guest{total === 1 ? '' : 's'}</strong>
        </span>
      </div>

      <Stepper
        label="Adults"
        sublabel="21+"
        value={adults}
        onChange={(d) => onAdjust('adult', d)}
        canDecrement={canDecrement(adults)}
        canIncrement={canIncrement}
      />

      <label className="pk-group-size-card__include-me">
        <Checkbox
          checked={includeMe}
          disabled={includeMeLocked || !hasGuardianEligible}
          onCheckedChange={onIncludeMeChange}
        />
        <span className="pk-group-size-card__include-me-text">
          <span className="pk-text-body-small">Include me in the guest count.</span>
          <span className="pk-text-label-small pk-group-size-card__include-me-hint">
            {!hasGuardianEligible
              ? 'Add an Adult or Young Adult to include yourself.'
              : includeMeLocked
                ? 'Locked on — a party of 1 always includes the booker.'
                : "Uncheck if you’re only booking for others."}
          </span>
        </span>
      </label>

      <div className="pk-group-size-card__divider" />
      <Stepper
        label="Young Adults"
        sublabel="13-20"
        value={youngAdults}
        onChange={(d) => onAdjust('youngAdult', d)}
        canDecrement={canDecrement(youngAdults)}
        canIncrement={canIncrement}
      />
      <div className="pk-group-size-card__divider" />
      <Stepper
        label="Juniors"
        sublabel="0-12"
        value={juniors}
        onChange={(d) => onAdjust('junior', d)}
        canDecrement={canDecrement(juniors)}
        canIncrement={canIncrement}
      />

      {isAllJuniorsEdgeCase && (
        <p className="pk-group-size-card__warning pk-text-body-small">
          Juniors must be accompanied by at least one Adult or Young Adult.
        </p>
      )}
      {isAtMaxGuests && !isAllJuniorsEdgeCase && (
        <p className="pk-group-size-card__note pk-text-body-small">Maximum party size is {MAX_TOTAL_GUESTS} guests.</p>
      )}
    </div>
  )
}

function ManagePartyCard({
  roster,
  registeredCount,
  progressPct,
}: {
  roster: RosterEntry[]
  registeredCount: number
  progressPct: number
}) {
  return (
    <div className="pk-manage-party-card">
      <div className="pk-manage-party-card__title-row">
        <span className="pk-text-title-medium">Manage Your Party</span>
        <button type="button" className="pk-manage-party-card__close" aria-label="Close">
          <X aria-hidden="true" />
        </button>
      </div>
      <p className="pk-manage-party-card__intro pk-text-body-small">
        Get everyone ready before arrival. Each participating adult must complete their own registration and accept
        the terms using a secure link. A parent or authorized guardian can register minors. Anyone who is not ready
        will need to finish at the kiosk on arrival.
      </p>

      <div className="pk-manage-party-card__progress">
        <div className="pk-manage-party-card__progress-top">
          <span className="pk-text-title-small">
            {registeredCount} OF {roster.length} PLAYERS REGISTERED
          </span>
          <span className="pk-manage-party-card__progress-pct pk-text-label-small">{progressPct}%</span>
        </div>
        <p className="pk-text-body-small pk-manage-party-card__progress-copy">
          Once everyone has completed registration and accepted the terms, your party can skip the line at check-in
          and go straight to the course.
        </p>
        <div className="pk-manage-party-card__progress-track">
          <div className="pk-manage-party-card__progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="pk-manage-party-card__share">
          <span className="pk-text-body-small">puttshack.com/register&hellip;</span>
          <span className="pk-manage-party-card__share-action pk-text-label-medium">
            <Share2 aria-hidden="true" />
            Share link
          </span>
        </div>
      </div>

      <ul className="pk-manage-party-card__roster">
        {roster.map((player, i) => (
          <li className="pk-player-row" key={i}>
            <div className="pk-player-row__info">
              <span className="pk-player-row__name-line">
                <span className="pk-text-title-small">{player.name}</span>
                {player.isLead && (
                  <>
                    <Lock className="pk-player-row__lock" aria-hidden="true" />
                    <span className="pk-player-row__lead-chip pk-text-label-x-small">Lead</span>
                  </>
                )}
              </span>
              <span className="pk-text-body-small pk-player-row__category">{player.category}</span>
            </div>
            <StatusBadge status={player.status} />
          </li>
        ))}
      </ul>

      <div className="pk-manage-party-card__actions">
        <Button variant="tertiary" className="pk-manage-party-card__add">
          Add a Player
        </Button>
        <Button variant="primary" className="pk-manage-party-card__save">
          Save and Close
        </Button>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: RosterEntry['status'] }) {
  if (status === 'registered') {
    return (
      <Badge type="text-filled" status="success">
        Registered
      </Badge>
    )
  }
  // "guardian-needed" reads identically to "not-registered" until the
  // guardian registration flow ships in October — see the RosterEntry note.
  return (
    <Badge type="text-filled" status="disabled">
      Not Registered
    </Badge>
  )
}
