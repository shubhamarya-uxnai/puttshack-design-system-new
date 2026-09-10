// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4538-269365
// source=src/booking-and-perks/components/BookingDetails/BookingDetails.tsx
// component=BookingDetails
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  'Mini Golf': 'mini-golf',
  Puttcade: 'puttcade',
  'Dining only': 'dining-only',
})

// `Property 2` only has a single "October" option — it identifies the
// component generation, not a code prop, so it's not read here.

const bundle = instance.getBoolean('Bundle#4538:4')
const giftCard = instance.getBoolean('Gift card#4538:6')
const heading = instance.getBoolean('Heading#4590:4')
const holdATable = instance.getBoolean('Hold a Table#4538:3')
const modify = instance.getBoolean('Modify#4538:0')
const promoCode = instance.getBoolean('Promo Code#4538:5')
const round2 = instance.getBoolean('Round 2#4538:2')

// location/groupSize/groupSizeDetail/date/round1Time/round2Time/totalPrice
// are not exposed as Figma properties on this node (the "Experience Banner"
// and "Price" child instances that would carry them are outside this batch)
// — they use the component's own defaults.

export default {
  example: figma.code`
    <BookingDetails
      variant="${variant}"
      ${bundle ? 'bundle' : ''}
      ${giftCard ? 'giftCard' : ''}
      ${heading ? 'heading' : ''}
      ${holdATable ? 'holdATable' : ''}
      ${modify ? 'modify' : ''}
      ${promoCode ? 'promoCode' : ''}
      ${round2 ? 'round2' : ''}
    />
  `,
  imports: ['import { BookingDetails } from "./BookingDetails"'],
  id: 'booking-details',
  metadata: { nestable: true },
}
