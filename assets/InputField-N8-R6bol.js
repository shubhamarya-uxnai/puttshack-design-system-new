import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./InputField.stories-DO_trLA6.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`input-field`,children:`Input Field`}),`
`,(0,_.jsx)(t.p,{children:`A labeled text input for forms and booking flows — guest details, tee times, promo codes, venue
search. Reach for it any time a user needs to type a value, rather than pick from a fixed set
(that's Chip or Radio Button territory).`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`State`}),` variant covers the field's full lifecycle:`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`State`}),(0,_.jsx)(t.th,{children:`When to use it`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`default`})}),(0,_.jsx)(t.td,{children:`Empty or resting, no interaction yet.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`typing`})}),(0,_.jsxs)(t.td,{children:[`The user has focus in the field right now. In the app this is driven by real `,(0,_.jsx)(t.code,{children:`:focus-within`}),`, not something you set by hand — the prop exists mainly for documentation and for building state directly into a design handoff.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`typed`})}),(0,_.jsxs)(t.td,{children:[`Field has a value and has lost focus. Same border treatment as `,(0,_.jsx)(t.code,{children:`default`}),`; the difference is the content.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`disabled`})}),(0,_.jsxs)(t.td,{children:[`Not editable — pair with a `,(0,_.jsx)(t.code,{children:`defaultValue`}),`/`,(0,_.jsx)(t.code,{children:`value`}),` when it's showing a locked-in answer rather than an empty field.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`error`})}),(0,_.jsxs)(t.td,{children:[`Validation failed. Always pair with a `,(0,_.jsx)(t.code,{children:`helperText`}),` message explaining what to fix — never rely on the red border alone.`]})]})]})]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsxs)(t.p,{children:[`Real states are real CSS (`,(0,_.jsx)(t.code,{children:`:focus-within`}),` drives the `,(0,_.jsx)(t.code,{children:`typing`}),` look automatically) plus the native
`,(0,_.jsx)(t.code,{children:`disabled`}),` attribute. `,(0,_.jsx)(t.code,{children:`forceState`}),` exists only so this page can pin the real focus ring open for a
static screenshot — it must never be used in application code.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`inverse`,children:`Inverse`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`inverse`}),` swaps the field onto a dark surface for use on branded/dark backgrounds. It's an
independent axis from `,(0,_.jsx)(t.code,{children:`State`}),` — every state has an inverse counterpart in the source Figma
component set.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`with-icons`,children:`With icons`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`leadingIcon`}),` and `,(0,_.jsx)(t.code,{children:`trailingIcon`}),` each accept any `,(0,_.jsx)(t.code,{children:`ReactNode`}),` and are independently optional — pass
one, both, or neither. Icons are decorative only (rendered with `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`); if an icon is
interactive (like a clear or reveal-password button), it needs its own accessible control, which
this component doesn't provide out of the box.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Token`}),(0,_.jsx)(t.th,{children:`Used for`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-secondary`})}),(0,_.jsx)(t.td,{children:`Label text, leading/trailing icon color, helper text color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-error-text`})}),(0,_.jsx)(t.td,{children:`Required asterisk color; error-state helper icon/text color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-gap-xs`})}),(0,_.jsx)(t.td,{children:`Vertical gap between label row / input row / helper row; gap within the label row and helper row`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-level3-gap`})}),(0,_.jsx)(t.td,{children:`Gap between icon slots and the input inside the bordered row`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-level3-vertical`})}),(0,_.jsx)(t.td,{children:`Input row vertical padding`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-level3-horizontal`})}),(0,_.jsx)(t.td,{children:`Input row horizontal padding`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-surface-default`})}),(0,_.jsx)(t.td,{children:`Input row background`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-border-medium`})}),(0,_.jsx)(t.td,{children:`Input row border width`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-strong`})}),(0,_.jsx)(t.td,{children:`Input row border color, default state`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-radius-sm`})}),(0,_.jsx)(t.td,{children:`Input row corner radius`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-icon-m`})}),(0,_.jsx)(t.td,{children:`Leading/trailing icon size`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-primary`})}),(0,_.jsx)(t.td,{children:`Typed input text color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-tertiary`})}),(0,_.jsx)(t.td,{children:`Placeholder text color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-disabled`})}),(0,_.jsx)(t.td,{children:`Label/icon/input/helper text color, disabled state`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-icon-s`})}),(0,_.jsx)(t.td,{children:`Helper row status icon size`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,_.jsx)(t.td,{children:`Input row border color, typing/focus`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-error-border`})}),(0,_.jsx)(t.td,{children:`Input row border color, error state`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-surface-disabled`})}),(0,_.jsx)(t.td,{children:`Input row background, disabled state`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-disabled-border`})}),(0,_.jsx)(t.td,{children:`Input row border color, disabled state`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-inverse`})}),(0,_.jsx)(t.td,{children:`Label/icon/input text color, inverse`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-inverse-subtle`})}),(0,_.jsx)(t.td,{children:`Placeholder + helper text color, inverse`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-bg-inverse`})}),(0,_.jsx)(t.td,{children:`Input row background, inverse`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-inverse`})}),(0,_.jsx)(t.td,{children:`Input row border color, inverse default state`})]})]})]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Always show a visible label, unless the field is inside a compact search bar.`}),`
`,(0,_.jsxs)(t.li,{children:[`Use `,(0,_.jsx)(t.code,{children:`required`}),` to mark mandatory fields — never color alone.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Put format hints or error messages in `,(0,_.jsx)(t.code,{children:`helperText`}),` — not both at once; pick whichever is more
useful for the current state.`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Nest an Input Field inside another Input Field.`}),`
`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`The label renders as a native `,(0,_.jsx)(t.code,{children:`<label htmlFor>`}),` bound to the input's `,(0,_.jsx)(t.code,{children:`id`}),` (auto-generated via
`,(0,_.jsx)(t.code,{children:`useId`}),` when you don't pass one), so clicking the label focuses the field. When `,(0,_.jsx)(t.code,{children:`state="error"`}),`,
the input gets `,(0,_.jsx)(t.code,{children:`aria-invalid`}),`. Whenever `,(0,_.jsx)(t.code,{children:`helperText`}),` is present, the input's `,(0,_.jsx)(t.code,{children:`aria-describedby`}),`
points at the helper row, so assistive tech announces the hint or error message alongside the
field's value. `,(0,_.jsx)(t.code,{children:`required`}),` sets the native HTML `,(0,_.jsx)(t.code,{children:`required`}),` attribute in addition to rendering the
"*" marker.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,_.jsxs)(t.p,{children:[`Source: file `,(0,_.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,_.jsx)(t.code,{children:`10554:17948`}),` (component set "Input Field",
`,(0,_.jsx)(t.code,{children:`10559:11972`}),`, 10 variants: 5 `,(0,_.jsx)(t.code,{children:`State`}),` values × `,(0,_.jsx)(t.code,{children:`Inverse`}),`).`]}),`
`,(0,_.jsxs)(t.p,{children:[`Two deliberate departures from the Figma spec: the canonical Figma frame is a fixed 374px wide,
but this implementation is `,(0,_.jsx)(t.code,{children:`width: 100%`}),` so it drops into a real responsive layout instead of
always measuring exactly 374px. And the source file's own instance-swap property is spelled
"Tailing Icon" (a typo for "Trailing") — the prop is named correctly here as `,(0,_.jsx)(t.code,{children:`trailingIcon`}),`.`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};