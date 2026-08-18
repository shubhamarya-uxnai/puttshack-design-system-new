import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CBa-u0qp.js";import{n as i,t as a}from"./x-7aN9gktO.js";import{t as o}from"./cx-MB73G3OO.js";function s({children:e,variant:t=`default`,avatarSrc:n,avatarInitials:r,onRemove:i,forceState:s,className:l,...u}){let d=t===`avatar`,f=d&&!!i;return(0,c.jsxs)(`div`,{className:o(`pk-chip`,`pk-chip--${t}`,l),...u,children:[d&&(0,c.jsx)(`span`,{className:`pk-chip__avatar`,"aria-hidden":`true`,children:n?(0,c.jsx)(`img`,{className:`pk-chip__avatar-image`,src:n,alt:``}):(0,c.jsx)(`span`,{className:`pk-text-label-x-small pk-chip__avatar-initials`,children:r})}),(0,c.jsx)(`span`,{className:`pk-text-label-medium pk-chip__label`,children:e}),f&&(0,c.jsx)(`button`,{type:`button`,className:`pk-chip__remove`,onClick:i,"aria-label":typeof e==`string`?`Remove ${e}`:`Remove`,"data-force-state":s,children:(0,c.jsx)(a,{"aria-hidden":`true`})})]})}var c;function l(){return(l=e((()=>{n(),i(),c=r(),s.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"Figma: `Chip label` text node."},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'promo' | 'avatar'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'promo'`},{name:`literal`,value:`'avatar'`}]},description:"Figma: `Size` (Small/Yellow/AVATAR), renamed — see `ChipVariant`. @default 'default'",defaultValue:{value:`'default'`,computed:!1}},avatarSrc:{required:!1,tsType:{name:`string`},description:"Figma: `Avatars` instance image fill. Only rendered when `variant='avatar'`."},avatarInitials:{required:!1,tsType:{name:`string`},description:"Fallback initials shown in the avatar circle when `avatarSrc` isn't given. Only meaningful when `variant='avatar'`."},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Figma: `Remove icon` instance. Only rendered — as an interactive ×\nbutton — when `variant='avatar'` AND this is provided. Chips don't\nassume a remove handler always exists; wire it manually."},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus' | 'pressed'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'pressed'`}]},description:`Documentation only — pins the remove button's interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code.`}},composes:[`Omit`]}})))()}var u=t({AvatarSource:()=>_,Playground:()=>m,Removable:()=>v,States:()=>g,Types:()=>h,__namedExportsOrder:()=>y,default:()=>p}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),d=r(),f=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Crect%20width%3D%2240%22%20height%3D%2240%22%20fill%3D%22%232F6F4E%22%2F%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2215%22%20r%3D%227%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%2224%22%20width%3D%2224%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E`,p={title:`Components/Chip`,component:s,parameters:{layout:`padded`},argTypes:{variant:{control:`inline-radio`,options:[`default`,`promo`,`avatar`],table:{category:`Variant (Figma: Size)`}},children:{control:`text`,table:{category:`Content (Figma: Chip label)`}},avatarSrc:{control:`text`,table:{category:`Content (Figma: Avatars)`}},avatarInitials:{control:`text`,table:{category:`Content (Figma: Avatars)`}},onRemove:{control:!1,table:{category:`Behavior (Figma: Remove icon)`}},forceState:{control:`inline-radio`,options:[void 0,`hover`,`focus`,`pressed`],table:{category:`Docs only — never ship`}}},args:{variant:`default`,children:`Mini Golf`,avatarInitials:`AM`,onRemove:()=>{}}},m={},h={render:e=>{let t={default:`Mini Golf`,promo:`Happy Hour · 2-for-1`,avatar:`Alex Morgan`};return(0,d.jsx)(`div`,{className:`sbx-row`,children:[`default`,`promo`,`avatar`].map(n=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:n}),(0,d.jsx)(s,{...e,variant:n,children:t[n]})]},n))})}},g={render:e=>(0,d.jsx)(`div`,{className:`sbx-row`,children:[`default`,`hover`,`focus`,`pressed`].map(t=>(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:t}),(0,d.jsx)(s,{...e,variant:`avatar`,forceState:t==="default"?void 0:t,children:`Alex Morgan`})]},t))})},_={render:e=>(0,d.jsxs)(`div`,{className:`sbx-row`,children:[(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`avatarSrc`}),(0,d.jsx)(s,{...e,variant:`avatar`,avatarSrc:f,avatarInitials:void 0,children:`Alex Morgan`})]}),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`avatarInitials (fallback)`}),(0,d.jsx)(s,{...e,variant:`avatar`,avatarSrc:void 0,avatarInitials:`AM`,children:`Alex Morgan`})]})]})},v={render:e=>(0,d.jsxs)(`div`,{className:`sbx-row`,children:[(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`no onRemove`}),(0,d.jsx)(s,{...e,variant:`avatar`,onRemove:void 0,children:`Sam Rivera`})]}),(0,d.jsxs)(`div`,{className:`sbx-stack`,children:[(0,d.jsx)(`span`,{className:`sbx-label`,children:`onRemove passed`}),(0,d.jsx)(s,{...e,variant:`avatar`,onRemove:()=>{},children:`Sam Rivera`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`Turn every knob. This is the one to reach for when checking a combination.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const labels = {
      default: 'Mini Golf',
      promo: 'Happy Hour · 2-for-1',
      avatar: 'Alex Morgan'
    } as const;
    return <div className="sbx-row">
        {(['default', 'promo', 'avatar'] as const).map(v => <div className="sbx-stack" key={v}>
            <span className="sbx-label">{v}</span>
            <Chip {...args} variant={v}>
              {labels[v]}
            </Chip>
          </div>)}
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`All three variants side by side — default (dark pill), promo (brand-tinted, use sparingly), avatar (leading avatar + label + remove).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map(s => <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Chip {...args} variant="avatar" forceState={s === 'default' ? undefined : s}>
            Alex Morgan
          </Chip>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Every real interaction state of the avatar chip's remove button, pinned open via forceState for a static screenshot.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">avatarSrc</span>
        <Chip {...args} variant="avatar" avatarSrc={AVATAR_IMAGE} avatarInitials={undefined}>
          Alex Morgan
        </Chip>
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">avatarInitials (fallback)</span>
        <Chip {...args} variant="avatar" avatarSrc={undefined} avatarInitials="AM">
          Alex Morgan
        </Chip>
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`avatarSrc (a real image) vs. the avatarInitials fallback shown when no image is supplied.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">no onRemove</span>
        <Chip {...args} variant="avatar" onRemove={undefined}>
          Sam Rivera
        </Chip>
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">onRemove passed</span>
        <Chip {...args} variant="avatar" onRemove={() => {}}>
          Sam Rivera
        </Chip>
      </div>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`The remove (×) button only renders on the avatar chip when onRemove is passed — otherwise it's label + avatar only.`,...v.parameters?.docs?.description}}},y=[`Playground`,`Types`,`States`,`AvatarSource`,`Removable`]})))()}export{g as a,v as i,u as n,h as o,m as r,b as s,_ as t};