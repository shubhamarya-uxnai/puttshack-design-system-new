// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-165532
// source=src/booking-and-perks/components/Icons/Icons.tsx
// component=Icons
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('Property 1', {
  Negative: 'negative',
  Positive: 'positive',
  Warning: 'warning',
  Informative: 'informative',
  Brand: 'brand',
})

const type = instance.getEnum('Type', {
  Default: 'default',
  Special: 'special',
})

const iconInstance = instance.getInstanceSwap('Icon#4199:84')
let iconCode
if (iconInstance && iconInstance.type === 'INSTANCE') {
  iconCode = iconInstance.executeTemplate().example
}

export default {
  example: figma.code`
    <Icons
      status="${status}"
      type="${type}"
      icon={${iconCode ?? '<UserX2 aria-hidden="true" />'}}
    />
  `,
  imports: ['import { Icons } from "./Icons"'],
  id: 'icons',
  metadata: { nestable: true },
}
