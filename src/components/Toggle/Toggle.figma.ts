// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=33-69225
// source=src/components/Toggle/Toggle.tsx
// component=Toggle
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  Small: 'small',
  Default: 'default',
})

const checked = instance.getEnum('Turn', {
  On: true,
  Off: false,
})

const showLabel = instance.getEnum('Label', {
  On: true,
  Off: false,
})
// The label text lives on a nested "Label" text layer inside the internal
// `_Toggle` instance, not as a TEXT property on this top-level node.
const labelNode = showLabel ? instance.findText('Label', { traverseInstances: true }) : null
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : null

const tooltipIcon = instance.getEnum('Tooltip icon', {
  On: true,
  Off: false,
})

// Hover is a real CSS state (:hover) in code, not a prop — only Disabled has
// a corresponding code prop.
const disabled = instance.getEnum('Status', {
  Default: false,
  Hover: false,
  Disabled: true,
})

export default {
  example: figma.code`
    <Toggle
      size="${size}"
      ${checked ? 'checked' : ''}
      ${label ? figma.code`label="${label}"` : ''}
      ${tooltipIcon ? 'tooltipIcon' : ''}
      ${disabled ? 'disabled' : ''}
    />
  `,
  imports: ['import { Toggle } from "./Toggle"'],
  id: 'toggle',
  metadata: { nestable: true },
}
