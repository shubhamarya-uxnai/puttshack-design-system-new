// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4220-76952
// source=src/booking-and-perks/components/BookingDetailsCard/BookingDetailsCard.tsx
// component=BookingDetailsCard
import figma from 'figma'
const instance = figma.selectedInstance

// This node has a single variant (`Property 1=Default`) and no captured
// text/boolean properties — the row values (location, group size, date,
// time, perks) are plain layer text, not exposed component properties, and
// there's no per-row visibility toggle either. Omitted rather than guessed;
// the component's own defaults are used instead.

export default {
  example: figma.code`
    <BookingDetailsCard />
  `,
  imports: ['import { BookingDetailsCard } from "./BookingDetailsCard"'],
  id: 'booking-details-card',
  metadata: { nestable: true },
}
