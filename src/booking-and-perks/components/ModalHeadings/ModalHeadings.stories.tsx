import type { Meta, StoryObj } from '@storybook/react-vite'
import { ModalHeadings } from './ModalHeadings'

const meta = {
  title: 'Booking & Perks/Modal Headings',
  component: ModalHeadings,
  parameters: { layout: 'padded' },
  args: {
    layout: 'horizontal',
    type: 'subheading',
    category: 'Category',
    title: 'Title',
    subtitle: "Party 2 won’t be able to play on this booking.",
    icon: true,
  },
} satisfies Meta<typeof ModalHeadings>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Layouts: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['horizontal', 'vertical'] as const).map((l) => (
        <div className="sbx-stack" key={l}>
          <span className="sbx-label">{l}</span>
          <ModalHeadings {...args} layout={l} />
        </div>
      ))}
    </div>
  ),
}
