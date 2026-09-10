import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserX2 } from '../../../icons'
import { Icons } from './Icons'

const meta = {
  title: 'Booking & Perks/Icons',
  component: Icons,
  parameters: { layout: 'padded' },
  args: { status: 'negative', type: 'default', icon: <UserX2 aria-hidden="true" /> },
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Statuses: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['negative', 'positive', 'warning', 'informative', 'brand'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Icons {...args} status={s} />
        </div>
      ))}
    </div>
  ),
}
