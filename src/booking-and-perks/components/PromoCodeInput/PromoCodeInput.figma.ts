// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179394
// source=src/booking-and-perks/components/PromoCodeInput/PromoCodeInput.tsx
// component=PromoCodeInput
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('Property 1', {
  Default: 'default',
  Applied: 'applied',
})

const mode = instance.getEnum('Property 3', {
  Desktop: 'desktop',
  Mobile: 'mobile',
})

// `Property 2` only ever has the "October" release-tag option — not modeled
// as a code prop. The captured promo/gift-card copy lives on the nested
// Input Field instances, not on this component's own properties.

export default {
  example: figma.code`
    <PromoCodeInput
      state="${state}"
      mode="${mode}"
    />
  `,
  imports: ['import { PromoCodeInput } from "./PromoCodeInput"'],
  id: 'promo-code-input',
  metadata: { nestable: true },
}
