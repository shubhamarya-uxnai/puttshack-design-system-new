import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['mobile', 'desktop', 'kiosk'],
      table: { category: 'Variant (Figma: Size)' },
    },
    checked: {
      control: 'inline-radio',
      options: [false, true, 'indeterminate'],
      table: { category: 'Variant (Figma: Checked)' },
    },
    label: {
      control: 'text',
      table: { category: 'Content (Figma: Label)' },
    },
    tooltipIcon: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Tooltip icon)' },
    },
    error: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Status=Error)' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Enabled=False)' },
    },
    onCheckedChange: {
      table: { category: 'Events' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    size: 'desktop',
    checked: false,
    label: 'Book a party of 6+',
    tooltipIcon: false,
    error: false,
    disabled: false,
    // Checkbox is fully controlled — a real handler is required or React
    // warns about a controlled input with no way to change it. `fn()` also
    // wires the event into the Actions panel.
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All Checked states side by side — No, Yes, and Indeterminate. */
export const CheckedStates: Story = {
  render: (args) => (
    <div className="sbx-row">
      {([false, true, 'indeterminate'] as const).map((c) => (
        <div className="sbx-stack" key={String(c)}>
          <span className="sbx-label">{c === false ? 'unchecked' : c === true ? 'checked' : 'indeterminate'}</span>
          <Checkbox {...args} checked={c} />
        </div>
      ))}
    </div>
  ),
}

/** All three Size variants — mobile (20px), desktop (24px), kiosk (32px). */
export const Sizes: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['mobile', 'desktop', 'kiosk'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Checkbox {...args} size={s} />
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
          <Checkbox {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** Error status only ever renders when Checked=No — an already-checked box never shows error. */
export const ErrorStatus: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">unchecked, error</span>
        <Checkbox {...args} checked={false} error label="Accept the venue waiver" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">checked (error ignored)</span>
        <Checkbox {...args} checked error label="Accept the venue waiver" />
      </div>
    </div>
  ),
}

/** Disabled, in both the unchecked and checked positions. */
export const Disabled: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">disabled, unchecked</span>
        <Checkbox {...args} disabled checked={false} label="Add glow-in-the-dark balls" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled, checked</span>
        <Checkbox {...args} disabled checked label="Add glow-in-the-dark balls" />
      </div>
    </div>
  ),
}

/** With the optional tooltip icon, and a parent/child indeterminate grouping pattern. */
export const WithTooltipAndGrouping: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">with tooltip icon</span>
        <Checkbox {...args} tooltipIcon label="Include bumpers for kids' lane" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">indeterminate parent + children</span>
        <div className="sbx-stack" style={{ gap: 'var(--pk-sys-gap-sm)' }}>
          <Checkbox {...args} checked="indeterminate" label="All tee times (Riverside course)" />
          <Checkbox {...args} checked label="9:00 AM tee time" />
          <Checkbox {...args} checked={false} label="9:30 AM tee time" />
        </div>
      </div>
    </div>
  ),
}
