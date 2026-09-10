// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180189
// source=src/booking-and-perks/components/TimeSlotChip/TimeSlotChip.tsx
// component=TimeSlotChip
import figma from 'figma'
const instance = figma.selectedInstance

const time = instance.getString('time')

const state = instance.getEnum('Property 1', {
  False: 'default',
  True: 'selected',
  Disabled: 'disabled',
})

const size = instance.getEnum('Property 2', {
  Mobile: 'mobile',
  Desktop: 'desktop',
  Kiosk: 'kiosk',
})

// `Property 3` only ever has the "October" release-tag option — not modeled
// as a code prop.

const ageLimit = instance.getBoolean('Age Limit')
const hasValue = instance.getBoolean('Value')

export default {
  example: figma.code`
    <TimeSlotChip
      time="${time}"
      state="${state}"
      size="${size}"
      ${ageLimit ? 'ageLimit' : ''}
      ${hasValue ? 'hasValue' : ''}
    />
  `,
  imports: ['import { TimeSlotChip } from "./TimeSlotChip"'],
  id: 'time-slot-chip',
  metadata: { nestable: true },
}
