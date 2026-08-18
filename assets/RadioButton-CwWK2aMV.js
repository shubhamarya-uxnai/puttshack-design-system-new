import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./RadioButton.stories-BBkMEGE5.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:u}),`
`,(0,v.jsx)(t.h1,{id:`radio-button`,children:`Radio Button`}),`
`,(0,v.jsx)(t.p,{children:`A single-selection input for choosing exactly one option from a visible set — tee times,
party sizes, venue picks. Reach for it whenever the options are mutually exclusive and few
enough to show all at once; for longer lists or free-form choice, use a different control.`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsxs)(t.p,{children:[`Three discrete circle sizes, matching Checkbox's scale: `,(0,v.jsx)(t.code,{children:`mobile`}),` (20px), `,(0,v.jsx)(t.code,{children:`desktop`}),` (24px,
default), `,(0,v.jsx)(t.code,{children:`kiosk`}),` (32px). Pick the size that matches the screen the flow is built for — these
are not responsive breakpoints, they're separate Figma variants.`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`selection-style`,children:`Selection style`}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(t.p,{children:`The plain filled dot is the default selected style. "Selected with Tick" swaps in a solid
magenta circle with a white checkmark — use it in contexts where clarity of completion
matters more than a minimal look (e.g. a multi-step booking flow where users need an
unambiguous "this step is done" signal).`}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsxs)(t.p,{children:[`Real states are real CSS (`,(0,v.jsx)(t.code,{children:`:hover`}),` / `,(0,v.jsx)(t.code,{children:`:focus-visible`}),`) plus the `,(0,v.jsx)(t.code,{children:`disabled`}),` attribute —
`,(0,v.jsx)(t.code,{children:`forceState`}),` exists only so this page can show every state in one static screenshot, and
must never be used in application code.`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`radio-groups`,children:`Radio groups`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsxs)(t.p,{children:[`RadioButton renders one correct, controlled input — it does not ship a RadioGroup wrapper.
Mutual exclusion is a consumer concern: give every radio in a set the same native `,(0,v.jsx)(t.code,{children:`name`}),` (or
drive them from shared controlled state) so selecting one clears the others. Space items
8–12px apart vertically, and pair the group with a visible heading.`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.p,{children:`Disabled radios can be unchecked or checked — there's no error/validation status on the
component itself, since validating a radio group (e.g. "you must pick one") happens at the
group or field level, not per-radio.`}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Token`}),(0,v.jsx)(t.th,{children:`Used for`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-gap-sm`})}),(0,v.jsx)(t.td,{children:`Gap between the circle and the label/tooltip text`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-gap-xs`})}),(0,v.jsx)(t.td,{children:`Gap between the label and the tooltip icon`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-ref-radius-full`})}),(0,v.jsx)(t.td,{children:`Fully round corners on the circle and the inner mark`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-border-strong`})}),(0,v.jsx)(t.td,{children:`Default (unselected) circle border color`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-surface-default`})}),(0,v.jsx)(t.td,{children:`Default circle fill`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-ref-border-medium`})}),(0,v.jsx)(t.td,{children:`Circle border width, and the focus ring width`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-text-primary`})}),(0,v.jsx)(t.td,{children:`Plain-dot fill color when checked; label text color`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-text-inverse`})}),(0,v.jsx)(t.td,{children:`Checkmark color inside the "tick" style`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-text-secondary`})}),(0,v.jsx)(t.td,{children:`Hover border color; tooltip icon color`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,v.jsx)(t.td,{children:`Focus-visible outline color`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-ref-space-2`})}),(0,v.jsx)(t.td,{children:`Focus-visible outline offset`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-disabled-border`})}),(0,v.jsx)(t.td,{children:`Circle border color when disabled`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-surface-disabled`})}),(0,v.jsx)(t.td,{children:`Circle fill when disabled + checked`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-text-disabled`})}),(0,v.jsx)(t.td,{children:`Mark, label and tooltip icon color when disabled`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-sys-icon-s`})}),(0,v.jsx)(t.td,{children:`Tooltip icon size`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-ref-magenta-200`})}),(0,v.jsxs)(t.td,{children:[`"Tick" style checked fill (reuses Checkbox's checked magenta — no `,(0,v.jsx)(t.code,{children:`--pk-sys-*`}),` token exists for it)`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`--pk-ref-magenta-300`})}),(0,v.jsx)(t.td,{children:`"Tick" style checked + hover fill`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`--pk-comp-radio-size`}),`, `,(0,v.jsx)(t.code,{children:`--pk-comp-radio-mark-scale`}),`, `,(0,v.jsx)(t.code,{children:`--pk-comp-radio-label-line-height`}),` and
the checkmark mask icon are component-local tokens with no `,(0,v.jsx)(t.code,{children:`--pk-sys-*`}),` equivalent — see the
comments at the top of `,(0,v.jsx)(t.code,{children:`RadioButton.css`}),` for why.`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Do`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Pre-select a default option when a safe default exists.`}),`
`,(0,v.jsx)(t.li,{children:`Use clear, concise labels.`}),`
`,(0,v.jsx)(t.li,{children:`Group radios under a visible heading.`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Don't`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Use radio buttons for actions — they're for selection only.`}),`
`,(0,v.jsx)(t.li,{children:`Nest radio groups inside one another.`}),`
`,(0,v.jsx)(t.li,{children:`Leave a required group with no default selected.`}),`
`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.p,{children:[`RadioButton wraps a native `,(0,v.jsx)(t.code,{children:`<input type="radio">`}),` inside a `,(0,v.jsx)(t.code,{children:`<label>`}),`, so the label, the
tooltip icon, and the circle all sit inside one tap target and clicking anywhere in it
toggles the input. Keyboard focus and arrow-key navigation between grouped radios come from
the browser's native handling of a shared `,(0,v.jsx)(t.code,{children:`name`}),` attribute — no ARIA is added or needed
beyond that. Focus is shown with a visible `,(0,v.jsx)(t.code,{children:`:focus-visible`}),` outline rather than a color
change alone.`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,v.jsxs)(t.p,{children:[`Source: file `,(0,v.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,v.jsx)(t.code,{children:`33:68532`}),` (component set `,(0,v.jsx)(t.code,{children:`290:19385`}),`, 36
variants).`]}),`
`,(0,v.jsxs)(t.p,{children:[`Figma doesn't spec an exact pixel size for the inner mark (dot or checkmark), so the
component derives it as a fraction (`,(0,v.jsx)(t.code,{children:`--pk-comp-radio-mark-scale: 0.5`}),`) of the circle size
rather than a fixed value — a judgment call made in code, not lifted directly from the file.`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};