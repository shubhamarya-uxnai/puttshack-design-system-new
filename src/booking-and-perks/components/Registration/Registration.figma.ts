// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=844-47365
// source=src/booking-and-perks/components/Registration/Registration.tsx
// component=Registration
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  'Player Registered successfully': 'registered-success',
  'Register Player': 'register-player',
  'Link Sent': 'link-sent',
  'Guardian - i am guardian': 'guardian-self',
  'Guardian - Another parent will complete': 'guardian-other',
})

// The snapshot flattens every instance used anywhere in this 5-variant
// component set into one shared list (4 Input Field instances, the
// check-circle-2 icon, and 3 Buttons) without saying which belongs to
// which variant, and none of the field/message text is exposed as a
// property on the selected instance itself (only on the nested, per-field
// instances, which the template API can't read back — see PlayerCard for
// the same constraint). Rather than guess a variant-to-content mapping
// here, this template passes only `variant` and lets `Registration`'s own
// defaults (title text, which fields/actions show) — which already encode
// that same variant-based logic — take over. `values`, `message`, and the
// handler props are all omitted as they have no corresponding captured
// data.

export default {
  example: figma.code`
    <Registration variant="${variant}" />
  `,
  imports: ['import { Registration } from "./Registration"'],
  id: 'registration',
  metadata: { nestable: true },
}
