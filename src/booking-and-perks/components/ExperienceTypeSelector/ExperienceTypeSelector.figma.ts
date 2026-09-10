// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4083-113410
// source=src/booking-and-perks/components/ExperienceTypeSelector/ExperienceTypeSelector.tsx
// component=ExperienceTypeSelector
import figma from 'figma'
const instance = figma.selectedInstance

const diningMenu = instance.getBoolean('Dining menu#940:1')
const miniGolf = instance.getBoolean('Mini Golf#139:18')
const puttcade = instance.getBoolean('Puttcade#139:19')

// `options` (the SelectionCards stack) isn't exposed as a Figma property on
// this node — the captured instance's card content lives on the nested
// "Selection Cards" children, not on this component's own prop list — so
// the component's own DEFAULT_OPTIONS are used.

export default {
  example: figma.code`
    <ExperienceTypeSelector
      ${diningMenu ? 'diningMenu' : ''}
      ${miniGolf ? 'miniGolf' : ''}
      ${puttcade ? 'puttcade' : ''}
    />
  `,
  imports: ['import { ExperienceTypeSelector } from "./ExperienceTypeSelector"'],
  id: 'experience-type-selector',
  metadata: { nestable: true },
}
