// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-164912
// source=src/booking-and-perks/components/BundleDetails/BundleDetails.tsx
// component=BundleDetails
import figma from 'figma'
const instance = figma.selectedInstance

// `Bundle Details` itself has no captured component properties (`props: {}`
// in the snapshot) and its eyebrow/bundleName/description text layers
// weren't captured as named/bound text nodes, so those props are omitted
// here rather than guessed.

// The nested Toast instance carries the only captured text content for this
// component (Heading/Content on "Toast / Property 1=Informative,
// Version=October, Inverse=True") — read those two properties directly off
// the child instance rather than delegating to Toast's whole template,
// since `BundleDetails` only forwards the heading/message strings, not a
// full Toast override.
const toast = instance.findInstance('Toast')
let toastHeading
let toastMessage
if (toast && toast.type === 'INSTANCE') {
  toastHeading = toast.getString('Heading')
  toastMessage = toast.getString('Content')
}

// The nested "Add bundle" Button instance has `Show leading icon=false`, so
// no icon was actually captured for it — `addIcon` is left as the
// component's own default (`Plus`) rather than invented here.

export default {
  example: figma.code`
    <BundleDetails
      bundleName="Bundle name"
      ${toastHeading ? figma.code`toastHeading="${toastHeading}"` : ''}
      toastMessage="${toastMessage}"
    />
  `,
  imports: ['import { BundleDetails } from "./BundleDetails"'],
  id: 'bundle-details',
  metadata: { nestable: true },
}
