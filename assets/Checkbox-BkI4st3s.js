import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./Checkbox.stories-CGwHjG2X.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,y.jsx)(t.p,{children:`A multi-select input for choosing any number of options from a set, or for a single
confirmation (e.g. accepting a waiver). Use it whenever more than one option can be true
at once.`}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(a,{of:c}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`checked-states`,children:`Checked states`}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.p,{children:`Three states: unchecked, checked, and indeterminate. Indeterminate is for a parent
checkbox that represents a partially-selected group of children — it always resolves to
fully checked on the first click, it never toggles back to unchecked.`}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Size`}),(0,y.jsx)(t.th,{children:`Box`}),(0,y.jsx)(t.th,{children:`Use for`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`mobile`})}),(0,y.jsx)(t.td,{children:`20px`}),(0,y.jsx)(t.td,{children:`Mobile app / narrow viewports`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`desktop`})}),(0,y.jsx)(t.td,{children:`24px`}),(0,y.jsx)(t.td,{children:`Default — web app, booking flows`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`kiosk`})}),(0,y.jsx)(t.td,{children:`32px`}),(0,y.jsx)(t.td,{children:`In-venue kiosk, viewed at arm's length`})]})]})]}),`
`,(0,y.jsx)(t.p,{children:`Regardless of the visual box size, the tappable/clickable hit area is always a minimum of
44×44px, centered on the box.`}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsxs)(t.p,{children:[`Real states are real CSS (`,(0,y.jsx)(t.code,{children:`:hover`}),`, `,(0,y.jsx)(t.code,{children:`:focus-within`}),`) plus the native `,(0,y.jsx)(t.code,{children:`disabled`}),`
attribute — `,(0,y.jsx)(t.code,{children:`forceState`}),` exists only so this page can show every state in one static
screenshot, and must never be used in application code.`]}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`error-status`,children:`Error status`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.p,{children:`Error only ever applies when the checkbox is unchecked — matching the Figma component,
which has no Error variant for Checked=Yes or Checked=Indeterminate. Once a box is
checked, any error styling is dropped.`}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`tooltip-icon-and-grouping`,children:`Tooltip icon and grouping`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.p,{children:`The optional tooltip icon sits after the label for supplementary help text. Indeterminate
is the standard pattern for a parent checkbox that summarizes a set of child checkboxes
(e.g. "All tee times" above three individual slots).`}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Token`}),(0,y.jsx)(t.th,{children:`Used for`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-ref-magenta-200`})}),(0,y.jsxs)(t.td,{children:[`Checked fill and border color (via component-tier `,(0,y.jsx)(t.code,{children:`--pk-comp-checkbox-color-checked`}),` — no `,(0,y.jsx)(t.code,{children:`--pk-sys-*`}),` semantic token maps to "checkbox fill" specifically)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-gap-sm`})}),(0,y.jsx)(t.td,{children:`Gap between the box and the label`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-ref-radius-full`})}),(0,y.jsx)(t.td,{children:`Fully-rounded hover/focus hit-area background`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-surface-hover`})}),(0,y.jsxs)(t.td,{children:[`Hit-area background on hover / `,(0,y.jsx)(t.code,{children:`forceState="hover"`})]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-ref-border-medium`})}),(0,y.jsx)(t.td,{children:`Focus ring thickness`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,y.jsx)(t.td,{children:`Focus ring color`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-ref-radius-xs`})}),(0,y.jsx)(t.td,{children:`Box corner radius`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-border-strong`})}),(0,y.jsx)(t.td,{children:`Box border color, unchecked`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-bg-default`})}),(0,y.jsx)(t.td,{children:`Box background, unchecked`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-error-border`})}),(0,y.jsxs)(t.td,{children:[`Box border color when `,(0,y.jsx)(t.code,{children:`error`}),` is true (and unchecked)`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-text-inverse`})}),(0,y.jsx)(t.td,{children:`Check/minus icon color on the filled (checked) box`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-surface-disabled`})}),(0,y.jsx)(t.td,{children:`Box background, disabled`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-disabled-border`})}),(0,y.jsx)(t.td,{children:`Box border color, disabled`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-text-disabled`})}),(0,y.jsx)(t.td,{children:`Label and icon color, disabled`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-text-primary`})}),(0,y.jsx)(t.td,{children:`Label color, default`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-icon-s`})}),(0,y.jsx)(t.td,{children:`Tooltip icon size`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-ref-border-thin`})}),(0,y.jsx)(t.td,{children:`Tooltip icon border thickness`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-border-default`})}),(0,y.jsx)(t.td,{children:`Tooltip icon border color`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`--pk-sys-text-secondary`})}),(0,y.jsx)(t.td,{children:`Tooltip icon color`})]})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Label text uses the `,(0,y.jsx)(t.code,{children:`pk-text-body-medium`}),` text style; the tooltip icon glyph uses
`,(0,y.jsx)(t.code,{children:`pk-text-label-small`}),`.`]}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Do`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use for multi-select`}),`
`,(0,y.jsx)(t.li,{children:`Always include a visible label`}),`
`,(0,y.jsx)(t.li,{children:`Use indeterminate for parent-child groups`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`Don't`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use for a single on/off toggle — that's the Toggle component`}),`
`,(0,y.jsx)(t.li,{children:`Rely on color alone to indicate state`}),`
`,(0,y.jsx)(t.li,{children:`Nest more than two levels`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:`Layout note: when stacking a group of related checkboxes, keep 8–12px vertical spacing
between items on the containing element — the component itself doesn't enforce this.`}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.p,{children:[`Checkbox renders a native `,(0,y.jsx)(t.code,{children:`<input type="checkbox">`}),` wrapped in a `,(0,y.jsx)(t.code,{children:`<label>`}),`, so clicking
the label text toggles the box and the browser's built-in keyboard behavior (Tab to
focus, Space to toggle) works with no extra wiring. Indeterminate has no JSX attribute on
a native input, so it's set imperatively via a ref effect (`,(0,y.jsx)(t.code,{children:`inputRef.current.indeterminate = true`}),`) and mirrored to assistive tech with `,(0,y.jsx)(t.code,{children:`aria-checked="mixed"`}),`. The error state sets
`,(0,y.jsx)(t.code,{children:`aria-invalid`}),` on the input.`]}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,y.jsxs)(t.p,{children:[`Source: file `,(0,y.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,y.jsx)(t.code,{children:`33:68195`}),` (component set `,(0,y.jsx)(t.code,{children:`33:68420`}),`, 58
variants).`]}),`
`,(0,y.jsxs)(t.p,{children:[`The Figma `,(0,y.jsx)(t.code,{children:`Status=Error`}),` option only exists on the Checked=No variant — the component
codifies that constraint in code (`,(0,y.jsx)(t.code,{children:`error && checked === false`}),`) rather than exposing an
error state that could be combined with Checked=Yes, which has no corresponding design.`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),i(),d()})))()}b();export{v as default};