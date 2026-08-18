import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './Toast'

/** Stand-in exclamation glyph for the `warning` icon slot — Figma ships this as an instance-swap, no default asset exists in this extraction. */
const alertIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M10 5.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="10" cy="14.5" r="1" fill="currentColor" />
  </svg>
)

/** Stand-in checkmark glyph for the `success` icon slot. */
const checkIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M4.5 10.5L8 14L15.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

/** Stand-in sparkle glyph for the `promo` icon slot. */
const sparkleIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path
      d="M10 3l1.4 4.6L16 9l-4.6 1.4L10 15l-1.4-4.6L4 9l4.6-1.4L10 3z"
      fill="currentColor"
    />
  </svg>
)

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['warning', 'promo', 'success'],
      table: { category: 'Variant (Figma: Property 1)' },
    },
    title: {
      control: 'text',
      table: { category: 'Content (Figma: title — success only)' },
    },
    message: {
      control: false,
      table: {
        category: 'Content (Figma: message — pass JSX with an inner <strong> for the bold lead-in on warning/promo)',
      },
    },
    icon: {
      control: false,
      table: { category: 'Content (Figma: icon instance-swap — required, no default ships)' },
    },
    onDismiss: {
      control: false,
      table: { category: 'Behavior (renders dismiss control only when provided)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: {
    variant: 'warning',
    message: (
      <>
        <strong>Heads up —</strong> Lane 4 closes for maintenance at 6:00 PM tonight.
      </>
    ),
    icon: alertIcon,
    onDismiss: () => {},
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All variants side by side, each with the copy pattern it actually uses. */
export const Types: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(
        [
          {
            variant: 'warning',
            icon: alertIcon,
            title: undefined,
            message: (
              <>
                <strong>Heads up —</strong> Lane 4 closes for maintenance at 6:00 PM tonight.
              </>
            ),
          },
          {
            variant: 'promo',
            icon: sparkleIcon,
            title: undefined,
            message: (
              <>
                <strong>Limited time —</strong> Book a Saturday tee time and get a round on the house.
              </>
            ),
          },
          {
            variant: 'success',
            icon: checkIcon,
            title: "YOU'RE ALL SET",
            message: 'Your party of 6 is confirmed for 7:30 PM at Puttshack Denver.',
          },
        ] as const
      ).map(({ variant, icon, title, message }) => (
        <div className="sbx-stack" key={variant}>
          <span className="sbx-label">{variant}</span>
          <Toast {...args} variant={variant} icon={icon} title={title} message={message} />
        </div>
      ))}
    </div>
  ),
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
