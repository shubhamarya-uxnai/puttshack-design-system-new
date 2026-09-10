// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4605-116181
// source=src/booking-and-perks/components/GuardianFlow/GuardianFlow.tsx
// component=GuardianFlow
import figma from 'figma'
const instance = figma.selectedInstance

// The node exposes top-level visibility booleans for its sections (Question
// 1/2, Phone Number, Checkbox, Button), but `questions` (the component's
// array-of-labels prop for the 3 `Wrapper` "Question 1" instances) isn't
// resolvable from this capture — the 3 instances don't carry distinct
// captured copy — so it's omitted here and left to the component default.
// Checkbox#4605:12 and Button#4666:0 are section-visibility toggles on this
// node too, but GuardianFlow always renders its consent checkbox and submit
// button in code (no corresponding show/hide prop), so they aren't read here.
const showPhoneNumber = instance.getBoolean('Phone Number#4605:15')

export default {
  example: figma.code`
    <GuardianFlow
      ${showPhoneNumber ? '' : 'phoneNumber=""'}
      onRegister={() => {}}
    />
  `,
  imports: ['import { GuardianFlow } from "./GuardianFlow"'],
  id: 'guardian-flow',
  metadata: { nestable: true },
}
