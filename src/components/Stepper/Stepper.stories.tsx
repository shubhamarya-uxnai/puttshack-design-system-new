import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stepper } from './Stepper'

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: ['add', 'minus'],
      table: { category: 'Variant (Figma: separate "Add" / "Minus" component sets)' },
    },
    active: { control: 'boolean', table: { category: 'Variant (Figma: Active)' } },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: { direction: 'add' },
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** Add and Minus side by side, as they're meant to be used — flanking a count. */
export const QuantityPicker: Story = {
  render: () => (
    <div className="sbx-row" style={{ alignItems: 'center', gap: 'var(--pk-ref-space-16)' }}>
      <Stepper direction="minus" aria-label="Decrease quantity" />
      <span className="pk-text-title-small" style={{ minWidth: 24, textAlign: 'center' }}>
        2
      </span>
      <Stepper direction="add" aria-label="Increase quantity" />
    </div>
  ),
}

/** Every real interaction state, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'disabled'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Stepper
            {...args}
            forceState={s === 'hover' ? 'hover' : undefined}
            active={s !== 'disabled'}
          />
        </div>
      ))}
    </div>
  ),
}

/** Add vs Minus. */
export const Directions: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['add', 'minus'] as const).map((d) => (
        <div className="sbx-stack" key={d}>
          <span className="sbx-label">{d}</span>
          <Stepper {...args} direction={d} />
        </div>
      ))}
    </div>
  ),
}
