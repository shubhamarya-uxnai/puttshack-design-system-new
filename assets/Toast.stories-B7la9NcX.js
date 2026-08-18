import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CBa-u0qp.js";import{n as i,t as a}from"./createLucideIcon-CKQsau6G.js";import{n as o,t as s}from"./check-CIZB-Kh7.js";import{t as c}from"./cx-MB73G3OO.js";var l,u;function d(){return(d=e((()=>{i(),l=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],u=a(`sparkles`,l)})))()}var f,p;function m(){return(m=e((()=>{i(),f=[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],p=a(`triangle-alert`,f)})))()}function h({variant:e=`warning`,title:t,message:n,icon:r,onDismiss:i,forceState:a,className:o,...s}){return(0,g.jsxs)(`div`,{role:`status`,className:c(`pk-toast`,`pk-toast--${e}`,o),...s,children:[(0,g.jsx)(`span`,{className:`pk-toast__icon`,"aria-hidden":`true`,children:r}),(0,g.jsxs)(`div`,{className:`pk-toast__content`,children:[t&&(0,g.jsx)(`p`,{className:`pk-toast__title pk-text-headline-small`,children:t}),(0,g.jsx)(`p`,{className:`pk-toast__message pk-text-body-small`,children:n})]}),i&&(0,g.jsx)(`button`,{type:`button`,className:`pk-toast__dismiss`,onClick:i,"aria-label":`Dismiss`,"data-force-state":a,children:(0,g.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})]})}var g;function _(){return(_=e((()=>{n(),g=r(),h.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'warning' | 'promo' | 'success'`,elements:[{name:`literal`,value:`'warning'`},{name:`literal`,value:`'promo'`},{name:`literal`,value:`'success'`}]},description:"Figma: `Property 1`. @default 'warning'",defaultValue:{value:`'warning'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:'Bold uppercase headline shown above `message`. Confirmed for `variant="success"`\n(e.g. "YOU ARE READY"); leave unset for the warning/promo single-sentence layout.'},message:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"Primary content. For `warning`/`promo`, pass a string or a fragment with an inner\n`<strong>` for the bold lead-in (e.g. `<><strong>Heads up —</strong> the rest of the\nsentence.</>`) — the component doesn't parse bold out of a plain string itself. When\n`title` is set, this renders as the secondary body line below it."},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Figma: instance-swap icon slot in the leading circle. No default icon ships with this extraction — always pass one.`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`When provided, renders a dismiss control that calls this on click.`},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus' | 'pressed'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'pressed'`}]},description:`Documentation only — pins an interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code.`}}}})))()}var v=t({Playground:()=>w,States:()=>E,Types:()=>T,WithDismiss:()=>D,__namedExportsOrder:()=>O,default:()=>C}),y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{o(),d(),m(),_(),y=r(),b=(0,y.jsx)(p,{"aria-hidden":`true`}),x=(0,y.jsx)(s,{"aria-hidden":`true`}),S=(0,y.jsx)(u,{"aria-hidden":`true`}),C={title:`Components/Toast`,component:h,parameters:{layout:`padded`},argTypes:{variant:{control:`inline-radio`,options:[`warning`,`promo`,`success`],table:{category:`Variant (Figma: Property 1)`}},title:{control:`text`,table:{category:`Content (Figma: title — success only)`}},message:{control:!1,table:{category:`Content (Figma: message — pass JSX with an inner <strong> for the bold lead-in on warning/promo)`}},icon:{control:!1,table:{category:`Content (Figma: icon instance-swap — required, no default ships)`}},onDismiss:{control:!1,table:{category:`Behavior (renders dismiss control only when provided)`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`,`pressed`],table:{category:`Docs only — never ship`}}},args:{variant:`warning`,message:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`strong`,{children:`Heads up —`}),` Lane 4 closes for maintenance at 6:00 PM tonight.`]}),icon:b,onDismiss:()=>{}}},w={},T={render:e=>(0,y.jsx)(`div`,{className:`sbx-row`,children:[{variant:`warning`,icon:b,title:void 0,message:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`strong`,{children:`Heads up —`}),` Lane 4 closes for maintenance at 6:00 PM tonight.`]})},{variant:`promo`,icon:S,title:void 0,message:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`strong`,{children:`Limited time —`}),` Book a Saturday tee time and get a round on the house.`]})},{variant:`success`,icon:x,title:`YOU'RE ALL SET`,message:`Your party of 6 is confirmed for 7:30 PM at Puttshack Denver.`}].map(({variant:t,icon:n,title:r,message:i})=>(0,y.jsxs)(`div`,{className:`sbx-stack`,children:[(0,y.jsx)(`span`,{className:`sbx-label`,children:t}),(0,y.jsx)(h,{...e,variant:t,icon:n,title:r,message:i})]},t))})},E={render:e=>(0,y.jsx)(`div`,{className:`sbx-row`,children:[`default`,`hover`,`focus`,`pressed`].map(t=>(0,y.jsxs)(`div`,{className:`sbx-stack`,children:[(0,y.jsx)(`span`,{className:`sbx-label`,children:t}),(0,y.jsx)(h,{...e,forceState:t==="default"?void 0:t})]},t))})},D={render:e=>(0,y.jsxs)(`div`,{className:`sbx-row`,children:[(0,y.jsxs)(`div`,{className:`sbx-stack`,children:[(0,y.jsx)(`span`,{className:`sbx-label`,children:`no dismiss`}),(0,y.jsx)(h,{...e,onDismiss:void 0})]}),(0,y.jsxs)(`div`,{className:`sbx-stack`,children:[(0,y.jsx)(`span`,{className:`sbx-label`,children:`dismissible`}),(0,y.jsx)(h,{...e,onDismiss:()=>{}})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {([{
      variant: 'warning',
      icon: alertIcon,
      title: undefined,
      message: <>
                <strong>Heads up —</strong> Lane 4 closes for maintenance at 6:00 PM tonight.
              </>
    }, {
      variant: 'promo',
      icon: sparkleIcon,
      title: undefined,
      message: <>
                <strong>Limited time —</strong> Book a Saturday tee time and get a round on the house.
              </>
    }, {
      variant: 'success',
      icon: checkIcon,
      title: "YOU'RE ALL SET",
      message: 'Your party of 6 is confirmed for 7:30 PM at Puttshack Denver.'
    }] as const).map(({
      variant,
      icon,
      title,
      message
    }) => <div className="sbx-stack" key={variant}>
          <span className="sbx-label">{variant}</span>
          <Toast {...args} variant={variant} icon={icon} title={title} message={message} />
        </div>)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:`All variants side by side, each with the copy pattern it actually uses.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Toast {...args} forceState={s === 'default' ? undefined : s} />
        </div>)}
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Every real interaction state on the dismiss control, pinned open via forceState for a static screenshot.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">no dismiss</span>
        <Toast {...args} onDismiss={undefined} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">dismissible</span>
        <Toast {...args} onDismiss={() => {}} />
      </div>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`onDismiss is optional — the dismiss control only renders when it's provided.`,...D.parameters?.docs?.description}}},O=[`Playground`,`Types`,`States`,`WithDismiss`]})))()}export{D as a,T as i,E as n,k as o,v as r,w as t};