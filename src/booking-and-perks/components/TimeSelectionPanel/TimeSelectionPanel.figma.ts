// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4089-127833
// source=src/booking-and-perks/components/TimeSelectionPanel/TimeSelectionPanel.tsx
// component=TimeSelectionPanel
import figma from 'figma'
const instance = figma.selectedInstance

const seeAllTimes = instance.getBoolean('See all times')

// The captured "Tab Group" and "Time Slot Chip" children are not exposed as
// component properties on this node (they're plain child instances, not a
// SLOT/INSTANCE_SWAP prop), and TimeSelectionPanel's `slots` prop takes a
// plain data array rather than JSX — there's no code prop these nested
// instances can map onto, so they're omitted rather than hardcoded.

export default {
  example: figma.code`
    <TimeSelectionPanel
      ${seeAllTimes ? 'seeAllTimes' : ''}
    />
  `,
  imports: ['import { TimeSelectionPanel } from "./TimeSelectionPanel"'],
  id: 'time-selection-panel',
  metadata: { nestable: true },
}
