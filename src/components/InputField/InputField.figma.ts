// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=10559-11972
// source=src/components/InputField/InputField.tsx
// component=InputField
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

const placeholder = instance.getString('Input')

const required = instance.getBoolean('Required')

const state = instance.getEnum('State', {
  Typed: 'typed',
  Typing: 'typing',
  Default: 'default',
  Disabled: 'disabled',
  Error: 'error',
})

const inverse = instance.getEnum('Inverse', {
  Yes: true,
  No: false,
})

const showHelperText = instance.getBoolean('Show Helper Text')
const helperText = showHelperText ? instance.getString('Help') : undefined

const showLeadingIcon = instance.getBoolean('Leading icon')
const leadingIconInstance = showLeadingIcon ? instance.getInstanceSwap('Leading Icon') : null
let leadingIconCode
if (leadingIconInstance && leadingIconInstance.type === 'INSTANCE') {
  leadingIconCode = leadingIconInstance.executeTemplate().example
}

// Figma spells this property "Tailing Icon" (a typo for "Trailing"), and its instance-swap
// slot is further typo'd as "Taling" — both map to the code's trailingIcon prop.
const showTrailingIcon = instance.getBoolean('Tailing Icon')
const trailingIconInstance = showTrailingIcon ? instance.getInstanceSwap('Taling') : null
let trailingIconCode
if (trailingIconInstance && trailingIconInstance.type === 'INSTANCE') {
  trailingIconCode = trailingIconInstance.executeTemplate().example
}

export default {
  example: figma.code`
    <InputField
      label="${label}"
      placeholder="${placeholder}"
      state="${state}"
      ${required ? 'required' : ''}
      ${inverse ? 'inverse' : ''}
      ${helperText ? figma.code` helperText="${helperText}"` : ''}
      ${leadingIconCode ? figma.code` leadingIcon={${leadingIconCode}}` : ''}
      ${trailingIconCode ? figma.code` trailingIcon={${trailingIconCode}}` : ''}
    />
  `,
  imports: ['import { InputField } from "./InputField"'],
  id: 'input-field',
  metadata: { nestable: true },
}
