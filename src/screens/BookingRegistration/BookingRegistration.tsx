import React from 'react'
import { Calendar, Clock, MapPin, User, Users } from '../../icons'
import puttshackWordmark from './assets/puttshack-wordmark.svg'
import puttcadeVenue from './assets/puttcade-venue.png'
import './BookingRegistration.css'

/**
 * "Who are you registering?" — a real screen from the Booking & Perks Flow
 * consumption file (Figma: X5YJsGIXBKazkrUaxk0jR9, node 1122:118083).
 *
 * Built for a one-off preview, not as a reusable component: the DS atoms
 * this screen actually uses (icons) come from the connected library; every
 * molecule specific to this screen (header/scaffold, hero, booking details
 * card, selectable registrant cards) is hardcoded locally rather than
 * promoted into src/components, per instruction — this file is a screen,
 * not a new atom.
 */
export function BookingRegistration() {
  return (
    <div className="pk-screen">
      <header className="pk-screen__header">
        <div className="pk-screen__status-bar">
          <span className="pk-screen__status-time">10:01</span>
          <span className="pk-screen__status-icons" aria-hidden="true">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect x="0" y="7" width="3" height="5" rx="0.5" fill="currentColor" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" fill="currentColor" opacity="0.4" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor" opacity="0.4" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M8 10.5a1 1 0 100-2 1 1 0 000 2zM4.6 6.9a4.8 4.8 0 016.8 0M2 4.3a8.4 8.4 0 0112 0"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0.75" y="0.75" width="19.5" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1" />
              <rect x="2.25" y="2.25" width="14" height="7.5" rx="1.2" fill="currentColor" />
              <rect x="21" y="4" width="2" height="4" rx="1" fill="currentColor" />
            </svg>
          </span>
        </div>
        <div className="pk-screen__wordmark">
          <img src={puttshackWordmark} alt="Puttshack" />
        </div>
      </header>

      <main className="pk-screen__body">
        <div className="pk-screen__hero">
          <h1 className="pk-screen__hero-title pk-text-headline-medium">Who are you registering?</h1>
          <p className="pk-screen__hero-subtitle pk-text-body-medium">
            You&rsquo;ve been added to a Puttshack reservation by <strong>Alex</strong>. Choose who you&rsquo;d
            like to register.
          </p>
        </div>

        <section className="pk-screen__card pk-booking-details">
          <span className="pk-text-title-small-capital">Booking Details</span>

          <div className="pk-booking-details__venue">
            <img className="pk-booking-details__venue-image" src={puttcadeVenue} alt="" />
            <div className="pk-booking-details__venue-gradient" aria-hidden="true" />
            <div className="pk-booking-details__venue-overlay">
              <span className="pk-booking-details__rounds-pill pk-text-label-x-small">2 Rounds</span>
              <span className="pk-booking-details__venue-name pk-text-title-large">Puttcade</span>
            </div>
          </div>

          <dl className="pk-booking-details__rows">
            <DetailRow icon={<MapPin aria-hidden="true" />} label="Location" value="Chicago, IL" />
            <DetailRow
              icon={<Users aria-hidden="true" />}
              label="Group size"
              value="4 guests"
              secondary="4 adults · 2 Junior"
            />
            <DetailRow icon={<Calendar aria-hidden="true" />} label="Date" value="Sat, Apr 25" />
            <div className="pk-booking-details__split-row">
              <DetailRow icon={<Clock aria-hidden="true" />} label="Round 1" value="5:00 PM" compact noBorder />
              <DetailRow icon={<Clock aria-hidden="true" />} label="Round 2" value="8:30PM" compact noBorder />
            </div>
          </dl>
        </section>

        <section className="pk-screen__section">
          <span className="pk-screen__section-label pk-text-title-small-capital">Who Are You Registering?</span>

          <RegistrantCard
            selected
            icon={<User aria-hidden="true" />}
            title="Register myself"
            subtitle="I'm one of the players on this reservation."
          />
          <RegistrantCard
            icon={<Users aria-hidden="true" />}
            title="Register a minor"
            subtitle="I'm the parent or legal guardian completing this for a player under 18."
          />
        </section>
      </main>

      <p className="pk-screen__footer-note pk-text-body-small">
        If you do not complete this now, you&rsquo;ll need to finish registration at the kiosk when you arrive.
      </p>
    </div>
  )
}

function DetailRow({
  icon,
  label,
  value,
  secondary,
  compact = false,
  noBorder = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  secondary?: string
  compact?: boolean
  noBorder?: boolean
}) {
  return (
    <div className={`pk-detail-row${compact ? ' pk-detail-row--compact' : ''}${noBorder ? ' pk-detail-row--no-border' : ''}`}>
      <span className="pk-detail-row__icon">{icon}</span>
      <div className="pk-detail-row__text">
        <span className="pk-detail-row__label pk-text-label-x-small">{label}</span>
        <div className="pk-detail-row__value-line">
          <span className="pk-detail-row__value pk-text-title-medium">{value}</span>
          {secondary && <span className="pk-detail-row__secondary pk-text-label-medium">{secondary}</span>}
        </div>
      </div>
    </div>
  )
}

function RegistrantCard({
  selected = false,
  icon,
  title,
  subtitle,
}: {
  selected?: boolean
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <button
      type="button"
      className={`pk-registrant-card${selected ? ' pk-registrant-card--selected' : ''}`}
      aria-pressed={selected}
    >
      <span className="pk-registrant-card__icon">{icon}</span>
      <span className="pk-registrant-card__text">
        <span className="pk-registrant-card__title pk-text-title-medium">{title}</span>
        <span className="pk-registrant-card__subtitle pk-text-body-small">{subtitle}</span>
      </span>
    </button>
  )
}
