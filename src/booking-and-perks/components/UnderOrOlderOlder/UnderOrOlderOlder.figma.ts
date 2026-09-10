// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4211-170163
// source=src/booking-and-perks/components/UnderOrOlderOlder/UnderOrOlderOlder.tsx
// component=UnderOrOlderOlder
import figma from 'figma'
const instance = figma.selectedInstance

// The capture has no top-level props on this node — `selected` and
// `phoneNumber` toggle the nested RadioButton/Chip/InputField, none of
// which are exposed as component properties here, so they're left to the
// component's own defaults rather than guessed.

export default {
  example: figma.code`
    <UnderOrOlderOlder />
  `,
  imports: ['import { UnderOrOlderOlder } from "./UnderOrOlderOlder"'],
  id: 'under-or-older-older',
  metadata: { nestable: true },
}
