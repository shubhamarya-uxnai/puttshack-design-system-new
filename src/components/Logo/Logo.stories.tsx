import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './Logo'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'range', min: 60, max: 400, step: 4 }, table: { category: 'Sizing (no Figma equivalent)' } },
  },
  args: { size: 156 },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/**
 * Rendered on the branded screen backdrop it's designed for — `Company Logo`
 * uses the `White` token, which disappears on a plain white card.
 */
export const OnBrandBackground: Story = {
  render: (args) => (
    <div
      style={{
        background: 'var(--pk-sys-bg-background)',
        padding: 'var(--pk-ref-space-32)',
        borderRadius: 'var(--pk-ref-radius-md)',
        display: 'inline-flex',
      }}
    >
      <Logo {...args} />
    </div>
  ),
}

/** A few sizes side by side — the mark scales as one unit, no re-layout at any size. */
export const Sizes: Story = {
  render: () => (
    <div
      className="sbx-row"
      style={{ alignItems: 'flex-end', background: 'var(--pk-sys-bg-background)', padding: 'var(--pk-ref-space-24)' }}
    >
      {[80, 156, 260].map((size) => (
        <div className="sbx-stack" key={size}>
          <span className="sbx-label" style={{ color: 'var(--pk-sys-text-inverse-subtle)' }}>
            {size}px
          </span>
          <Logo size={size} />
        </div>
      ))}
    </div>
  ),
}
