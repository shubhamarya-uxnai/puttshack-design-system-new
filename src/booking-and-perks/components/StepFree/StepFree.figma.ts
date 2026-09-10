// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4624-108772
// source=src/booking-and-perks/components/StepFree/StepFree.tsx
// component=StepFree
import figma from 'figma'
const instance = figma.selectedInstance

// `Step Free` has no captured properties of its own. `label`/`description`
// have no bound text layers, and `checked` lives on the nested `Checkbox`
// instance (`Checkbox / Size=Default`) rather than on the selected
// instance — the template API can only read properties directly off
// `figma.selectedInstance`, not off a found child instance, so it can't be
// read here. All are left at the component's own defaults.

export default {
  example: figma.code`
    <StepFree />
  `,
  imports: ['import { StepFree } from "./StepFree"'],
  id: 'step-free',
  metadata: { nestable: true },
}
