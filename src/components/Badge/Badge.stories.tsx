import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check } from '../../icons'
import { Badge } from './Badge'

/** Fills whatever instance-swap icon Figma passes into the `icon` slot. */
const checkIcon = <Check aria-hidden="true" />

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['dot', 'small', 'icon-only', 'text-filled', 'icon-text'],
      table: { category: 'Variant (Figma: Type)' },
    },
    status: {
      control: 'inline-radio',
      options: ['linked', 'linked-secondary', 'warning', 'success', 'disabled'],
      table: { category: 'Variant (Figma: Status)' },
    },
    children: { control: 'text', table: { category: 'Content' } },
    icon: { control: false, table: { category: 'Content (Figma: icon instance-swap)' } },
  },
  args: { type: 'text-filled', status: 'linked', children: 'Invited', icon: checkIcon },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All Types side by side, each with content sized for what that circle/pill can actually hold. */
export const Types: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['dot', 'small', 'icon-only', 'text-filled', 'icon-text'] as const).map((t) => (
        <div className="sbx-stack" key={t}>
          <span className="sbx-label">{t}</span>
          <Badge
            {...args}
            type={t}
            icon={t === 'icon-only' || t === 'icon-text' ? checkIcon : undefined}
          >
            {t === 'dot' ? undefined : t === 'small' ? '3' : t === 'icon-text' ? 'Confirmed' : 'Invited'}
          </Badge>
        </div>
      ))}
    </div>
  ),
}

/** All Statuses side by side. Status is chosen for what the label means, not by eye. */
export const Statuses: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(
        [
          { status: 'linked', label: 'Invited' },
          { status: 'linked-secondary', label: 'Pending' },
          { status: 'warning', label: '3 spots left' },
          { status: 'success', label: 'Joined' },
          { status: 'disabled', label: 'Closed' },
        ] as const
      ).map(({ status, label }) => (
        <div className="sbx-stack" key={status}>
          <span className="sbx-label">{status}</span>
          <Badge {...args} type="text-filled" status={status} icon={undefined}>
            {label}
          </Badge>
        </div>
      ))}
    </div>
  ),
}
