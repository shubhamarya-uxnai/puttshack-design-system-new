// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=250-64862
// source=src/booking-and-perks/components/TabGroup/TabGroup.tsx
// component=TabGroup
import figma from 'figma'
const instance = figma.selectedInstance

// This node has no top-level props of its own — the 3 `Tabs` instances
// (Morning/Afternoon/Evening) each carry their own `Tabs#250:0` label and
// `State` variant, which the component's `items` array prop maps onto.
// Code Connect's template literal can't build an arbitrary-length array
// prop value item-by-item from nested instances the way `getInstanceSwap`
// resolves a single swappable slot, so `items` is left to the component's
// default (which already matches this capture's 3 tabs) rather than
// fabricated here.

export default {
  example: figma.code`
    <TabGroup />
  `,
  imports: ['import { TabGroup } from "./TabGroup"'],
  id: 'tab-group',
  metadata: { nestable: true },
}
