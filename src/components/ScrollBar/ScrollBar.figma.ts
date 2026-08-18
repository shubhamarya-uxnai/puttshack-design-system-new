// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=12885-8218
// source=src/components/ScrollBar/ScrollBar.tsx
// component=scroll-bar
import figma from 'figma'
const instance = figma.selectedInstance

// Figma's only property, "Background" (with background / with bacground -
// hover), just distinguishes the real CSS :hover state on the track — there's
// no code prop for it. The component does have a `forceState` prop, but its
// doc comment says it's documentation-only (for pinning hover/focus/pressed
// open for Storybook screenshots) and to never use it in application code, so
// it's intentionally not mapped here either.

export default {
  example: figma.code`
    <ScrollBar>
      {/* scrollable content */}
    </ScrollBar>
  `,
  imports: ['import { ScrollBar } from "./ScrollBar"'],
  id: 'scroll-bar',
  metadata: { nestable: true },
}
