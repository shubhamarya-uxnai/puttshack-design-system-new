import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Toggle.stories-BrhsdfyV.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`toggle`,children:`Toggle`}),`
`,(0,_.jsx)(t.p,{children:`A standalone binary on/off switch for a setting that takes effect immediately,
like turning on tee time reminders — not for choices inside a form that still
needs a submit step.`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsxs)(t.p,{children:[`Two track sizes: `,(0,_.jsx)(t.code,{children:`default`}),` (40×24px) for standalone settings rows, and
`,(0,_.jsx)(t.code,{children:`small`}),` (32×20px) for dense contexts like table cells or filter panels.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.p,{children:`Off renders an outlined, transparent track with the knob on the left. On
renders a solid magenta track with the knob on the right. Use Toggle — not two
Radio buttons, not a single Checkbox — whenever the choice is a single binary
setting that applies immediately.`}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsxs)(t.p,{children:[`Real states come from real CSS: `,(0,_.jsx)(t.code,{children:`:hover`}),` adds a magenta outline ring around
the track, `,(0,_.jsx)(t.code,{children:`:focus-visible`}),` draws the focus outline, and the `,(0,_.jsx)(t.code,{children:`disabled`}),`
attribute desaturates both On and Off to grey. `,(0,_.jsx)(t.code,{children:`forceState`}),` exists only so
this page can show hover and focus open at once for a static screenshot — it
must never be used in application code.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`with-tooltip-icon`,children:`With tooltip icon`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsxs)(t.p,{children:[`The tooltip icon only renders when a `,(0,_.jsx)(t.code,{children:`label`}),` is also set — it has no
standalone affordance. Use it to attach a short clarification to the setting
without lengthening the label itself.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Token`}),(0,_.jsx)(t.th,{children:`Used for`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-magenta-200`})}),(0,_.jsxs)(t.td,{children:[`On-track fill and border (`,(0,_.jsx)(t.code,{children:`--pk-comp-toggle-color-on`}),`, local to Toggle — no `,(0,_.jsx)(t.code,{children:`--pk-sys-*`}),` token names this exact "toggle on-fill")`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-gap-sm`})}),(0,_.jsx)(t.td,{children:`Gap between the track and the label/tooltip icon`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-radius-full`})}),(0,_.jsx)(t.td,{children:`Fully-rounded track and knob corners`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-strong`})}),(0,_.jsx)(t.td,{children:`Off-track border color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-border-medium`})}),(0,_.jsx)(t.td,{children:`Off-track border width and focus outline width`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-surface-default`})}),(0,_.jsx)(t.td,{children:`Knob fill color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,_.jsx)(t.td,{children:`Focus-visible outline color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-space-2`})}),(0,_.jsx)(t.td,{children:`Focus-visible outline offset`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-surface-disabled`})}),(0,_.jsx)(t.td,{children:`Disabled track fill (both On and Off)`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-disabled-border`})}),(0,_.jsx)(t.td,{children:`Disabled track border color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-disabled`})}),(0,_.jsx)(t.td,{children:`Disabled knob fill and disabled label color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-primary`})}),(0,_.jsx)(t.td,{children:`Label text color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-icon-s`})}),(0,_.jsx)(t.td,{children:`Tooltip icon width/height`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-ref-border-thin`})}),(0,_.jsx)(t.td,{children:`Tooltip icon border width`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-border-default`})}),(0,_.jsx)(t.td,{children:`Tooltip icon border color`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--pk-sys-text-secondary`})}),(0,_.jsx)(t.td,{children:`Tooltip icon glyph color`})]})]})]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Do`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Use Toggle for a single setting that takes effect immediately, like enabling
tee time reminders or lane availability alerts.`}),`
`,(0,_.jsx)(t.li,{children:`Pair a Toggle with a label whenever the setting isn't self-evident from
surrounding context.`}),`
`,(0,_.jsxs)(t.li,{children:[`Use the `,(0,_.jsx)(t.code,{children:`small`}),` size in dense layouts like table rows or filter panels.`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`Don't`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Don't use Toggle inside a form that requires a separate submit action — use
a Checkbox instead.`}),`
`,(0,_.jsx)(t.li,{children:`Don't use two Radio buttons to represent a single on/off setting — that's
what Toggle is for.`}),`
`,(0,_.jsx)(t.li,{children:`Don't show the tooltip icon without a label; it has no meaning on its own
and the component won't render it in that case.`}),`
`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.p,{children:[`Toggle wraps a native `,(0,_.jsx)(t.code,{children:`<input type="checkbox" role="switch">`}),` inside the
visible `,(0,_.jsx)(t.code,{children:`<label>`}),`, so clicking anywhere in the control — track, knob, or
label text — toggles it, and it's reachable and operable via keyboard (Tab to
focus, Space to flip) without any extra handling. `,(0,_.jsx)(t.code,{children:`aria-checked`}),` mirrors the
`,(0,_.jsx)(t.code,{children:`checked`}),` prop so assistive technology announces On/Off state directly, and
the styled track/knob `,(0,_.jsx)(t.code,{children:`<span>`}),` elements are `,(0,_.jsx)(t.code,{children:`aria-hidden`}),` since the real
input already carries the semantics.`]}),`
`,(0,_.jsx)(t.hr,{}),`
`,(0,_.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,_.jsxs)(t.p,{children:[`Source: file `,(0,_.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,_.jsx)(t.code,{children:`33:69109`}),` (component set
`,(0,_.jsx)(t.code,{children:`33:69225`}),`).`]}),`
`,(0,_.jsxs)(t.p,{children:[`The 40×24px / 32×20px track sizes and the magenta on-fill don't map to any
existing `,(0,_.jsx)(t.code,{children:`--pk-sys-*`}),` token, so both are declared as component-local
`,(0,_.jsx)(t.code,{children:`--pk-comp-toggle-*`}),` variables in Toggle.css rather than forced onto an
ill-fitting system token.`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};