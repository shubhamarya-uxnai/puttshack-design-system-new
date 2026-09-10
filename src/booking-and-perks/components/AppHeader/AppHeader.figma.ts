// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=333-21199
// source=src/booking-and-perks/components/AppHeader/AppHeader.tsx
// component=AppHeader
import figma from 'figma'
const instance = figma.selectedInstance

// This node has no component properties ("props": {}). The captured
// "Status Bar / Dark=False" child is a fixed OS-chrome instance with no
// bound property on AppHeader itself (the code component's `showStatusBar`
// toggle has no corresponding Figma boolean to read), so it's left at the
// code default rather than guessed at.

export default {
  example: figma.code`<AppHeader />`,
  imports: ['import { AppHeader } from "./AppHeader"'],
  id: 'app-header',
  metadata: { nestable: true },
}
