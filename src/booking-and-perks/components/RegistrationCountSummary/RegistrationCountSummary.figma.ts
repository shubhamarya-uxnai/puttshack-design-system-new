// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4261-215796
// source=src/booking-and-perks/components/RegistrationCountSummary/RegistrationCountSummary.tsx
// component=RegistrationCountSummary
import figma from 'figma'
const instance = figma.selectedInstance

// This component has no captured properties of its own, and
// `title`/`registeredCount`/`totalCount` have no bound text layers in the
// snapshot — omitted. The nested "SHARE LINK" Button is captured on the
// child instance, not the selected instance, and the template API can't
// read a nested instance's own text/boolean properties (only
// `executeTemplate()` is available on it) — `RegistrationCountSummary`
// also builds that button internally rather than accepting it as a prop,
// so there's nothing further to bind here.

export default {
  example: figma.code`
    <RegistrationCountSummary
      registeredCount={0}
      totalCount={0}
    />
  `,
  imports: ['import { RegistrationCountSummary } from "./RegistrationCountSummary"'],
  id: 'registration-count-summary',
  metadata: { nestable: true },
}
