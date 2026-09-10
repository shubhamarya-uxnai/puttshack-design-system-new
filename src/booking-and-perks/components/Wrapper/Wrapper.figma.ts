// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4605-116234
// source=src/booking-and-perks/components/Wrapper/Wrapper.tsx
// component=Wrapper
import figma from 'figma'
const instance = figma.selectedInstance

// The node has no top-level props — its two `Selection Cards` children
// carry the "Title" text (e.g. "Yes, under 18" / "No, 18 or older") but
// `Selection Cards` isn't built in this batch (per the component's own
// TODOs), so there's no code component to swap in for them yet. The
// `label` prop (the question copy shown above the options) also isn't a
// captured property on this node, so it's left to the component default.

export default {
  example: figma.code`
    <Wrapper />
  `,
  imports: ['import { Wrapper } from "./Wrapper"'],
  id: 'wrapper',
  metadata: { nestable: true },
}
