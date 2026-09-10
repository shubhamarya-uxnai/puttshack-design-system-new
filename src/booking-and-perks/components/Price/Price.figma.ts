// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-163303
// source=src/booking-and-perks/components/Price/Price.tsx
// component=Price
import figma from 'figma'
const instance = figma.selectedInstance

// `Price` has no captured component properties and no instance children —
// it's built from plain text layers that weren't captured as
// named/bound text nodes in the snapshot, so `amount`/`originalAmount`
// aren't readable here. `inverse` likewise has no boolean property on this
// node (it's inferred in code from which `Surface/Inverse` token is used,
// not a Figma toggle) and is omitted.

export default {
  example: figma.code`
    <Price amount="$45" />
  `,
  imports: ['import { Price } from "./Price"'],
  id: 'price',
  metadata: { nestable: true },
}
