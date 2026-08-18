// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=12685-35421
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  Default: 'desktop',
})

const showLabel = instance.getBoolean('Label')
const labelLayer = showLabel ? instance.findText('Label') : null
const label = labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : null

const tooltipIcon = instance.getBoolean('Tooltip')

// Checked/Indeterminate/Error/Disabled all live as variants on the internal
// `_checkbox` descendant instance, not as component properties on this
// top-level Checkbox node — there's no way to read them here, so `checked`,
// `error`, and `disabled` are omitted.

export default {
  example: figma.code`
    <Checkbox
      size="${size}"
      ${label ? figma.code`label="${label}"` : ''}
      ${tooltipIcon ? 'tooltipIcon' : ''}
    />
  `,
  imports: ['import { Checkbox } from "./Checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
