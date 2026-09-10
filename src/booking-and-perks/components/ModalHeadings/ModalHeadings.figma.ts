// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-161757
// source=src/booking-and-perks/components/ModalHeadings/ModalHeadings.tsx
// component=ModalHeadings
import figma from 'figma'
const instance = figma.selectedInstance

const layout = instance.getEnum('Property 1', {
  Vertical: 'vertical',
  Horizontal: 'horizontal',
})

const type = instance.getEnum('Type', {
  Caption: 'caption',
  SubHeading: 'subheading',
  Title: 'title',
})

const category = instance.getString('Category#4199:61')
const title = instance.getString('Title#4199:55')
const subtitle = instance.getString('Sub Title#4199:58')
const icon = instance.getBoolean('Icon#4199:89')

export default {
  example: figma.code`
    <ModalHeadings
      layout="${layout}"
      type="${type}"
      ${category ? figma.code` category="${category}"` : ''}
      title="${title}"
      ${subtitle ? figma.code` subtitle="${subtitle}"` : ''}
      ${icon ? 'icon' : ''}
    />
  `,
  imports: ['import { ModalHeadings } from "./ModalHeadings"'],
  id: 'modal-headings',
  metadata: { nestable: true },
}
