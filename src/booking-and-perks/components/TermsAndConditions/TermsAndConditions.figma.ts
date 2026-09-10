// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4538-269746
// source=src/booking-and-perks/components/TermsAndConditions/TermsAndConditions.tsx
// component=TermsAndConditions
import figma from 'figma'
const instance = figma.selectedInstance

const minor = instance.getBoolean('Minor')

// The captured "Modal Headings" instance has no code prop on
// TermsAndConditions (it's rendered internally as a fixed placeholder, per
// the component's own source comment, pending that component's build), and
// the "Button" / "Checkbox" / "Tooltip icon" children aren't exposed as
// component properties either — omitted rather than hardcoded.

export default {
  example: figma.code`
    <TermsAndConditions
      ${minor ? 'minor' : ''}
    />
  `,
  imports: ['import { TermsAndConditions } from "./TermsAndConditions"'],
  id: 'terms-and-conditions',
  metadata: { nestable: true },
}
