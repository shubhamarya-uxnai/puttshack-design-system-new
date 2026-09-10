// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=959-14927
// source=src/booking-and-perks/components/ViewMenu/ViewMenu.tsx
// component=ViewMenu
import figma from 'figma'
const instance = figma.selectedInstance

// `View menu` has no captured component properties, and its
// heading/description text layers weren't captured as named/bound text
// nodes — omitted here, so the example uses the component's own default
// heading ('View Menu').

// The captured `Add / Active=True, Hover=False` instance is a remote-library
// affordance with no internal structure in the snapshot (not a Lucide icon,
// not one of this DS's 45 October Release components) — the component
// already renders its own DS `Button` stand-in for it, so there's nothing
// further to bind from Figma here.

export default {
  example: figma.code`
    <ViewMenu />
  `,
  imports: ['import { ViewMenu } from "./ViewMenu"'],
  id: 'view-menu',
  metadata: { nestable: true },
}
