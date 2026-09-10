// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4145-156714
// source=src/booking-and-perks/components/PaymentMethodForm/PaymentMethodForm.tsx
// component=PaymentMethodForm
import figma from 'figma'
const instance = figma.selectedInstance

const cardsAdded = instance.getBoolean('Cards added')
const newCard = instance.getBoolean('New Card')

// The captured saved-card radio list and card-number/expiry/CVV Input Field
// instances have no bound `savedCards` data source on this node (it's a
// plain array prop, not a Figma property), so they're left at the code
// component's defaults rather than guessed at.

export default {
  example: figma.code`
    <PaymentMethodForm
      ${cardsAdded ? '' : 'cardsAdded={false}'}
      ${newCard ? 'newCard' : ''}
    />
  `,
  imports: ['import { PaymentMethodForm } from "./PaymentMethodForm"'],
  id: 'payment-method-form',
  metadata: { nestable: true },
}
