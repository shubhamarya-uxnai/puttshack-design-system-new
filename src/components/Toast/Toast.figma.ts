// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=13257-1210
// source=src/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Yellow: 'warning',
  Megenta: 'promo',
  Success: 'success',
  Error: 'error',
  Informative: 'informative',
  Brand: 'brand',
  Neutral: 'neutral',
})

const inverse = instance.getBoolean('Inverse')
const showClose = instance.getBoolean('Close')
const showIcon = instance.getBoolean('Icon')
const showSubheading = instance.getBoolean('Subheading')

// `Heading` / `Content` are exposed as real component text properties on the
// October-generation layers ("Label/Heading" and the content text node) —
// read them directly rather than hunting for a layer by name, since the
// content string is itself the (very long) default layer name.
const title = instance.getString('Heading')
const message = instance.getString('Content')

// The leading icon differs per variant (alert-triangle / info / check-circle
// / alert-octagon) and isn't exposed as a stable instance-swap property —
// resolve the nested icon instance dynamically instead of hardcoding names.
const iconInstance = showIcon ? instance.findLayers((node) => node.type === 'INSTANCE')[0] : null
let iconCode
if (iconInstance && iconInstance.type === 'INSTANCE') {
  iconCode = iconInstance.executeTemplate().example
}

export default {
  example: figma.code`
    <Toast
      variant="${variant}"
      ${inverse ? 'inverse' : ''}
      ${title ? figma.code` title="${title}"` : ''}
      message="${message}"
      ${showSubheading ? 'subheading="..."' : ''}
      ${iconCode ? figma.code` icon={${iconCode}}` : ''}
      ${showClose ? 'onDismiss={() => {}}' : ''}
    />
  `,
  imports: ['import { Toast } from "./Toast"'],
  id: 'toast',
  metadata: { nestable: true },
}
