// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179207
// source=src/booking-and-perks/components/BundleUpsellSection/BundleUpsellSection.tsx
// component=BundleUpsellSection
import figma from 'figma'
const instance = figma.selectedInstance

const added = instance.getEnum('Property 1', {
  Default: false,
  'Bundle Added': true,
})

// `Property 2` only has a single "October" option — it identifies the
// component generation, not a code prop, so it's not read here.

export default {
  example: figma.code`
    <BundleUpsellSection
      ${added ? 'added' : ''}
    />
  `,
  imports: ['import { BundleUpsellSection } from "./BundleUpsellSection"'],
  id: 'bundle-upsell-section',
  metadata: { nestable: true },
}
