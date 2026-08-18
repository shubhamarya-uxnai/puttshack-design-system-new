import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-CBa-u0qp.js";import{n as r,t as i}from"./createLucideIcon-CKQsau6G.js";import{n as a,t as o}from"./Button-D8tehQFp.js";var s,c;function l(){return(l=e((()=>{r(),s=[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]],c=i(`arrow-right`,s)})))()}var u,d;function f(){return(f=e((()=>{r(),u=[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`m9 15 2 2 4-4`,key:`1grp1n`}]],d=i(`calendar-check`,u)})))()}var p=t({Icons:()=>S,Playground:()=>v,Sizes:()=>x,States:()=>b,Types:()=>y,__namedExportsOrder:()=>C,default:()=>_}),m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l(),f(),a(),m=n(),h=(0,m.jsx)(d,{"aria-hidden":`true`}),g=(0,m.jsx)(c,{"aria-hidden":`true`}),_={title:`Components/Button`,component:o,parameters:{layout:`padded`},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`secondary`,`tertiary`,`success`,`error`,`warning`,`info`,`ghost`],table:{category:`Variant (Figma: Type)`}},size:{control:`inline-radio`,options:[`default`,`large`],table:{category:`Variant (Figma: Size)`}},disabled:{control:`boolean`,table:{category:`Variant (Figma: State=Disabled)`}},inverse:{control:`boolean`,table:{category:`Variant (Figma: Inverse)`}},onlyIcon:{control:`boolean`,table:{category:`Variant (Figma: Only Icon)`}},leadingIcon:{control:!1,table:{category:`Content (Figma: instance-swap icon slot)`}},trailingIcon:{control:!1,table:{category:`Content (Figma: instance-swap icon slot)`}},children:{control:`text`,table:{category:`Content`}},htmlType:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`HTML (no Figma equivalent)`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`,`pressed`],table:{category:`Docs only — never ship`}}},args:{variant:`primary`,children:`Book a bay`}},v={},y={render:e=>(0,m.jsx)(`div`,{className:`sbx-row`,children:[`primary`,`secondary`,`tertiary`,`success`,`error`,`warning`,`info`,`ghost`].map(t=>(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:t}),(0,m.jsx)(o,{...e,variant:t})]},t))})},b={render:e=>(0,m.jsx)(`div`,{className:`sbx-row`,children:[`default`,`hover`,`focus`,`pressed`].map(t=>(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:t}),(0,m.jsx)(o,{...e,forceState:t==="default"?void 0:t})]},t))})},x={render:e=>(0,m.jsxs)(`div`,{className:`sbx-row`,children:[(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`default — web / mobile`}),(0,m.jsx)(o,{...e,size:`default`})]}),(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`large — kiosk only`}),(0,m.jsx)(o,{...e,size:`large`})]})]})},S={render:e=>(0,m.jsxs)(`div`,{className:`sbx-row`,children:[(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`label only`}),(0,m.jsx)(o,{...e})]}),(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`leading icon`}),(0,m.jsx)(o,{...e,leadingIcon:h})]}),(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`trailing icon`}),(0,m.jsx)(o,{...e,trailingIcon:g})]}),(0,m.jsxs)(`div`,{className:`sbx-stack`,children:[(0,m.jsx)(`span`,{className:`sbx-label`,children:`icon only`}),(0,m.jsx)(o,{...e,onlyIcon:!0,leadingIcon:h})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info', 'ghost'] as const).map(v => <div className="sbx-stack" key={v}>
          <span className="sbx-label">{v}</span>
          <Button {...args} variant={v} />
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`All Types side by side.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Button {...args} forceState={s === 'default' ? undefined : s} />
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Every real interaction state, pinned open via forceState for a static screenshot.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">default — web / mobile</span>
        <Button {...args} size="default" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">large — kiosk only</span>
        <Button {...args} size="large" />
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Default (web/mobile) vs Large — Large is the Kiosk touch-target size only.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">label only</span>
        <Button {...args} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">leading icon</span>
        <Button {...args} leadingIcon={IconCalendarCheck} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">trailing icon</span>
        <Button {...args} trailingIcon={IconArrowRight} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">icon only</span>
        <Button {...args} onlyIcon leadingIcon={IconCalendarCheck} />
      </div>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Label-only vs leading icon, trailing icon and icon-only.`,...S.parameters?.docs?.description}}},C=[`Playground`,`Types`,`States`,`Sizes`,`Icons`]})))()}export{b as a,x as i,S as n,y as o,v as r,w as s,p as t};