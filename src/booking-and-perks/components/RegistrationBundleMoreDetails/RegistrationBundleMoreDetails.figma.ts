// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=940-27909
// source=src/booking-and-perks/components/RegistrationBundleMoreDetails/RegistrationBundleMoreDetails.tsx
// component=RegistrationBundleMoreDetails
import figma from 'figma'
const instance = figma.selectedInstance

// The component itself has no captured properties, and bundleName/eyebrow/
// description weren't captured as named/bound text layers — omitted here.

// `Chip / Size=Yellow` -> code's fixed `variant="promo"` chip; its label
// text wasn't captured either, so `chipLabel` falls back to the component's
// own default ('New').

// The remote `Add / Active=True, Hover=False` instance isn't a Lucide icon
// or a captured DS component (no internal structure in the snapshot), and
// the `sparkles` instance has no exposed properties — both render via the
// component's own hardcoded stand-ins (Plus-icon Button / Sparkles), so
// there's nothing further to bind from Figma for them.

export default {
  example: figma.code`
    <RegistrationBundleMoreDetails
      bundleName="Bundle name"
    />
  `,
  imports: ['import { RegistrationBundleMoreDetails } from "./RegistrationBundleMoreDetails"'],
  id: 'registration-bundle-more-details',
  metadata: { nestable: true },
}
