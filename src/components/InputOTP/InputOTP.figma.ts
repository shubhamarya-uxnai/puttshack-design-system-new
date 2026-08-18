// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=12960-6294
// source=src/components/InputOTP/InputOTP.tsx
// component=InputOTP
import figma from 'figma'
const instance = figma.selectedInstance

// Figma's only exposed property, "Property 1" (Default / Variant3), was
// never renamed by the designer, and its two values don't correspond to any
// InputOTP prop. Checking the underlying color tokens: Default uses
// Text+Icon/Primary + Surface/Subtle (light mode, matches a filled desktop
// cell), while Variant3 uses Text+Icon/Inverse + Surface/Inverse (dark/
// inverse mode) — but InputOTP has no standalone color/inverse prop; inverse
// styling is only ever derived automatically from size="kiosk" (see
// InputOTP.css). This component's inner Mode (Mobile/Desktop/Kiosk) and
// Color (Default/Inverse) properties live on a nested "_Numeric input"
// instance with no references exposing them at this top level, so which
// `size` (if any) each variant actually represents can't be read here.
// Left unmapped rather than guessing at a size value that may not even be a
// real supported combination.
//
// Number/Cursor (booleans) and Mode/Color (variants) on that same nested
// instance are likewise unexposed at this level and omitted for the same
// reason — never invented a prop from a hardcoded layer state.

export default {
  example: figma.code`
    <InputOTP />
  `,
  imports: ['import { InputOTP } from "./InputOTP"'],
  id: 'input-otp',
  metadata: { nestable: true },
}
