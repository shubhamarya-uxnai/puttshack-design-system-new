// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4220-138814
// source=src/booking-and-perks/components/TermsAndConditionsSignup/TermsAndConditionsSignup.tsx
// component=TermsAndConditionsSignup
import figma from 'figma'
const instance = figma.selectedInstance

// This component's Figma node has no properties ("props": {}) — every field
// (name/email/phone/DOB/location/username), checkbox, stepper and button is
// a fixed child instance with no bound variant/boolean/text property, so
// the template takes no props, matching the component's own presentational-
// copy-only design.

export default {
  example: figma.code`<TermsAndConditionsSignup />`,
  imports: ['import { TermsAndConditionsSignup } from "./TermsAndConditionsSignup"'],
  id: 'terms-and-conditions-signup',
  metadata: { nestable: true },
}
