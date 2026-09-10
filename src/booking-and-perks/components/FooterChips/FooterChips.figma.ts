// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=5672-151357
// source=src/booking-and-perks/components/FooterChips/FooterChips.tsx
// component=FooterChips
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Test', {
  Venue: 'venue',
  Exeprience: 'experience',
})

const showIcon = instance.getBoolean('Icon')
const separator = instance.getBoolean('Separator')

// The captured "alarm-check" icon instance isn't exposed as an
// INSTANCE_SWAP property on this node, so the code component's `icon` prop
// (which defaults to an AlarmCheck icon already) is left unset rather than
// hardcoding a specific icon import.

export default {
  example: figma.code`
    <FooterChips
      variant="${variant}"
      ${showIcon ? 'showIcon' : ''}
      ${separator ? '' : 'separator={false}'}
    />
  `,
  imports: ['import { FooterChips } from "./FooterChips"'],
  id: 'footer-chips',
  metadata: { nestable: true },
}
