// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4220-77008
// source=src/booking-and-perks/components/OrderSummaryCardOctober/OrderSummaryCardOctober.tsx
// component=OrderSummaryCardOctober
import figma from 'figma'
const instance = figma.selectedInstance

// Same shape as `Order Summary Card` (no instances, no captured
// text/boolean properties) on the inverse surface — the component's own
// defaults are used.

export default {
  example: figma.code`
    <OrderSummaryCardOctober />
  `,
  imports: ['import { OrderSummaryCardOctober } from "./OrderSummaryCardOctober"'],
  id: 'order-summary-card-october',
  metadata: { nestable: true },
}
