// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=12960-6294
// source=src/components/InputOTP/InputOTP.tsx
// component=InputOTP
import figma from 'figma'
const instance = figma.selectedInstance

// This component set exposes `Error` and `Inverse` variants plus a "Show 8"
// boolean at its own top level (node 12960:6294) — these map directly to
// InputOTP's `error`, `inverse`, and `length` props. The individual-cell
// `Mode` (Mobile/Desktop/Kiosk) and `Color` (Default/Inverse) properties, and
// the Cursor/Number booleans, live one level down on the nested
// "_Numeric input" instance (node 12642:82259) with no references exposing
// them at this top level, so `size` and the per-cell Cursor/Number flags
// can't be read from this instance and are left unmapped rather than
// invented from a hardcoded layer state.

export default {
  example: figma.code`
    <InputOTP />
  `,
  imports: ['import { InputOTP } from "./InputOTP"'],
  id: 'input-otp',
  metadata: { nestable: true },
}
