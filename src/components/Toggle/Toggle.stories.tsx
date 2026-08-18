import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Toggle } from './Toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'default'],
      table: { category: 'Variant (Figma: Size)' },
    },
    checked: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Turn=On/Off)' },
    },
    label: {
      control: 'text',
      table: { category: 'Content (Figma: Label)' },
    },
    tooltipIcon: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Tooltip icon=On/Off)' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Enabled=False)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    size: 'default',
    checked: false,
    label: 'Send tee time reminders',
    tooltipIcon: false,
    disabled: false,
    // Toggle is fully controlled — a real handler is required or React warns
    // about a controlled input with no way to change it. `fn()` also wires
    // the event into the Actions panel.
    onChange: fn(),
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** Both sizes, Off and On, side by side. */
export const Sizes: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'small'] as const).map((size) => (
        <div className="sbx-stack" key={size}>
          <span className="sbx-label">{size}</span>
          <div className="sbx-row">
            <Toggle {...args} size={size} checked={false} label={undefined} />
            <Toggle {...args} size={size} checked={true} label={undefined} />
          </div>
        </div>
      ))}
    </div>
  ),
}

/** Off vs On, with the label and optional tooltip icon that ships with it. */
export const Types: Story = {
  render: (args) => (
    <div className="sbx-row">
      {([false, true] as const).map((checked) => (
        <div className="sbx-stack" key={String(checked)}>
          <span className="sbx-label">{checked ? 'on' : 'off'}</span>
          <Toggle {...args} checked={checked} />
        </div>
      ))}
    </div>
  ),
}

/** Every real interaction state, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'focus'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Toggle {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
      <div className="sbx-stack">
        <span className="sbx-label">disabled</span>
        <Toggle {...args} disabled />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled + on</span>
        <Toggle {...args} disabled checked />
      </div>
    </div>
  ),
}

/** Label on its own, and label plus the tooltip icon (which only renders when a label is set). */
export const WithTooltipIcon: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">label only</span>
        <Toggle {...args} label="Notify me about open lane availability" tooltipIcon={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">label + tooltip icon</span>
        <Toggle {...args} label="Notify me about open lane availability" tooltipIcon={true} />
      </div>
    </div>
  ),
}
