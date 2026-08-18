import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CBa-u0qp.js";import{n as i,t as a}from"./circle-question-mark-BCCdn8p8.js";import{t as o}from"./cx-MB73G3OO.js";function s({size:e=`desktop`,checked:t=!1,label:n,tooltipIcon:r=!1,tick:i=!1,disabled:s=!1,forceState:l,className:u,...d}){return(0,c.jsxs)(`label`,{className:o(`pk-radio`,i&&`pk-radio--tick`,u),"data-screen":e,"data-force-state":l,children:[(0,c.jsx)(`input`,{type:`radio`,checked:t,disabled:s,className:`pk-radio__input`,...d}),(0,c.jsx)(`span`,{className:`pk-radio__control`,"aria-hidden":`true`}),(n||r)&&(0,c.jsxs)(`span`,{className:`pk-radio__text`,children:[n&&(0,c.jsx)(`span`,{className:o(`pk-radio__label`,`pk-text-body-medium`),children:n}),r&&(0,c.jsx)(a,{className:`pk-radio__tooltip-icon`,"aria-hidden":`true`})]})]})}var c;function l(){return(l=e((()=>{n(),i(),c=r(),s.__docgenInfo={description:`A single radio input. Mutual exclusion across a group (only one radio
selected at a time) is the consumer's responsibility — via a shared native
\`name\` attribute or controlled state — this component does not ship a
RadioGroup wrapper.

Radio groups should maintain 8–12px vertical spacing between items.`,methods:[],displayName:`RadioButton`,props:{size:{required:!1,tsType:{name:`union`,raw:`'mobile' | 'desktop' | 'kiosk'`,elements:[{name:`literal`,value:`'mobile'`},{name:`literal`,value:`'desktop'`},{name:`literal`,value:`'kiosk'`}]},description:"Figma: `Size`. @default 'desktop'",defaultValue:{value:`'desktop'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:"Figma: `Selection` (Off/On) — named `checked` here to match standard\nReact radio-input conventions rather than the Figma property name.",defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:"Figma: `Label` text. Renders inside the tap target alongside the circle."},tooltipIcon:{required:!1,tsType:{name:`boolean`},description:"Figma: `Tooltip icon`. Shows a small info glyph next to the label.",defaultValue:{value:`false`,computed:!1}},tick:{required:!1,tsType:{name:`boolean`},description:`Figma: "Selected with Tick" — when true and checked, the circle fills
solid with a white checkmark instead of showing a plain inner dot.
@default false`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:"Figma: `Enabled=False` / `Status=Disabled`.",defaultValue:{value:`false`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus' | 'pressed'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'pressed'`}]},description:`Documentation only — pins an interaction state open so Storybook can screenshot hover on a static page. Never use in application code.`}},composes:[`Omit`]}})))()}var u=t({Disabled:()=>v,GroupExample:()=>_,Playground:()=>p,SelectionStyle:()=>g,Sizes:()=>m,States:()=>h,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),d=r(),f={title:`Components/Radio Button`,component:s,parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:[`mobile`,`desktop`,`kiosk`],table:{category:`Variant (Figma: Size)`}},checked:{control:`boolean`,table:{category:`Variant (Figma: Selection)`}},tick:{control:`boolean`,table:{category:`Variant (Figma: Selected with Tick)`}},disabled:{control:`boolean`,table:{category:`Variant (Figma: Status=Disabled)`}},label:{control:`text`,table:{category:`Content (Figma: Label)`}},tooltipIcon:{control:`boolean`,table:{category:`Content (Figma: Tooltip icon)`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`,`pressed`],table:{category:`Docs only — never ship`}}},args:{size:`desktop`,checked:!0,label:`6:30pm tee time`,tooltipIcon:!1,tick:!1,disabled:!1,readOnly:!0}},p={},m={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[`mobile`,`desktop`,`kiosk`].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t}),(0,d.jsx)(s,{...e,size:t})]},t))})},h={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[`default`,`hover`,`focus`,`pressed`].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t}),(0,d.jsx)(s,{...e,forceState:t==="default"?void 0:t})]},t))})},g={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[!1,!0].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t?`tick`:`dot`}),(0,d.jsx)(s,{...e,tick:t})]},String(t)))})},_={render:()=>(0,d.jsxs)(`fieldset`,{style:{border:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:12},children:[(0,d.jsx)(`legend`,{className:`sbx-label`,style:{marginBottom:8},children:`Party size`}),(0,d.jsx)(s,{name:`party-size`,label:`2 players`,checked:!0,readOnly:!0}),(0,d.jsx)(s,{name:`party-size`,label:`4 players`,tooltipIcon:!0,readOnly:!0}),(0,d.jsx)(s,{name:`party-size`,label:`6 players (large bay)`,readOnly:!0}),(0,d.jsx)(s,{name:`party-size`,label:`8+ players — call the venue`,disabled:!0,readOnly:!0})]})},v={render:e=>(0,d.jsxs)(`div`,{className:`sbx-row`,children:[(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`disabled, unchecked`}),(0,d.jsx)(s,{...e,label:`Sunset Hill venue`,disabled:!0,checked:!1,readOnly:!0})]}),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`disabled, checked`}),(0,d.jsx)(s,{...e,label:`Sunset Hill venue`,disabled:!0,checked:!0,readOnly:!0})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['mobile', 'desktop', 'kiosk'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <RadioButton {...args} size={s} />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`All Sizes side by side.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <RadioButton {...args} forceState={s === 'default' ? undefined : s} />
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Every real interaction state, pinned open via forceState for a static screenshot.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {([false, true] as const).map(t => <div className="sbx-stack" key={String(t)}>
          <span className="sbx-label">{t ? 'tick' : 'dot'}</span>
          <RadioButton {...args} tick={t} />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Plain filled-dot selection vs. "Selected with Tick" — the solid magenta
circle with a white checkmark, used where clarity of completion matters.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <fieldset style={{
    border: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <legend className="sbx-label" style={{
      marginBottom: 8
    }}>
        Party size
      </legend>
      <RadioButton name="party-size" label="2 players" checked readOnly />
      <RadioButton name="party-size" label="4 players" tooltipIcon readOnly />
      <RadioButton name="party-size" label="6 players (large bay)" readOnly />
      <RadioButton name="party-size" label="8+ players — call the venue" disabled readOnly />
    </fieldset>
}`,..._.parameters?.docs?.source},description:{story:`A single radio group — party size at booking. Mutual exclusion, the
default pre-selection and the shared native \`name\` are all handled by the
consumer, not by RadioButton itself.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">disabled, unchecked</span>
        <RadioButton {...args} label="Sunset Hill venue" disabled checked={false} readOnly />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled, checked</span>
        <RadioButton {...args} label="Sunset Hill venue" disabled checked readOnly />
      </div>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Disabled, unchecked vs. checked.`,...v.parameters?.docs?.description}}},y=[`Playground`,`Sizes`,`States`,`SelectionStyle`,`GroupExample`,`Disabled`]})))()}export{g as a,b as c,u as i,_ as n,m as o,p as r,h as s,v as t};