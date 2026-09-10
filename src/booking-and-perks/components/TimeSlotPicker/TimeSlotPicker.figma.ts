// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179396
// source=src/booking-and-perks/components/TimeSlotPicker/TimeSlotPicker.tsx
// component=TimeSlotPicker
import figma from 'figma'
const instance = figma.selectedInstance

const period = instance.getEnum('Property 1', {
  Afternoon: 'afternoon',
  Evening: 'evening',
})

const twoRoundsEmpty = instance.getBoolean('2 Rounds - Empty')
const twoRoundsSelector = instance.getBoolean('2 Rounds - Selector')

// `Property 2` only ever has the "October" release-tag option — not modeled
// as a code prop. The captured "Time Selection Panel/October" child is
// rendered internally by TimeSlotPicker (no code prop takes it directly),
// so it's resolved by the component itself rather than passed in here.

export default {
  example: figma.code`
    <TimeSlotPicker
      period="${period}"
      ${twoRoundsEmpty ? 'twoRoundsEmpty' : ''}
      ${twoRoundsSelector ? 'twoRoundsSelector' : ''}
    />
  `,
  imports: ['import { TimeSlotPicker } from "./TimeSlotPicker"'],
  id: 'time-slot-picker',
  metadata: { nestable: true },
}
