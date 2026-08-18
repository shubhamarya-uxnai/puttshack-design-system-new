import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,s as a}from"./blocks-CUdpzK9u.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Start Here/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`puttshack-design-system-2026`,children:`Puttshack Design System 2026`}),`
`,(0,c.jsx)(t.p,{children:`Tokens, styles and 10 components generated from the Puttshack Design System
2026 Figma file, code-accurate to the component set, colors, spacing and
typography defined there.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`An independent extraction, not an official Puttshack release.`}),` Built by
reading the design system file (`,(0,c.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`) directly — every
color, spacing value and variant below traces back to a real Figma node,
not an approximation.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`whats-in-this-codebase`,children:`What's in this codebase`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tokens`}),` (`,(0,c.jsx)(t.code,{children:`src/styles/tokens.css`}),`) — the full color, spacing, corner
radius, border width, opacity and shadow scale, in two tiers: `,(0,c.jsx)(t.code,{children:`--pk-ref-*`}),`
(primitives, never consume directly) and `,(0,c.jsx)(t.code,{children:`--pk-sys-*`}),` (semantic, bind
these).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Text Styles`}),` (`,(0,c.jsx)(t.code,{children:`src/styles/text-styles.css`}),`) — the 17 named Text Styles
from the file, as ready-to-use classes (`,(0,c.jsx)(t.code,{children:`.pk-text-headline-large`}),`,
`,(0,c.jsx)(t.code,{children:`.pk-text-body-medium`}),`, …).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`10 components`}),` (`,(0,c.jsx)(t.code,{children:`src/components/*`}),`) — Button, Checkbox, Radio Button,
Toggle, Chip, Badge, Input Field, Input OTP, Scroll Bar and Toast. Each is
a `,(0,c.jsx)(t.code,{children:`.tsx`}),` + `,(0,c.jsx)(t.code,{children:`.css`}),` pair, token-bound throughout, with real interaction
states (`,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`:focus-visible`}),`, `,(0,c.jsx)(t.code,{children:`:active`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`) rather than
variant props standing in for them.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`two-things-this-system-deliberately-does-not-have`,children:`Two things this system deliberately does NOT have`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`A dark theme.`}),` The source file's Colors - Semantic collection has a
second mode, but it is literally named `,(0,c.jsx)(t.em,{children:`"Dark (NOT TO BE USED)"`}),` — so
there is no dark theme here, on purpose, not by omission.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`A brand switcher.`}),` Puttshack is a single brand — there's no Mattel-style
multi-brand axis to switch between.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`the-one-switch-this-system-does-have`,children:`The one switch this system does have`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Screen`}),` (device mode) — Mobile / Desktop / Kiosk — in the toolbar above.
Only three components currently key off it with confirmed values pulled
directly from the file: `,(0,c.jsx)(t.strong,{children:`Checkbox`}),`, `,(0,c.jsx)(t.strong,{children:`Radio Button`}),` and `,(0,c.jsx)(t.strong,{children:`Input OTP`}),` all
scale their control size (and, for OTP, cell radius/fill) per device. Every
other component in this Storybook renders at a single Desktop-equivalent
size — see each component's own docs page for what is and isn't scaled.`]}),`
`,(0,c.jsx)(t.h2,{id:`reading-path`,children:`Reading path`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Foundations`}),` — every token and text style, with live swatches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Components`}),` — one page per component: a Playground you can drive with
the Controls panel, every variant laid out for comparison, and the exact
tokens each one consumes.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`what-this-storybook-is-for`,children:`What this Storybook is for`}),`
`,(0,c.jsxs)(t.p,{children:[`The Figma file documents the intended design. This documents the `,(0,c.jsx)(t.em,{children:`contract`}),`
— running code, not a drawing of it. Every color below is a live `,(0,c.jsx)(t.code,{children:`var()`}),`
chain, not a swatch someone pasted; every state is real, not a static frame.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};