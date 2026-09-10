// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4220-77007
// source=src/booking-and-perks/components/OrderSummaryCard/OrderSummaryCard.tsx
// component=OrderSummaryCard
import figma from 'figma'
const instance = figma.selectedInstance

// Single variant (`Property 1=August`), no instances, no captured
// text/boolean properties — `title`, `lineItems`, `totalLabel` and
// `totalValue` are all plain layer text on this node with no exposed
// component property to read, so the component's own defaults are used.

export default {
  example: figma.code`
    <OrderSummaryCard />
  `,
  imports: ['import { OrderSummaryCard } from "./OrderSummaryCard"'],
  id: 'order-summary-card',
  metadata: { nestable: true },
}
