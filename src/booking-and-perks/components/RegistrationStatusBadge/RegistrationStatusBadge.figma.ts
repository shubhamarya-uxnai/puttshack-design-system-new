// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4261-215658
// source=src/booking-and-perks/components/RegistrationStatusBadge/RegistrationStatusBadge.tsx
// component=RegistrationStatusBadge
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('Property 1', {
  'Not Registered': 'not-registered',
  Registered: 'registered',
  Guardian: 'guardian',
  'Link Sent': 'link-sent',
  'In Progress': 'in-progress',
})

export default {
  example: figma.code`
    <RegistrationStatusBadge status="${status}" />
  `,
  imports: ['import { RegistrationStatusBadge } from "./RegistrationStatusBadge"'],
  id: 'registration-status-badge',
  metadata: { nestable: true },
}
