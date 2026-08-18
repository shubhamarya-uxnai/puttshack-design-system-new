import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButton } from './RadioButton'

const meta = {
  title: 'Components/Radio Button',
  component: RadioButton,
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['mobile', 'desktop', 'kiosk'],
      table: { category: 'Variant (Figma: Size)' },
    },
    checked: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Selection)' },
    },
    tick: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Selected with Tick)' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Status=Disabled)' },
    },
    label: {
      control: 'text',
      table: { category: 'Content (Figma: Label)' },
    },
    tooltipIcon: {
      control: 'boolean',
      table: { category: 'Content (Figma: Tooltip icon)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    size: 'desktop',
    checked: true,
    label: '6:30pm tee time',
    tooltipIcon: false,
    tick: false,
    disabled: false,
    // RadioButton is a controlled input with no onChange of its own — mutual
    // exclusion and state updates are a RadioGroup/consumer concern. readOnly
    // keeps these demo instances a legit controlled input instead of
    // triggering React's "missing onChange" warning in the console.
    readOnly: true,
  },
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All Sizes side by side. */
export const Sizes: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['mobile', 'desktop', 'kiosk'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <RadioButton {...args} size={s} />
        </div>
      ))}
    </div>
  ),
}

/** Every real interaction state, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <RadioButton {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** Plain filled-dot selection vs. "Selected with Tick" — the solid magenta
 * circle with a white checkmark, used where clarity of completion matters. */
export const SelectionStyle: Story = {
  render: (args) => (
    <div className="sbx-row">
      {([false, true] as const).map((t) => (
        <div className="sbx-stack" key={String(t)}>
          <span className="sbx-label">{t ? 'tick' : 'dot'}</span>
          <RadioButton {...args} tick={t} />
        </div>
      ))}
    </div>
  ),
}

/** A single radio group — party size at booking. Mutual exclusion, the
 * default pre-selection and the shared native `name` are all handled by the
 * consumer, not by RadioButton itself. */
export const GroupExample: Story = {
  render: () => (
    <fieldset
      style={{ border: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
    >
      <legend className="sbx-label" style={{ marginBottom: 8 }}>
        Party size
      </legend>
      <RadioButton name="party-size" label="2 players" checked readOnly />
      <RadioButton name="party-size" label="4 players" tooltipIcon readOnly />
      <RadioButton name="party-size" label="6 players (large bay)" readOnly />
      <RadioButton name="party-size" label="8+ players — call the venue" disabled readOnly />
    </fieldset>
  ),
}

/** Disabled, unchecked vs. checked. */
export const Disabled: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">disabled, unchecked</span>
        <RadioButton {...args} label="Sunset Hill venue" disabled checked={false} readOnly />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">disabled, checked</span>
        <RadioButton {...args} label="Sunset Hill venue" disabled checked readOnly />
      </div>
    </div>
  ),
}
