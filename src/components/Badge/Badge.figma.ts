// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=305-18717
// source=src/components/Badge/Badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  Dot: 'dot',
  Small: 'small',
  'Text Filled': 'text-filled',
  'Icon only': 'icon-only',
  'Icon + Text': 'icon-text',
})

const status = instance.getEnum('Status', {
  Linked: 'linked',
  Disabled: 'disabled',
  Success: 'success',
  Warning: 'warning',
  'Linked-2': 'linked-secondary',
})

// The label text layer is named differently across variants in this
// component set: "10" for Small, "Primary" for Text Filled / Icon + Text.
// Dot and Icon only have no label layer at all (children is ignored for
// those types in code).
let label = ''
if (type === 'small') {
  const textLayer = instance.findText('10')
  label = textLayer && textLayer.type === 'TEXT' ? textLayer.textContent : ''
} else if (type === 'text-filled' || type === 'icon-text') {
  const textLayer = instance.findText('Primary')
  label = textLayer && textLayer.type === 'TEXT' ? textLayer.textContent : ''
}

// The leading icon isn't exposed as an instance-swap property on Badge, and
// its layer is named after whichever icon is currently swapped in (e.g.
// "alarm-check") rather than a stable slot name — so it can't be looked up
// by a fixed layer name without breaking whenever the icon changes. Resolve
// the nested instance dynamically instead and render it via its own
// template. Only Icon only / Icon + Text variants have one.
const iconLayer = instance.findLayers((node) => node.type === 'INSTANCE')[0]
let iconCode
if (iconLayer && iconLayer.type === 'INSTANCE') {
  iconCode = iconLayer.executeTemplate().example
}

export default {
  example: figma.code`
    <Badge type="${type}" status="${status}"${iconCode ? figma.code` icon={${iconCode}}` : ''}>
      ${label}
    </Badge>
  `,
  imports: ['import { Badge } from "./Badge"'],
  id: 'badge',
  metadata: { nestable: true },
}
