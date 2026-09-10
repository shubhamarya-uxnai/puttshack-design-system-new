// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180395
// source=src/booking-and-perks/components/RewardRedemptionCard/RewardRedemptionCard.tsx
// component=RewardRedemptionCard
import figma from 'figma'
const instance = figma.selectedInstance

const applied = instance.getEnum('Property 1', {
  Default: false,
  Applied: true,
})

// `Property 2` only has a single "October" option — it identifies the
// component generation, not a code prop, so it's not read here.

const heading = instance.getString('Heading#4437:20')
const subheading = instance.getString('Subheading#4437:21')

export default {
  example: figma.code`
    <RewardRedemptionCard
      ${applied ? 'applied' : ''}
      heading="${heading}"
      subheading="${subheading}"
    />
  `,
  imports: ['import { RewardRedemptionCard } from "./RewardRedemptionCard"'],
  id: 'reward-redemption-card',
  metadata: { nestable: true },
}
