// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=10443-108219
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

const variant = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  'Ghost/Link': 'ghost',
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
})

const size = instance.getEnum('Size', {
  Default: 'default',
  Large: 'large',
})

const inverse = instance.getEnum('Inverse', {
  Off: false,
  On: true,
})

// Hover/Pressed are real CSS states in code (:hover/:active), not props — only
// Disabled has a corresponding code prop.
const disabled = instance.getEnum('State', {
  Default: false,
  Hover: false,
  Pressed: false,
  Disabled: true,
})

const onlyIcon = instance.getBoolean('Only Icon')

const showLeadingIcon = instance.getBoolean('Show leading icon')
const leadingIconInstance = showLeadingIcon ? instance.getInstanceSwap('leading icon') : null
let leadingIconCode
if (leadingIconInstance && leadingIconInstance.type === 'INSTANCE') {
  leadingIconCode = leadingIconInstance.executeTemplate().example
}

const showTrailingIcon = instance.getBoolean('Show Trailing Icon')
const trailingIconInstance = showTrailingIcon ? instance.getInstanceSwap('Trailing Icon') : null
let trailingIconCode
if (trailingIconInstance && trailingIconInstance.type === 'INSTANCE') {
  trailingIconCode = trailingIconInstance.executeTemplate().example
}

export default {
  example: figma.code`
    <Button
      variant="${variant}"
      size="${size}"
      ${inverse ? 'inverse' : ''}
      ${disabled ? 'disabled' : ''}
      ${onlyIcon ? 'onlyIcon' : ''}
      ${leadingIconCode ? figma.code` leadingIcon={${leadingIconCode}}` : ''}
      ${trailingIconCode ? figma.code` trailingIcon={${trailingIconCode}}` : ''}
    >
      ${label}
    </Button>
  `,
  imports: ['import { Button } from "./Button"'],
  id: 'button',
  metadata: { nestable: true },
}
