// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=250-64442
// source=src/booking-and-perks/components/Tabs/Tabs.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Tabs#250:0')

const state = instance.getEnum('State', {
  Default: 'default',
  Selected: 'selected',
})

export default {
  example: figma.code`
    <Tabs
      state="${state}"
      label="${label}"
    />
  `,
  imports: ['import { Tabs } from "./Tabs"'],
  id: 'tabs',
  metadata: { nestable: true },
}
