// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-163959
// source=src/booking-and-perks/components/Menu/Menu.tsx
// component=Menu
import figma from 'figma'
const instance = figma.selectedInstance

// `Menu` has no captured component properties, no captured instance
// children, and its title text layer wasn't captured as a named/bound text
// node — the snapshot only lists tokens and text styles. There's nothing to
// map to `title`, so the example renders the slot-only shape and leaves
// `children` for whatever gets composed inside in Figma.

export default {
  example: figma.code`
    <Menu title="Menu">
      {/* Menu row content (Price, View menu, Bundle Details, etc.) */}
    </Menu>
  `,
  imports: ['import { Menu } from "./Menu"'],
  id: 'menu',
  metadata: { nestable: true },
}
