// url=https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026?node-id=13257-1210
// source=src/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Yellow: 'warning',
  Megenta: 'promo',
  Success: 'success',
})

const showClose = instance.getBoolean('Close')

// `title` is only used by the Success layout in this component set — its two
// text layers ("You are ready" / "Your registration is complete...") are
// unconditionally present and uniquely named. The `Subheading` boolean on
// Yellow/Megenta toggles a second text layer that shares its exact layer
// name with the always-visible body text below it, so its content can't be
// reliably targeted via findText (no distinguishing parent path available) —
// omitted. See report.
const titleNode = variant === 'success' ? instance.findText('You are ready') : null
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : undefined

const messageNode =
  variant === 'success'
    ? instance.findText('Your registration is complete and the Terms & Conditions have been accepted.')
    : instance.findText(
        "Heads up — adding this player adds $20.00 to your reservation. You'll review & confirm the new total on the next screen."
      )
const message = messageNode && messageNode.type === 'TEXT' ? messageNode.textContent : ''

// Leading icon differs by variant ("info" for Yellow/Megenta, "check-circle-2"
// for Success) and isn't exposed as an instance-swap property — resolve the
// named child instance dynamically rather than hardcoding its JSX.
const iconInstance =
  variant === 'success' ? instance.findInstance('check-circle-2') : instance.findInstance('info')
let iconCode
if (iconInstance && iconInstance.type === 'INSTANCE') {
  iconCode = iconInstance.executeTemplate().example
}

export default {
  example: figma.code`
    <Toast
      variant="${variant}"
      message="${message}"
      ${title ? figma.code` title="${title}"` : ''}
      ${iconCode ? figma.code` icon={${iconCode}}` : ''}
      ${showClose ? 'onDismiss={() => {}}' : ''}
    />
  `,
  imports: ['import { Toast } from "./Toast"'],
  id: 'toast',
  metadata: { nestable: true },
}
