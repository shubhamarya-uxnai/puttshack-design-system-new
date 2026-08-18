import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputField, type InputFieldState } from './InputField'

/* Small inline icons for the leading/trailing icon slots — kept local to the
   stories file since the component exposes no icon prop of its own beyond
   accepting a ReactNode (Figma: instance-swap icon slots). */
function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6V10L12.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.75 16.25c0-3 2.8-5 6.25-5s6.25 2 6.25 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.25 13.25L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 8L10 12.5L14.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const meta = {
  title: 'Components/Input Field',
  component: InputField,
  parameters: { layout: 'padded' },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'typing', 'typed', 'disabled', 'error'],
      table: { category: 'Variant (Figma: State)' },
    },
    inverse: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Inverse)' },
    },
    required: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Required)' },
    },
    label: {
      control: 'text',
      table: { category: 'Content (Figma: Show Label)' },
    },
    placeholder: {
      control: 'text',
      table: { category: 'Content' },
    },
    helperText: {
      control: 'text',
      table: { category: 'Content (Figma: Show Helper Text)' },
    },
    leadingIcon: {
      control: false,
      table: { category: 'Content (Figma: Leading icon)' },
    },
    trailingIcon: {
      control: false,
      table: { category: 'Content (Figma: Tailing Icon)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'focus'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    label: 'Tee time',
    placeholder: 'Select a time',
    helperText: 'Booking window: 10:00 AM – 11:00 PM',
    required: true,
    state: 'default',
    inverse: false,
    leadingIcon: <ClockIcon />,
  },
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** Sample content + helper-text override per `state`, so "typed" and "error"
 * read as more than a relabelled empty field — the row styling itself is
 * identical between "default" and "typed" (Figma draws no unique treatment
 * for a filled-but-unfocused field). */
const stateSample: Record<InputFieldState, { defaultValue?: string; helperText?: string }> = {
  default: {},
  typing: { defaultValue: '6:0' },
  typed: { defaultValue: '6:30 PM' },
  disabled: { defaultValue: '6:30 PM' },
  error: { defaultValue: '13:75 PM', helperText: 'Enter a valid time between 10:00 AM and 11:00 PM' },
}

/** All 5 values of the `State` variant, side by side. */
export const Variants: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'typing', 'typed', 'disabled', 'error'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <InputField
            {...args}
            state={s}
            defaultValue={stateSample[s].defaultValue}
            helperText={stateSample[s].helperText ?? args.helperText}
          />
        </div>
      ))}
    </div>
  ),
}

/** Every real interaction state, pinned open via forceState for a static screenshot.
 * `typing`/`disabled`/`error` are already covered as their own `State` values
 * above — the only thing forceState adds is pinning real `:focus-within`
 * open on an otherwise-default row, since a static page can't hold focus. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'focus'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <InputField {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** Same field on light vs. dark backgrounds — `Inverse` is orthogonal to `State`. */
export const Inverse: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">default</span>
        <InputField {...args} inverse={false} />
      </div>
      <div className="sbx-stack sbx-dark-plate">
        <span className="sbx-label">inverse</span>
        <InputField {...args} inverse />
      </div>
    </div>
  ),
}

/** The leading/trailing icon slots are independent and both optional. */
export const WithIcons: Story = {
  render: () => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">no icon</span>
        <InputField label="Party size" placeholder="e.g. 4 guests" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">leading icon</span>
        <InputField label="Party size" placeholder="e.g. 4 guests" leadingIcon={<PersonIcon />} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">trailing icon</span>
        <InputField label="Venue" placeholder="Search venues" trailingIcon={<SearchIcon />} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">both</span>
        <InputField
          label="Tee time"
          placeholder="Select a time"
          leadingIcon={<ClockIcon />}
          trailingIcon={<ChevronDownIcon />}
        />
      </div>
    </div>
  ),
}
