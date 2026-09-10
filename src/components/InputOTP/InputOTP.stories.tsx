import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputOTP } from './InputOTP'

const meta = {
  title: 'Components/Input OTP',
  component: InputOTP,
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['mobile', 'desktop', 'kiosk'],
      table: { category: 'Variant (Figma: device mode)' },
    },
    length: {
      control: { type: 'number', min: 4, max: 8, step: 1 },
      table: { category: 'Variant (Figma: cell count)' },
    },
    error: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Error)' },
    },
    inverse: {
      control: 'boolean',
      table: { category: 'Variant (Figma: Color=Inverse)' },
    },
    errorMessage: {
      control: 'text',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      table: { category: 'Content' },
    },
    autoFocus: {
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    onComplete: {
      table: { category: 'Behavior' },
    },
  },
  args: {
    size: 'desktop',
    length: 6,
    label: 'Enter the 6-digit code sent to your phone',
    error: false,
    inverse: false,
    errorMessage: "That code didn't work. Check your texts and try again.",
    autoFocus: false,
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All 3 device modes side by side — each is a different cell size/touch target, not a different fill. */
export const Sizes: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['mobile', 'desktop', 'kiosk'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <InputOTP {...args} size={s} />
        </div>
      ))}
    </div>
  ),
}

/** Same cells on light vs. dark backgrounds — `Color`/`inverse` is orthogonal to `size`/Mode, unlike sizing it is not tied to kiosk specifically. */
export const Inverse: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">default</span>
        <InputOTP {...args} inverse={false} />
      </div>
      <div className="sbx-stack sbx-dark-plate">
        <span className="sbx-label">inverse</span>
        <InputOTP {...args} inverse />
      </div>
    </div>
  ),
}

/** Default vs. error — error is component-level: every cell takes the border together, never just one. */
export const ErrorState: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">default</span>
        <InputOTP {...args} error={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">error</span>
        <InputOTP {...args} error errorMessage={args.errorMessage} />
      </div>
    </div>
  ),
}

/** length varies by use case — a short check-in PIN, a standard OTP, and a longer gift card PIN. */
export const Lengths: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">length 4 — kiosk check-in PIN</span>
        <InputOTP {...args} length={4} label="Enter your 4-digit party PIN" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">length 6 — verification code</span>
        <InputOTP {...args} length={6} label="Enter the 6-digit code sent to your phone" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">length 8 — gift card PIN</span>
        <InputOTP {...args} length={8} label="Enter your 8-digit gift card PIN" />
      </div>
    </div>
  ),
}
