import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-CBa-u0qp.js";import{n as r,t as i}from"./check-CIZB-Kh7.js";import{n as a,t as o}from"./Badge-BtnmHYrU.js";var s=t({Playground:()=>d,Statuses:()=>p,Types:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),l=(0,c.jsx)(i,{"aria-hidden":`true`}),u={title:`Components/Badge`,component:o,parameters:{layout:`padded`},argTypes:{type:{control:`inline-radio`,options:[`dot`,`small`,`icon-only`,`text-filled`,`icon-text`],table:{category:`Variant (Figma: Type)`}},status:{control:`inline-radio`,options:[`linked`,`linked-secondary`,`warning`,`success`,`disabled`],table:{category:`Variant (Figma: Status)`}},children:{control:`text`,table:{category:`Content`}},icon:{control:!1,table:{category:`Content (Figma: icon instance-swap)`}}},args:{type:`text-filled`,status:`linked`,children:`Invited`,icon:l}},d={},f={render:e=>(0,c.jsx)(`div`,{className:`sbx-row`,children:[`dot`,`small`,`icon-only`,`text-filled`,`icon-text`].map(t=>(0,c.jsxs)(`div`,{className:`sbx-stack`,children:[(0,c.jsx)(`span`,{className:`sbx-label`,children:t}),(0,c.jsx)(o,{...e,type:t,icon:t===`icon-only`||t===`icon-text`?l:void 0,children:t===`dot`?void 0:t===`small`?`3`:t===`icon-text`?`Confirmed`:`Invited`})]},t))})},p={render:e=>(0,c.jsx)(`div`,{className:`sbx-row`,children:[{status:`linked`,label:`Invited`},{status:`linked-secondary`,label:`Pending`},{status:`warning`,label:`3 spots left`},{status:`success`,label:`Joined`},{status:`disabled`,label:`Closed`}].map(({status:t,label:n})=>(0,c.jsxs)(`div`,{className:`sbx-stack`,children:[(0,c.jsx)(`span`,{className:`sbx-label`,children:t}),(0,c.jsx)(o,{...e,type:`text-filled`,status:t,icon:void 0,children:n})]},t))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['dot', 'small', 'icon-only', 'text-filled', 'icon-text'] as const).map(t => <div className="sbx-stack" key={t}>
          <span className="sbx-label">{t}</span>
          <Badge {...args} type={t} icon={t === 'icon-only' || t === 'icon-text' ? checkIcon : undefined}>
            {t === 'dot' ? undefined : t === 'small' ? '3' : t === 'icon-text' ? 'Confirmed' : 'Invited'}
          </Badge>
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`All Types side by side, each with content sized for what that circle/pill can actually hold.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {([{
      status: 'linked',
      label: 'Invited'
    }, {
      status: 'linked-secondary',
      label: 'Pending'
    }, {
      status: 'warning',
      label: '3 spots left'
    }, {
      status: 'success',
      label: 'Joined'
    }, {
      status: 'disabled',
      label: 'Closed'
    }] as const).map(({
      status,
      label
    }) => <div className="sbx-stack" key={status}>
          <span className="sbx-label">{status}</span>
          <Badge {...args} type="text-filled" status={status} icon={undefined}>
            {label}
          </Badge>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`All Statuses side by side. Status is chosen for what the label means, not by eye.`,...p.parameters?.docs?.description}}},m=[`Playground`,`Types`,`Statuses`]})))()}export{h as a,f as i,d as n,p as r,s as t};