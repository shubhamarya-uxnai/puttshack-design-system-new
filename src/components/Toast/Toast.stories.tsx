import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertOctagon, AlertTriangle, CheckCircle, Info } from '../../icons'
import { Toast } from './Toast'

const icons = {
  warning: <AlertTriangle aria-hidden="true" />,
  promo: <Info aria-hidden="true" />,
  success: <CheckCircle aria-hidden="true" />,
  error: <AlertOctagon aria-hidden="true" />,
  informative: <Info aria-hidden="true" />,
  brand: <AlertTriangle aria-hidden="true" />,
  neutral: <CheckCircle aria-hidden="true" />,
} as const

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['warning', 'promo', 'success', 'error', 'informative', 'brand', 'neutral'],
      table: { category: 'Variant (Figma: Property 1)' },
    },
    inverse: { control: 'boolean', table: { category: 'Variant (Figma: Inverse)' } },
    title: { control: 'text', table: { category: 'Content (Figma: Heading)' } },
    message: {
      control: false,
      table: { category: 'Content (Figma: Content — pass JSX with an inner <strong> for a bold lead-in)' },
    },
    subheading: { control: 'text', table: { category: 'Content (Figma: Subheading) — off by default' } },
    icon: { control: false, table: { category: 'Content (Figma: Icon instance-swap)' } },
    onDismiss: {
      control: false,
      table: { category: 'Behavior (Figma: Close) — renders the dismiss control only when provided' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    variant: 'warning',
    inverse: false,
    title: 'Heading',
    message: (
      <>
        <strong>Heads up —</strong> adding this player adds $20.00 to your reservation.
      </>
    ),
    icon: icons.warning,
    onDismiss: () => {},
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All 7 `Property 1` colors side by side. */
export const Types: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['warning', 'promo', 'success', 'error', 'informative', 'brand', 'neutral'] as const).map((v) => (
        <div className="sbx-stack" key={v}>
          <span className="sbx-label">{v}</span>
          <Toast {...args} variant={v} icon={icons[v]} />
        </div>
      ))}
    </div>
  ),
}

/**
 * `inverse` swaps every color-carrying variant to the Feedback-Inverse/*
 * token set (or the generic inverse surface, for promo/brand — see the
 * component report). Heading/message always go light, regardless of variant.
 */
export const Inverse: Story = {
  render: (args) => (
    <div className="sbx-row" style={{ background: 'var(--pk-sys-bg-inverse)', padding: 16 }}>
      {(['warning', 'promo', 'success', 'error', 'informative', 'brand', 'neutral'] as const).map((v) => (
        <div className="sbx-stack" key={v}>
          <span className="sbx-label" style={{ color: 'var(--pk-sys-text-white)' }}>
            {v}
          </span>
          <Toast {...args} variant={v} icon={icons[v]} inverse />
        </div>
      ))}
    </div>
  ),
}

/** `subheading` is an optional second line below `message`, off by default. */
export const WithSubheading: Story = {
  render: (args) => (
    <Toast {...args} subheading="You can remove this player any time before checkout." />
  ),
}

/** `title` is optional — omit it for a single-line, icon + message toast. */
export const WithoutTitle: Story = {
  render: (args) => <Toast {...args} title={undefined} />,
}

/** Every real interaction state on the dismiss control, pinned open via forceState for a static screenshot. */
export const States: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['default', 'hover', 'focus', 'pressed'] as const).map((s) => (
        <div className="sbx-stack" key={s}>
          <span className="sbx-label">{s}</span>
          <Toast {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** onDismiss is optional — the dismiss control only renders when it's provided. */
export const WithDismiss: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">no dismiss</span>
        <Toast {...args} onDismiss={undefined} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">dismissible</span>
        <Toast {...args} onDismiss={() => {}} />
      </div>
    </div>
  ),
}
