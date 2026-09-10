// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180396
// source=src/booking-and-perks/components/BookingFooter/BookingFooter.tsx
// component=BookingFooter
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Default: 'default',
  Checkout: 'checkout',
  'You are in': 'you-are-in',
})

// `Property 2` only ever has the "October" release-tag option — not modeled
// as a code prop. The Location/Time/Age Group/Bundle Badge instances carry
// their own text as nested-instance content, not as properties on this
// component, so `location`/`time`/`ageGroup`/`bundle` are left at defaults.

export default {
  example: figma.code`
    <BookingFooter
      variant="${variant}"
    />
  `,
  imports: ['import { BookingFooter } from "./BookingFooter"'],
  id: 'booking-footer',
  metadata: { nestable: true },
}
