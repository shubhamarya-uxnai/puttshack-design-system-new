import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./InputOTP.stories-BkL1s6bg.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`input-otp`,children:`Input OTP`}),`
`,(0,g.jsx)(t.p,{children:`A row of single-digit cells for fixed-length codes: OTPs, verification
codes, and PINs. Use it whenever the destination knows the exact code
length up front, never for phone numbers, booking references, or any other
variable-length input.`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`size`}),` drives cell dimensions and fill via `,(0,g.jsx)(t.code,{children:`[data-screen]`}),`, matching the
device mode confirmed in the source file:`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Size`}),(0,g.jsx)(t.th,{children:`Cell dimensions`}),(0,g.jsx)(t.th,{children:`Fill`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`mobile`})}),(0,g.jsx)(t.td,{children:`44 × 52px`}),(0,g.jsx)(t.td,{children:`Bordered, transparent/white fill`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`desktop`})}),(0,g.jsx)(t.td,{children:`60 × 68px (default)`}),(0,g.jsx)(t.td,{children:`Filled, no border (pale grey)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`kiosk`})}),(0,g.jsx)(t.td,{children:`76 × 84px`}),(0,g.jsx)(t.td,{children:`Filled, dark surface — pairs with this system's dark color mode`})]})]})]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`error-state`,children:`Error state`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`error`}),` is component-level, not per-cell: on error, every cell takes the
error border together and the whole code clears and refocuses the first
cell — never highlight only the offending cell. Pass `,(0,g.jsx)(t.code,{children:`errorMessage`}),` to
render supporting copy below the cells.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`lengths`,children:`Lengths`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`length`}),` sets how many digit cells render (default 6). The Figma source
uses 6 as its visual example; soft guidance caps this around 8 digits for
codes that stay comfortably scannable — `,(0,g.jsx)(t.code,{children:`length`}),` itself isn't clamped, but
treat 8 as the practical ceiling rather than reaching for this component on
longer identifiers.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Token`}),(0,g.jsx)(t.th,{children:`Used for`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-gap-sm`})}),(0,g.jsx)(t.td,{children:`Gap between label and cell row; gap between cells (mobile/desktop)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-md`})}),(0,g.jsx)(t.td,{children:`Cell corner radius (desktop)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-sm`})}),(0,g.jsx)(t.td,{children:`Cell corner radius (mobile)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-text-primary`})}),(0,g.jsx)(t.td,{children:`Label text color; digit color (mobile/desktop)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-text-inverse`})}),(0,g.jsx)(t.td,{children:`Label and digit color on kiosk's dark surface`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-border-strong`})}),(0,g.jsx)(t.td,{children:`Cell border color (mobile)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-bg-default`})}),(0,g.jsx)(t.td,{children:`Cell fill (mobile)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-black-06`})}),(0,g.jsxs)(t.td,{children:[`Cell fill (desktop) — closest confirmed match to the source screenshot; no `,(0,g.jsx)(t.code,{children:`--pk-sys-surface-*`}),` token lands on this exact tone`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-surface-inverse`})}),(0,g.jsx)(t.td,{children:`Cell fill (kiosk)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-border-thin`})}),(0,g.jsx)(t.td,{children:`Cell border width`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-font-ui-bold`})}),(0,g.jsx)(t.td,{children:`Digit font family`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-magenta-200`})}),(0,g.jsx)(t.td,{children:`Caret color — Figma's Active state uses a blinking magenta cursor`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,g.jsxs)(t.td,{children:[`Focus ring (`,(0,g.jsx)(t.code,{children:`:focus-visible`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-error-border`})}),(0,g.jsxs)(t.td,{children:[`Cell border color when `,(0,g.jsx)(t.code,{children:`error`}),` is true`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-error-text`})}),(0,g.jsx)(t.td,{children:`Error message color`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Cell width/height, the kiosk radius/gap, and the digit font size are pinned
as component-tier variables (`,(0,g.jsx)(t.code,{children:`--pk-comp-input-otp-*`}),`) rather than mapped to
a `,(0,g.jsx)(t.code,{children:`--pk-ref-*`}),` step, because the confirmed values (44/52/60/68/76/84px cells,
10px kiosk radius/gap) fall between the nearest spacing and radius steps.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Do`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Use for fixed-length digit entry: OTPs, verification codes, PINs (roughly up to 8 digits).`}),`
`,(0,g.jsxs)(t.li,{children:[`Label the group as a whole with `,(0,g.jsx)(t.code,{children:`label`}),` — it describes what the whole code is for, not any single cell.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Let `,(0,g.jsx)(t.code,{children:`onComplete`}),` fire the submit — once every cell is filled the code is ready, no separate confirm button needed.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Reserve `,(0,g.jsx)(t.code,{children:`autoFocus`}),` for screens where the OTP input is the primary or only action — stealing focus elsewhere is disorienting.`]}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Don't`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Don't use for phone numbers, booking references, or any other variable-length input — reach for a standard text field with `,(0,g.jsx)(t.code,{children:`inputMode="numeric"`}),` instead.`]}),`
`,(0,g.jsx)(t.li,{children:`Don't label individual cells (no "Digit 1", "D2", "D3" visible labels) — the group label is the only label a user sees.`}),`
`,(0,g.jsx)(t.li,{children:`Don't highlight only the cell that caused an error — error is a whole-component state, and on error all cells clear and refocus the first cell together.`}),`
`,(0,g.jsx)(t.li,{children:`Don't let the keyboard dismiss between cells on mobile — auto-advance is built to keep focus (and the keyboard) in place through entry.`}),`
`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`Each cell is a real `,(0,g.jsx)(t.code,{children:`<input type="text" inputMode="numeric" maxLength={1}>`}),`,
so it inherits native keyboard, autofill, and screen-reader input behavior
rather than emulating one with `,(0,g.jsx)(t.code,{children:`<div>`}),`s. The row of cells sits in a
`,(0,g.jsx)(t.code,{children:`role="group"`}),` container, labeled via `,(0,g.jsx)(t.code,{children:`aria-labelledby`}),` pointing at the
visible `,(0,g.jsx)(t.code,{children:`label`}),` when one is passed. Each cell additionally carries its own
`,(0,g.jsx)(t.code,{children:`aria-label`}),` ("Digit 1 of 6", etc.) for screen-reader context, separate
from the never-shown-visually per-cell labeling the Do/Don't above warns
against. On error, cells get `,(0,g.jsx)(t.code,{children:`aria-invalid`}),` and the message below renders
with `,(0,g.jsx)(t.code,{children:`role="alert"`}),` so assistive tech announces it as it appears. Backspace
on an empty cell moves focus back and clears the previous cell; paste (or
OS/SMS autofill delivering the full code into one cell) distributes digits
across the remaining cells from the cursor position.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,g.jsxs)(t.p,{children:[`Source: file `,(0,g.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,g.jsx)(t.code,{children:`12731:83461`}),` ("Numeric
Input" — the file's own documentation canvas for this component).`]}),`
`,(0,g.jsxs)(t.p,{children:[`Two values in the implementation are pinned as confirmed-but-unmapped
constants rather than forced onto a nearby token: the desktop cell fill
(`,(0,g.jsx)(t.code,{children:`--pk-ref-black-06`}),`, since no `,(0,g.jsx)(t.code,{children:`--pk-sys-surface-*`}),` token matches the pale
grey in the source screenshot) and the kiosk cell radius/gap (10px, which
falls between the `,(0,g.jsx)(t.code,{children:`sm`}),`/`,(0,g.jsx)(t.code,{children:`md`}),` radius steps and the `,(0,g.jsx)(t.code,{children:`gap-sm`}),`/`,(0,g.jsx)(t.code,{children:`gap-md`}),` steps).
Both are called out in the component's own CSS rather than silently
rounded.`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};