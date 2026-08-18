/* ============================================================================
   PUTTSHACK ICON SET

   The Puttshack DS 2026 Figma file's "Icons" page (node 10442:33232, ~1,190
   components) is a near-1:1 Lucide icon set — kebab-case names like
   `alarm-clock`, `align-horizontal-justify-center`, `check-circle` match
   real Lucide icons exactly. Re-exporting the real `lucide-react` package
   gives pixel-accurate, actively-maintained icon components instead of
   hand-exporting ~1,190 SVGs from Figma one at a time.

   Coverage: 1,165 of 1,190 Figma icon names (98%) resolve directly.
   The 25 that don't are almost all brand/social marks Lucide deliberately
   excludes as a generic (non-branded) icon set — chrome, figma, github,
   gitlab, linkedin, slack, twitch, twitter, youtube, dribbble, codepen,
   codesandbox, framer, instagram, facebook, pocket, trello — plus a
   handful of custom Puttshack-only additions (Strawberry, caps lock,
   square-gantt, square-kanban-dashed) that aren't in any general-purpose
   icon library and would need a one-off SVG export from Figma if needed.

   Usage:
     import { Check, Plus, Calendar } from '../../icons'
     <Check className="pk-checkbox__icon" />

   Every export is a React component accepting standard lucide-react props
   (size, color, strokeWidth, className, and all native SVG attributes).
   ========================================================================== */

export * from 'lucide-react'
