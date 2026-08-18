import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-CBa-u0qp.js";import{n as r,t as i}from"./Checkbox-B_8vkkmv.js";var a=t({CheckedStates:()=>u,Disabled:()=>m,ErrorStatus:()=>p,Playground:()=>l,Sizes:()=>d,States:()=>f,WithTooltipAndGrouping:()=>h,__namedExportsOrder:()=>g,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Checkbox`,component:i,parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:[`mobile`,`desktop`,`kiosk`],table:{category:`Variant (Figma: Size)`}},checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`],table:{category:`Variant (Figma: Checked)`}},label:{control:`text`,table:{category:`Content (Figma: Label)`}},tooltipIcon:{control:`boolean`,table:{category:`Variant (Figma: Tooltip icon)`}},error:{control:`boolean`,table:{category:`Variant (Figma: Status=Error)`}},disabled:{control:`boolean`,table:{category:`Variant (Figma: Enabled=False)`}},onCheckedChange:{table:{category:`Events`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`],table:{category:`Docs only — never ship`}}},args:{size:`desktop`,checked:!1,label:`Book a party of 6+`,tooltipIcon:!1,error:!1,disabled:!1,onCheckedChange:s()}},l={},u={render:e=>(0,o.jsx)(`div`,{className:`sbx-row`,children:[!1,!0,`indeterminate`].map(t=>(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:t===!1?`unchecked`:t===!0?`checked`:`indeterminate`}),(0,o.jsx)(i,{...e,checked:t})]},String(t)))})},d={render:e=>(0,o.jsx)(`div`,{className:`sbx-row`,children:[`mobile`,`desktop`,`kiosk`].map(t=>(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:t}),(0,o.jsx)(i,{...e,size:t})]},t))})},f={render:e=>(0,o.jsx)(`div`,{className:`sbx-row`,children:[`default`,`hover`,`focus`].map(t=>(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:t}),(0,o.jsx)(i,{...e,forceState:t==="default"?void 0:t})]},t))})},p={render:e=>(0,o.jsxs)(`div`,{className:`sbx-row`,children:[(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`unchecked, error`}),(0,o.jsx)(i,{...e,checked:!1,error:!0,label:`Accept the venue waiver`})]}),(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`checked (error ignored)`}),(0,o.jsx)(i,{...e,checked:!0,error:!0,label:`Accept the venue waiver`})]})]})},m={render:e=>(0,o.jsxs)(`div`,{className:`sbx-row`,children:[(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`disabled, unchecked`}),(0,o.jsx)(i,{...e,disabled:!0,checked:!1,label:`Add glow-in-the-dark balls`})]}),(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`disabled, checked`}),(0,o.jsx)(i,{...e,disabled:!0,checked:!0,label:`Add glow-in-the-dark balls`})]})]})},h={render:e=>(0,o.jsxs)(`div`,{className:`sbx-row`,children:[(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`with tooltip icon`}),(0,o.jsx)(i,{...e,tooltipIcon:!0,label:`Include bumpers for kids' lane`})]}),(0,o.jsxs)(`div`,{className:`sbx-stack`,children:[(0,o.jsx)(`span`,{className:`sbx-label`,children:`indeterminate parent + children`}),(0,o.jsxs)(`div`,{className:`sbx-stack`,style:{gap:`var(--pk-sys-gap-sm)`},children:[(0,o.jsx)(i,{...e,checked:`indeterminate`,label:`All tee times (Riverside course)`}),(0,o.jsx)(i,{...e,checked:!0,label:`9:00 AM tee time`}),(0,o.jsx)(i,{...e,checked:!1,label:`9:30 AM tee time`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {([false, true, 'indeterminate'] as const).map(c => <div className="sbx-stack" key={String(c)}>
          <span className="sbx-label">{c === false ? 'unchecked' : c === true ? 'checked' : 'indeterminate'}</span>
          <Checkbox {...args} checked={c} />
        </div>)}
    </div>
}`,...u.parameters?.docs?.source},description:{story:`All Checked states side by side — No, Yes, and Indeterminate.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['mobile', 'desktop', 'kiosk'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Checkbox {...args} size={s} />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:`All three Size variants — mobile (20px), desktop (24px), kiosk (32px).`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Checkbox {...args} forceState={s === 'default' ? undefined : s} />
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Every real interaction state, pinned open via forceState for a static screenshot.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">unchecked, error</span>
        <Checkbox {...args} checked={false} error label="Accept the venue waiver" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">checked (error ignored)</span>
        <Checkbox {...args} checked error label="Accept the venue waiver" />
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Error status only ever renders when Checked=No — an already-checked box never shows error.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">disabled, unchecked</span>
        <Checkbox {...args} disabled checked={false} label="Add glow-in-the-dark balls" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled, checked</span>
        <Checkbox {...args} disabled checked label="Add glow-in-the-dark balls" />
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Disabled, in both the unchecked and checked positions.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">with tooltip icon</span>
        <Checkbox {...args} tooltipIcon label="Include bumpers for kids' lane" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">indeterminate parent + children</span>
        <div className="sbx-stack" style={{
        gap: 'var(--pk-sys-gap-sm)'
      }}>
          <Checkbox {...args} checked="indeterminate" label="All tee times (Riverside course)" />
          <Checkbox {...args} checked label="9:00 AM tee time" />
          <Checkbox {...args} checked={false} label="9:30 AM tee time" />
        </div>
      </div>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`With the optional tooltip icon, and a parent/child indeterminate grouping pattern.`,...h.parameters?.docs?.description}}},g=[`Playground`,`CheckedStates`,`Sizes`,`States`,`ErrorStatus`,`Disabled`,`WithTooltipAndGrouping`]})))()}export{l as a,h as c,p as i,_ as l,u as n,d as o,m as r,f as s,a as t};