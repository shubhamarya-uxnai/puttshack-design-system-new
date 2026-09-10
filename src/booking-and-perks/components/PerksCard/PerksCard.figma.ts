// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4437-180394
// source=src/booking-and-perks/components/PerksCard/PerksCard.tsx
// component=PerksCard
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  'Sign In': 'sign-in',
  Rewards: 'rewards',
})

const isSignedIn = instance.getEnum('isSignedIn', {
  False: false,
  True: true,
})

const rewardsAvailable = instance.getBoolean('Rewards available#4837:0')

export default {
  example: figma.code`
    <PerksCard
      type="${type}"
      ${isSignedIn ? 'isSignedIn' : ''}
      ${rewardsAvailable ? '' : 'rewardsAvailable={false}'}
    />
  `,
  imports: ['import { PerksCard } from "./PerksCard"'],
  id: 'perks-card',
  metadata: { nestable: true },
}
