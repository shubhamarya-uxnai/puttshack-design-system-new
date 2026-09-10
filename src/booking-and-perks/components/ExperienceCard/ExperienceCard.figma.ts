// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=5508-105557
// source=src/booking-and-perks/components/ExperienceCard/ExperienceCard.tsx
// component=ExperienceCard
import figma from 'figma'
const instance = figma.selectedInstance

const selected = instance.getEnum('isSelected', {
  False: false,
  True: true,
})

const experience = instance.getString('Experince#5508:0')
const details = instance.getString('Details#5508:6')

export default {
  example: figma.code`
    <ExperienceCard
      ${selected ? 'selected' : ''}
      experience="${experience}"
      details="${details}"
    />
  `,
  imports: ['import { ExperienceCard } from "./ExperienceCard"'],
  id: 'experience-card',
  metadata: { nestable: true },
}
