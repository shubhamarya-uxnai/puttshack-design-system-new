// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=10872-107884
// source=src/components/Stepper/Stepper.tsx
// component=Stepper (direction="minus")
import figma from 'figma'
const instance = figma.selectedInstance

const active = instance.getEnum('Active', {
  True: true,
  False: false,
})

// Hover is a real CSS state in code (:hover), not a prop.

export default {
  example: figma.code`
    <Stepper direction="minus" ${active ? '' : 'active={false}'} />
  `,
  imports: ['import { Stepper } from "./Stepper"'],
  id: 'stepper-minus',
  metadata: { nestable: true },
}
