// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4211-170460
// source=src/booking-and-perks/components/ParentGuardianOption1/ParentGuardianOption1.tsx
// component=ParentGuardianOption1
import figma from 'figma'
const instance = figma.selectedInstance

const guardianDetails = instance.getBoolean('Guardian Details#4211:100')
const showCheckbox = instance.getBoolean('Show Checkbox#4211:95')

// `selected` drives the nested RadioButton's checked state, but the capture
// doesn't expose a top-level boolean for it on this node (the Radio button
// instance's own checked/state property isn't part of this component's
// captured props) — omitted rather than guessed.

export default {
  example: figma.code`
    <ParentGuardianOption1
      ${guardianDetails ? 'guardianDetails' : ''}
      ${showCheckbox ? '' : 'showCheckbox={false}'}
    />
  `,
  imports: ['import { ParentGuardianOption1 } from "./ParentGuardianOption1"'],
  id: 'parent-guardian-option-1',
  metadata: { nestable: true },
}
