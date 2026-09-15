// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4145-161173
// source=src/booking-and-perks/components/ShareBookingLink/ShareBookingLink.tsx
// component=ShareBookingLink
import figma from 'figma'
const instance = figma.selectedInstance

const signTandC = instance.getBoolean('Sign T&C#1420:0')

export default {
  example: figma.code`
    <ShareBookingLink
      ${signTandC ? 'signTandC' : ''}
    />
  `,
  imports: ['import { ShareBookingLink } from "./ShareBookingLink"'],
  id: 'share-booking-link',
  metadata: { nestable: true },
}
