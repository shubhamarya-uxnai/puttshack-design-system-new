// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4261-215484
// source=src/booking-and-perks/components/PlayerCard/PlayerCard.tsx
// component=PlayerCard
import figma from 'figma'
const instance = figma.selectedInstance

// `Is Lead` is a real boolean property on this component itself.
const isLead = instance.getBoolean('Is Lead')

// `playerName` has no captured/bound text layer on this node — omitted.

// The nested `Registration Status Badge` and `Button` instances aren't
// exposed as INSTANCE_SWAP properties on `Player Card`, and the template
// API has no way to read a *nested* instance's own variant/text properties
// (only `getString`/`getBoolean`/`getEnum` on the currently selected
// instance support that; a found child instance only exposes
// `executeTemplate()`/`hasCodeConnect()`/`codeConnectId()`). `PlayerCard`
// also doesn't accept those children as JSX props — it takes a
// `registrationStatus` string enum and builds its own badge/button
// internally — so `registrationStatus` and `actionLabel` are left at the
// component's own defaults rather than guessed from the captured
// "Registered" / "Button" instance data.

export default {
  example: figma.code`
    <PlayerCard
      playerName="Player name"
      ${isLead ? 'isLead' : ''}
    />
  `,
  imports: ['import { PlayerCard } from "./PlayerCard"'],
  id: 'player-card',
  metadata: { nestable: true },
}
