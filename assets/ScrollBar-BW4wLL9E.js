import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CBa-u0qp.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{c as i,i as a,n as o,s}from"./blocks-CUdpzK9u.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./ScrollBar.stories-CAu2g6Ok.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:l}),`
`,(0,g.jsx)(t.h1,{id:`scroll-bar`,children:`Scroll Bar`}),`
`,(0,g.jsx)(t.p,{children:`A visual indicator of content position within a scrollable area. Reach for it
in lists, panels, and content containers where the content can exceed the
visible area — the native OS scrollbar is hidden and replaced by this
handle/track, driven by the same real scroll position.`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`overflow-behavior`,children:`Overflow behavior`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsxs)(t.p,{children:[`The handle and track only render once content height exceeds the viewport's
`,(0,g.jsx)(t.code,{children:`maxHeight`}),` — handle size scales to the visible content fraction, and its
position tracks scroll progress in real time. When content fits entirely
within the viewport, nothing renders at all: no empty track, no zero-height
handle. That's the "auto-hide" behavior working correctly, not a bug to
design around.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`states`,children:`States`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsxs)(t.p,{children:[`Two real states are implemented in CSS: the handle sits at a tertiary color
by default and darkens to a secondary color on `,(0,g.jsx)(t.code,{children:`:hover`}),` / `,(0,g.jsx)(t.code,{children:`:active`}),` (pressed).
A `,(0,g.jsx)(t.code,{children:`:focus-visible`}),` outline appears when the handle is reached via keyboard.
`,(0,g.jsx)(t.code,{children:`forceState`}),` exists only so this page can show hover, focus, and pressed open
at once for a static screenshot — it must never be used in application code.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`content-types`,children:`Content types`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsxs)(t.p,{children:[`The handle math only cares about total rendered content height, not what that
content is — dense list rows and long-form paragraph text both work
identically as `,(0,g.jsx)(t.code,{children:`children`}),`.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`tokens-consumed`,children:`Tokens consumed`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Token`}),(0,g.jsx)(t.th,{children:`Used for`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-gap-xs`})}),(0,g.jsx)(t.td,{children:`Gap between the content viewport and the track`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-xs`})}),(0,g.jsx)(t.td,{children:`Track corner radius`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-surface-subtle`})}),(0,g.jsx)(t.td,{children:`Track background fill`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-radius-full`})}),(0,g.jsx)(t.td,{children:`Handle corner radius (fully rounded)`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-text-tertiary`})}),(0,g.jsx)(t.td,{children:`Handle background, default state`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-text-secondary`})}),(0,g.jsx)(t.td,{children:`Handle background, hover and pressed states`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-border-medium`})}),(0,g.jsx)(t.td,{children:`Focus outline width`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-sys-border-focus`})}),(0,g.jsx)(t.td,{children:`Focus outline color`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--pk-ref-space-2`})}),(0,g.jsx)(t.td,{children:`Focus outline offset`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Two more variables are declared locally in `,(0,g.jsx)(t.code,{children:`ScrollBar.css`}),` rather than pulled
from the token set, since neither has a system-token equivalent:
`,(0,g.jsx)(t.code,{children:`--pk-comp-scroll-bar-rail-width`}),` (8px — matched 1:1 to the handle width, since
the Figma source crop shows no separate track chrome to size against) and
`,(0,g.jsx)(t.code,{children:`--pk-comp-scroll-bar-max-height`}),` (the demo viewport constraint, set at
runtime from the `,(0,g.jsx)(t.code,{children:`maxHeight`}),` prop).`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Do`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Use Scroll Bar for lists, panels, and content containers where content can
genuinely exceed the visible area — bookings lists, venue policy text, and
similar overflow content.`}),`
`,(0,g.jsxs)(t.li,{children:[`Give the viewport real height via `,(0,g.jsx)(t.code,{children:`maxHeight`}),` so the browser has something
to constrain against and the handle can activate.`]}),`
`,(0,g.jsx)(t.li,{children:`Let it auto-hide when content fits — that's the intended behavior, not a
state to override.`}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Don't`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Don't use it on content that already fits entirely within its container —
the track/handle won't render at all.`}),`
`,(0,g.jsx)(t.li,{children:`Don't use it on mobile — this is a desktop, pointer-driven scrollbar; defer
to native platform scrolling there instead.`}),`
`,(0,g.jsx)(t.li,{children:`Don't make the track itself interactive. Only the handle responds to drag;
there's no click-to-jump on the track and no track hover state.`}),`
`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`The handle is a focusable element (`,(0,g.jsx)(t.code,{children:`tabIndex={0}`}),`) with `,(0,g.jsx)(t.code,{children:`role="scrollbar"`}),`,
`,(0,g.jsx)(t.code,{children:`aria-orientation="vertical"`}),`, and `,(0,g.jsx)(t.code,{children:`aria-controls`}),` pointing at the scrollable
viewport, so assistive technology can identify what it's driving.
`,(0,g.jsx)(t.code,{children:`aria-valuenow`}),` / `,(0,g.jsx)(t.code,{children:`aria-valuemin`}),` / `,(0,g.jsx)(t.code,{children:`aria-valuemax`}),` mirror scroll progress as
a 0–100 percentage in real time. Keyboard users can focus the handle and use
`,(0,g.jsx)(t.code,{children:`ArrowUp`}),` / `,(0,g.jsx)(t.code,{children:`ArrowDown`}),` to scroll in 10%-of-viewport steps, or `,(0,g.jsx)(t.code,{children:`Home`}),` / `,(0,g.jsx)(t.code,{children:`End`}),`
to jump to the top or bottom. The underlying viewport is a plain scrollable
`,(0,g.jsx)(t.code,{children:`<div>`}),` with the OS-drawn scrollbar hidden via `,(0,g.jsx)(t.code,{children:`scrollbar-width`}),`/
`,(0,g.jsx)(t.code,{children:`-webkit-scrollbar`}),`, so mouse wheel and trackpad scrolling keep working
natively alongside the custom handle.`]}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h2,{id:`figma-parity`,children:`Figma parity`}),`
`,(0,g.jsxs)(t.p,{children:[`Source: file `,(0,g.jsx)(t.code,{children:`x40IO8pltwoAFiVkBZEUzT`}),`, node `,(0,g.jsx)(t.code,{children:`12851:28067`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Figma doesn't specify a minimum handle size. Without a floor, a handle
representing a tiny slice of very long content would shrink below a
comfortably draggable size, so the implementation adds a 24px minimum
(`,(0,g.jsx)(t.code,{children:`MIN_HANDLE_SIZE`}),`) that isn't part of the Figma spec itself. The track width
is also matched 1:1 to the 8px handle width rather than given a separate,
wider gutter, since the source file's isolated component crop shows no
visible track chrome to size against.`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};