// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=1948-162667
// source=src/components/Chip/Chip.tsx
// component=Chip
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Size', {
  Small: 'default',
  Yellow: 'promo',
  AVATAR: 'avatar',
})

// The label text layer is named differently across variants in this
// component set: "Popular" for Small/Yellow, "Chip label" for AVATAR.
const labelNode = variant === 'avatar' ? instance.findText('Chip label') : instance.findText('Popular')
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : ''

// The AVATAR variant always includes a "Remove icon" layer in this component
// set (there's no boolean toggle for it) — pass a stub handler so the code
// example renders the remove button the same way the design always shows it.
const removeIcon = instance.findInstance('Remove icon')
const hasRemove = removeIcon && removeIcon.type === 'INSTANCE'

export default {
  example: figma.code`
    <Chip
      variant="${variant}"
      ${hasRemove ? 'onRemove={() => {}}' : ''}
    >
      ${label}
    </Chip>
  `,
  imports: ['import { Chip } from "./Chip"'],
  id: 'chip',
  metadata: { nestable: true },
}
