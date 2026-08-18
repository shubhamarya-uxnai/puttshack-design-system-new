// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=290-17625
// source=src/components/RadioButton/RadioButton.tsx
// component=RadioButton
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  Default: 'desktop',
})

const showLabel = instance.getBoolean('Label')
const labelLayer = showLabel ? instance.findText('Label') : null
const label = labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : null

const tooltipIcon = instance.getBoolean('Tooltip')

// Selection (checked) and TIck (tick-style fill) live on the internal `_radio`
// descendant instance, not as component properties on this top-level Radio
// button node — there's no way to read them here, so `checked`/`tick` are
// omitted. No Figma property corresponds to `disabled` on this node either.

export default {
  example: figma.code`
    <RadioButton
      size="${size}"
      ${label ? figma.code`label="${label}"` : ''}
      ${tooltipIcon ? 'tooltipIcon' : ''}
    />
  `,
  imports: ['import { RadioButton } from "./RadioButton"'],
  id: 'radio-button',
  metadata: { nestable: true },
}
