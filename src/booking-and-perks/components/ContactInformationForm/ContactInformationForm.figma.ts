// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179208
// source=src/booking-and-perks/components/ContactInformationForm/ContactInformationForm.tsx
// component=ContactInformationForm
import figma from 'figma'
const instance = figma.selectedInstance

const onlyJunior = instance.getBoolean('Only Junior')

const isSignedIn = instance.getEnum('isSignedIn', {
  False: false,
  True: true,
})

// `Property 2` only ever has the "October" release-tag option — not modeled
// as a code prop. The captured InputField/Stepper instance text (name,
// email, phone, DOB copy) belongs to nested Input Field instances rather
// than properties on this component, so the code defaults are left as-is
// instead of re-reading each nested layer.

export default {
  example: figma.code`
    <ContactInformationForm
      ${onlyJunior ? 'onlyJunior' : ''}
      ${isSignedIn ? 'isSignedIn' : ''}
    />
  `,
  imports: ['import { ContactInformationForm } from "./ContactInformationForm"'],
  id: 'contact-information-form',
  metadata: { nestable: true },
}
