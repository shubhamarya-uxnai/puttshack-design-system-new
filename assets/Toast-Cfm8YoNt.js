import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Toast.stories-B7la9NcX.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,g.jsx)(t.p,{children:`A short, non-blocking status message — a cautionary heads-up, a positive
confirmation, or an on-brand promotional callout — surfaced near the top of
the screen without interrupting the task underneath it.`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Variant`}),(0,g.jsx)(t.th,{children:`Layout`}),(0,g.jsx)(t.th,{children:`Use for`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`warning`})}),(0,g.jsx)(t.td,{children:`Single flowing sentence with a bold lead-in, leading yellow icon-circle`}),(0,g.jsx)(t.td,{children:`Cautionary heads-up messages (e.g. a lane closing soon)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`promo`})}),(0,g.jsx)(t.td,{children:`Single flowing sentence with a bold lead-in, leading magenta icon-circle`}),(0,g.jsx)(t.td,{children:`On-brand promotional callouts — a Puttshack brand moment, not a standard feedback color`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`success`})}),(0,g.jsx)(t.td,{children:`Bold uppercase title, lighter body message below, leading green icon-circle`}),(0,g.jsx)(t.td,{children:`Positive confirmations (e.g. a booking is confirmed)`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`For `,(0,g.jsx)(t.code,{children:`warning`}),` and `,(0,g.jsx)(t.code,{children:`promo`}),`, pass `,(0,g.jsx)(t.code,{children:`message`}),` as JSX with an inner `,(0,g.jsx)(t.code,{children:`<strong>`}),` around
the lead-in phrase — the component doesn't parse bold out of a plain string.
`,(0,g.jsx)(t.code,{children:`title`}),` is only meaningful for `,(0,g.jsx)(t.code,{children:`success`}),`; leave it unset for the other two.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsxs)(t.p,{children:[`Real states come from real CSS on the dismiss control: `,(0,g.jsx)(t.code,{children:`:hover`}),` and `,(0,g.jsx)(t.code,{children:`:active`}),`
shift its background, `,(0,g.jsx)(t.code,{children:`:focus-visible`}),` draws the focus outline. `,(0,g.jsx)(t.code,{children:`forceState`}),`
exists only so this page can show hover, focus, and pressed open at once for
a static screenshot — it must never be used in application code.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`with-dismiss`,children:`With dismiss`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`onDismiss`}),` is optional — the × control only renders when a handler is
passed. Omit it for a toast that clears itself (e.g. on a timer) and pass it
whenever the person should be able to close the message manually.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Token`}),(0,g.jsx)(t.th,{children:`Used for`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-level2-gap`})}),(0,g.jsx)(t.td,{children:`Gap between icon, content, and dismiss control`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-sys-level2-vertical`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-level2-horizontal`})]}),(0,g.jsx)(t.td,{children:`Card padding`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-lg`})}),(0,g.jsx)(t.td,{children:`Card corner radius`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-border-thin`})}),(0,g.jsx)(t.td,{children:`Card border width`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-sys-warning-bg`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-warning-border`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-warning-text`})]}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`warning`}),` background, border, and text`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-sys-bg-magenta-light`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-border-magenta`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-text-magenta`})]}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`promo`}),` background, border, and text`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-sys-success-bg`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-success-border`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-success-text`})]}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`success`}),` background, icon-circle fill, and text`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-magenta-200`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`promo`}),` icon-circle fill (component-scoped alias — no `,(0,g.jsx)(t.code,{children:`--pk-sys-*`}),` name maps to this exact fill)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-full`})}),(0,g.jsx)(t.td,{children:`Icon-circle and dismiss-control corner radius`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-icon-m`})}),(0,g.jsx)(t.td,{children:`Icon glyph size inside the circle, and the dismiss glyph's font size`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-icon-l`})}),(0,g.jsx)(t.td,{children:`Dismiss control's hit-area width/height`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-text-white`})}),(0,g.jsxs)(t.td,{children:[`Icon color on the solid circle (icon assets are expected to use `,(0,g.jsx)(t.code,{children:`currentColor`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-gap-xs`})}),(0,g.jsxs)(t.td,{children:[`Gap between `,(0,g.jsx)(t.code,{children:`title`}),` and `,(0,g.jsx)(t.code,{children:`message`})]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-font-ui-bold`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`<strong>`}),` typeface inside `,(0,g.jsx)(t.code,{children:`message`}),` (Ringside Bold, swapped explicitly rather than relying on synthetic bold)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-sys-surface-hover`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-surface-pressed`})]}),(0,g.jsx)(t.td,{children:`Dismiss control hover / pressed background`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--pk-ref-border-medium`}),` / `,(0,g.jsx)(t.code,{children:`--pk-sys-border-focus`}),` / `,(0,g.jsx)(t.code,{children:`--pk-ref-space-2`})]}),(0,g.jsx)(t.td,{children:`Dismiss control focus-visible outline width, color, and offset`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`The 32px icon-circle diameter has no matching `,(0,g.jsx)(t.code,{children:`--pk-sys-*`}),` size token — it's
declared locally in Toast.css as `,(0,g.jsx)(t.code,{children:`--pk-comp-toast-icon-size`}),`.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Do`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Use `,(0,g.jsx)(t.code,{children:`warning`}),` for cautionary heads-up messages, `,(0,g.jsx)(t.code,{children:`success`}),` for positive
confirmations, and `,(0,g.jsx)(t.code,{children:`promo`}),` for on-brand promotional callouts.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Always pass an `,(0,g.jsx)(t.code,{children:`icon`}),` — there's no default icon asset in this codebase, so
the toast has an empty circle without one.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Pass `,(0,g.jsx)(t.code,{children:`message`}),` as JSX with an inner `,(0,g.jsx)(t.code,{children:`<strong>`}),` around the lead-in phrase for
`,(0,g.jsx)(t.code,{children:`warning`}),`/`,(0,g.jsx)(t.code,{children:`promo`}),`.`]}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Don't`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Don't use `,(0,g.jsx)(t.code,{children:`promo`}),` for a standard feedback message — it's a Puttshack
brand/promotional color, not a substitute for `,(0,g.jsx)(t.code,{children:`warning`}),` or `,(0,g.jsx)(t.code,{children:`success`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Don't set `,(0,g.jsx)(t.code,{children:`title`}),` on `,(0,g.jsx)(t.code,{children:`warning`}),` or `,(0,g.jsx)(t.code,{children:`promo`}),` — that layout is a single flowing
sentence, not a title-plus-body pair.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Don't use `,(0,g.jsx)(t.code,{children:`forceState`}),` outside of Storybook documentation.`]}),`
`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`Toast renders a `,(0,g.jsx)(t.code,{children:`<div role="status">`}),`, marking it a polite live region so
assistive technology announces the message without interrupting whatever the
person is currently doing. The icon is `,(0,g.jsx)(t.code,{children:`aria-hidden`}),` since it's decorative
alongside the text. When `,(0,g.jsx)(t.code,{children:`onDismiss`}),` is provided, the dismiss control is a
real `,(0,g.jsx)(t.code,{children:`<button type="button" aria-label="Dismiss">`}),`, so it's reachable and
operable via keyboard (Tab to focus, Enter/Space to activate) like any native
button.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,g.jsxs)(t.p,{children:[`Source: file `,(0,g.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,g.jsx)(t.code,{children:`1290:149876`}),` ("Toasts / Alerts",
component "Toast" `,(0,g.jsx)(t.code,{children:`13257:1210`}),`).`]}),`
`,(0,g.jsxs)(t.p,{children:[`Figma's variant option "Megenta" is a typo for "Magenta" in the source
file — the code uses `,(0,g.jsx)(t.code,{children:`promo`}),` for that variant and never reproduces the typo.`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};