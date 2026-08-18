import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CBa-u0qp.js";import{n as i,t as a}from"./circle-question-mark-BCCdn8p8.js";import{t as o}from"./cx-MB73G3OO.js";function s({size:e=`default`,checked:t=!1,label:n,tooltipIcon:r=!1,disabled:i=!1,forceState:s,className:l,...u}){return(0,c.jsxs)(`label`,{className:o(`pk-toggle`,`pk-toggle--${e}`,i&&`pk-toggle--disabled`,l),"data-force-state":s,children:[(0,c.jsxs)(`span`,{className:`pk-toggle__control`,children:[(0,c.jsx)(`input`,{type:`checkbox`,role:`switch`,checked:t,disabled:i,"aria-checked":t,className:`pk-toggle__input`,...u}),(0,c.jsx)(`span`,{className:`pk-toggle__track`,"aria-hidden":`true`,children:(0,c.jsx)(`span`,{className:`pk-toggle__knob`})})]}),n&&(0,c.jsx)(`span`,{className:`pk-toggle__label pk-text-body-medium`,children:n}),n&&r&&(0,c.jsx)(a,{className:`pk-toggle__tooltip-icon`,"aria-hidden":`true`})]})}var c;function l(){return(l=e((()=>{n(),i(),c=r(),s.__docgenInfo={description:'Controlled switch. `checked` + `onChange` follow the standard native\n`<input type="checkbox">` contract — pass `onChange` through props.',methods:[],displayName:`Toggle`,props:{size:{required:!1,tsType:{name:`union`,raw:`'small' | 'default'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'default'`}]},description:"Figma: `Size`. @default 'default'",defaultValue:{value:`'default'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:"Figma: `Turn` (Off/On). @default false",defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:"Figma: `Label` (On/Off) — also supplies the label's text content."},tooltipIcon:{required:!1,tsType:{name:`boolean`},description:"Figma: `Tooltip icon` (On/Off). Only renders when `label` is also set. @default false",defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:"Figma: `Enabled=False` / `Status=Disabled`.",defaultValue:{value:`false`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`}]},description:"Documentation only — pins `Status=Hover` open so Storybook can screenshot it on a static page. Never use in application code."}},composes:[`Omit`]}})))()}var u=t({Playground:()=>m,Sizes:()=>h,States:()=>_,Types:()=>g,WithTooltipIcon:()=>v,__namedExportsOrder:()=>y,default:()=>p}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Toggle`,component:s,parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:[`small`,`default`],table:{category:`Variant (Figma: Size)`}},checked:{control:`boolean`,table:{category:`Variant (Figma: Turn=On/Off)`}},label:{control:`text`,table:{category:`Content (Figma: Label)`}},tooltipIcon:{control:`boolean`,table:{category:`Variant (Figma: Tooltip icon=On/Off)`}},disabled:{control:`boolean`,table:{category:`Variant (Figma: Enabled=False)`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`],table:{category:`Docs only — never ship`}}},args:{size:`default`,checked:!1,label:`Send tee time reminders`,tooltipIcon:!1,disabled:!1,onChange:f()}},m={},h={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[`default`,`small`].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t}),(0,d.jsxs)(`div`,{className:`sbx-row`,children:[(0,d.jsx)(s,{...e,size:t,checked:!1,label:void 0}),(0,d.jsx)(s,{...e,size:t,checked:!0,label:void 0})]})]},t))})},g={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[!1,!0].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t?`on`:`off`}),(0,d.jsx)(s,{...e,checked:t})]},String(t)))})},_={render:e=>(0,d.jsxs)(`div`,{className:`sbx-row`,children:[[`default`,`hover`,`focus`].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t}),(0,d.jsx)(s,{...e,forceState:t==="default"?void 0:t})]},t)),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`disabled`}),(0,d.jsx)(s,{...e,disabled:!0})]}),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`disabled + on`}),(0,d.jsx)(s,{...e,disabled:!0,checked:!0})]})]})},v={render:e=>(0,d.jsxs)(`div`,{className:`sbx-row`,children:[(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`label only`}),(0,d.jsx)(s,{...e,label:`Notify me about open lane availability`,tooltipIcon:!1})]}),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`label + tooltip icon`}),(0,d.jsx)(s,{...e,label:`Notify me about open lane availability`,tooltipIcon:!0})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'small'] as const).map(size => <div className="sbx-stack" key={size}>
          <span className="sbx-label">{size}</span>
          <div className="sbx-row">
            <Toggle {...args} size={size} checked={false} label={undefined} />
            <Toggle {...args} size={size} checked={true} label={undefined} />
          </div>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Both sizes, Off and On, side by side.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {([false, true] as const).map(checked => <div className="sbx-stack" key={String(checked)}>
          <span className="sbx-label">{checked ? 'on' : 'off'}</span>
          <Toggle {...args} checked={checked} />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Off vs On, with the label and optional tooltip icon that ships with it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Toggle {...args} forceState={s === 'default' ? undefined : s} />
        </div>)}
      <div className="sbx-stack">
        <span className="sbx-label">disabled</span>
        <Toggle {...args} disabled />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled + on</span>
        <Toggle {...args} disabled checked />
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Every real interaction state, pinned open via forceState for a static screenshot.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">label only</span>
        <Toggle {...args} label="Notify me about open lane availability" tooltipIcon={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">label + tooltip icon</span>
        <Toggle {...args} label="Notify me about open lane availability" tooltipIcon={true} />
      </div>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Label on its own, and label plus the tooltip icon (which only renders when a label is set).`,...v.parameters?.docs?.description}}},y=[`Playground`,`Sizes`,`Types`,`States`,`WithTooltipIcon`]})))()}export{g as a,u as i,h as n,v as o,_ as r,b as s,m as t};