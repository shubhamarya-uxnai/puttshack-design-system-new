import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

/** Small solid-fill avatar placeholder so `avatarSrc` has something real to render — no network dependency. */
const AVATAR_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#2F6F4E"/><circle cx="20" cy="15" r="7" fill="#fff"/><rect x="8" y="24" width="24" height="14" rx="7" fill="#fff"/></svg>',
  )

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'promo', 'avatar'],
      table: { category: 'Variant (Figma: Size)' },
    },
    children: { control: 'text', table: { category: 'Content (Figma: Chip label)' } },
    avatarSrc: { control: 'text', table: { category: 'Content (Figma: Avatars)' } },
    avatarInitials: { control: 'text', table: { category: 'Content (Figma: Avatars)' } },
    onRemove: { control: false, table: { category: 'Behavior (Figma: Remove icon)' } },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    variant: 'default',
    children: 'Mini Golf',
    avatarInitials: 'AM',
    onRemove: () => {},
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All three variants side by side — default (dark pill), promo (brand-tinted, use sparingly), avatar (leading avatar + label + remove). */
export const Types: Story = {
  render: (args) => {
    const labels = {
      default: 'Mini Golf',
      promo: 'Happy Hour · 2-for-1',
      avatar: 'Alex Morgan',
    } as const

    return (
      <div className="sbx-row">
        {(['default', 'promo', 'avatar'] as const).map((v) => (
          <div className="sbx-stack" key={v}>
            <span className="sbx-label">{v}</span>
            <Chip {...args} variant={v}>
              {labels[v]}
            </Chip>
          </div>
        ))}
      </div>
    )
  },
}

/** Every real interaction state of the avatar chip's remove button, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Chip {...args} variant="avatar" forceState={s === 'default' ? undefined : s}>
            Alex Morgan
          </Chip>
        </div>
      ))}
    </div>
  ),
}

/** avatarSrc (a real image) vs. the avatarInitials fallback shown when no image is supplied. */
export const AvatarSource: Story = {
  render: (args) => (
    <div className="sbx-row">
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
  ),
}

/** The remove (×) button only renders on the avatar chip when onRemove is passed — otherwise it's label + avatar only. */
export const Removable: Story = {
  render: (args) => (
    <div className="sbx-row">
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
  ),
}
