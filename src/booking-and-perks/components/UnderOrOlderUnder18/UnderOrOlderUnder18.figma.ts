// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4211-170115
// source=src/booking-and-perks/components/UnderOrOlderUnder18/UnderOrOlderUnder18.tsx
// component=UnderOrOlderUnder18
import figma from 'figma'
const instance = figma.selectedInstance

// This node has no props of its own — its only instance is
// `Parent/gardian/Option 1/October`, whose two booleans it forwards
// straight through. Read them off the nested instance rather than this
// node.
const nested = instance.findLayers(
  (node) => node.type === 'INSTANCE' && node.name === 'Parent/gardian/Option 1/October',
)[0]

const guardianDetails = nested && nested.type === 'INSTANCE' ? nested.getBoolean('Guardian Details#4211:100') : false
const showCheckbox = nested && nested.type === 'INSTANCE' ? nested.getBoolean('Show Checkbox#4211:95') : true

export default {
  example: figma.code`
    <UnderOrOlderUnder18
      ${guardianDetails ? 'guardianDetails' : ''}
      ${showCheckbox ? '' : 'showCheckbox={false}'}
    />
  `,
  imports: ['import { UnderOrOlderUnder18 } from "./UnderOrOlderUnder18"'],
  id: 'under-or-older-under18',
  metadata: { nestable: true },
}
