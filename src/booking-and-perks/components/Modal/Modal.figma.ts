// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-164515
// source=src/booking-and-perks/components/Modal/Modal.tsx
// component=Modal
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Default: 'default',
  Variant2: 'variant2',
})

const showSecondaryBody = instance.getBoolean('Body2')
const showButtonGroup = instance.getBoolean('Button Group')
const isSecondModal = instance.getBoolean('Is 2nd Modal')
const showTnC = instance.getBoolean('TnC')
const showToast = instance.getBoolean('Toast')
const showInformation = instance.getBoolean('information')
const information = instance.getString('Information')

// `Body#4199:77` is a SLOT property — it maps to the component's own
// `children` prop, which is exactly what a slot represents here.
const body = instance.getSlot('Body')

export default {
  example: figma.code`
    <Modal
      variant="${variant}"
      ${showSecondaryBody ? 'showSecondaryBody' : ''}
      ${showButtonGroup ? '' : 'showButtonGroup={false}'}
      ${isSecondModal ? 'isSecondModal' : ''}
      ${showTnC ? 'showTnC' : ''}
      ${showToast ? 'showToast' : ''}
      ${showInformation ? 'showInformation' : ''}
      ${showInformation && information ? figma.code` information="${information}"` : ''}
    >
      ${body}
    </Modal>
  `,
  imports: ['import { Modal } from "./Modal"'],
  id: 'modal',
  metadata: { nestable: true },
}
