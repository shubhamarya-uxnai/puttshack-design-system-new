// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4199-163181
// source=src/booking-and-perks/components/PlayerChange/PlayerChange.tsx
// component=PlayerChange
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  Removed: 'removed',
  Added: 'added',
})

// `playerName`/`detail` have no captured/bound text layers on this
// component set (only the `move-right` icon instance and text *styles*
// were captured, not named text nodes) — omitted here.

export default {
  example: figma.code`
    <PlayerChange
      variant="${variant}"
      playerName="Player name"
    />
  `,
  imports: ['import { PlayerChange } from "./PlayerChange"'],
  id: 'player-change',
  metadata: { nestable: true },
}
