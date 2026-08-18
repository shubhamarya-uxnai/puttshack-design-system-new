import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollBar } from './ScrollBar'

interface Booking {
  id: string
  venue: string
  time: string
  party: number
}

const upcomingBookings: Booking[] = [
  { id: 'B-10482', venue: 'Manchester Trafford', time: 'Today · 6:30 PM', party: 6 },
  { id: 'B-10483', venue: 'Manchester Trafford', time: 'Today · 7:00 PM', party: 4 },
  { id: 'B-10491', venue: 'Lakeside Thurrock', time: 'Tomorrow · 5:15 PM', party: 8 },
  { id: 'B-10502', venue: 'Bluewater', time: 'Sat · 12:30 PM', party: 2 },
  { id: 'B-10517', venue: 'Bluewater', time: 'Sat · 4:00 PM', party: 10 },
  { id: 'B-10529', venue: 'The O2', time: 'Sun · 1:45 PM', party: 5 },
  { id: 'B-10540', venue: 'Manchester Trafford', time: 'Sun · 6:00 PM', party: 3 },
  { id: 'B-10551', venue: 'Lakeside Thurrock', time: 'Next Fri · 8:30 PM', party: 12 },
]

const BookingRow = ({ booking }: { booking: Booking }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '10px 12px',
      borderBottom: '1px solid var(--pk-sys-border-default)',
    }}
  >
    <span style={{ fontWeight: 600 }}>
      {booking.venue} · Party of {booking.party}
    </span>
    <span style={{ color: 'var(--pk-sys-text-secondary)', fontSize: 13 }}>
      {booking.time} · {booking.id}
    </span>
  </div>
)

const BookingList = ({ bookings }: { bookings: Booking[] }) => (
  <div style={{ minWidth: 260 }}>
    {bookings.map((booking) => (
      <BookingRow key={booking.id} booking={booking} />
    ))}
  </div>
)

const venuePolicies = [
  'Bays are booked in one-hour slots. Arrive at least 10 minutes early to check in at the front desk before your slot starts.',
  'Parties of up to 6 fit a standard bay; larger groups are seated across adjoining bays and split onto separate scorecards.',
  'Outside food and drink aren’t permitted inside the venue — every location has its own kitchen and bar menu available to order bayside.',
  'Cancellations made more than 24 hours before the booking are refunded in full; inside 24 hours the deposit is forfeited.',
  'Putters and balls are provided at the bay — no need to bring your own equipment, including for kids’ sessions.',
  'Walk-ins are welcome whenever a bay is free, but booking ahead is the only way to guarantee a specific tee time.',
]

const PolicyText = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 260 }}>
    {venuePolicies.map((paragraph, i) => (
      <p key={i} style={{ margin: 0 }}>
        {paragraph}
      </p>
    ))}
  </div>
)

const meta = {
  title: 'Components/Scroll Bar',
  component: ScrollBar,
  parameters: { layout: 'padded' },
  argTypes: {
    children: {
      control: false,
      table: { category: 'Content (Figma: scrollable content slot)' },
    },
    maxHeight: {
      control: 'number',
      table: { category: 'Layout (demo viewport constraint — no Figma equivalent)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    maxHeight: 220,
    children: <BookingList bookings={upcomingBookings} />,
  },
} satisfies Meta<typeof ScrollBar>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** Content that overflows the viewport (handle renders) vs content that fits (handle stays hidden by design). */
export const Overflow: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">overflowing</span>
        <ScrollBar {...args} maxHeight={220}>
          <BookingList bookings={upcomingBookings} />
        </ScrollBar>
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">fits (no handle)</span>
        <ScrollBar {...args} maxHeight={220}>
          <BookingList bookings={upcomingBookings.slice(0, 2)} />
        </ScrollBar>
      </div>
    </div>
  ),
}

/** Every real interaction state, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <ScrollBar {...args} maxHeight={200} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** Row-based list content vs long-form paragraph content — the handle math only cares about total content height. */
export const ContentTypes: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">list rows — tee time bookings</span>
        <ScrollBar {...args} maxHeight={220}>
          <BookingList bookings={upcomingBookings} />
        </ScrollBar>
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">paragraphs — venue policies</span>
        <ScrollBar {...args} maxHeight={220}>
          <PolicyText />
        </ScrollBar>
      </div>
    </div>
  ),
}
