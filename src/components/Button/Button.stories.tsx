import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight, CalendarCheck } from '../../icons'
import { Button } from './Button'

const IconCalendarCheck = <CalendarCheck aria-hidden="true" />
const IconArrowRight = <ArrowRight aria-hidden="true" />

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info', 'ghost'],
      table: { category: 'Variant (Figma: Type)' },
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'large'],
      table: { category: 'Variant (Figma: Size)' },
    },
    disabled: { control: 'boolean', table: { category: 'Variant (Figma: State=Disabled)' } },
    inverse: { control: 'boolean', table: { category: 'Variant (Figma: Inverse)' } },
    onlyIcon: { control: 'boolean', table: { category: 'Variant (Figma: Only Icon)' } },
    leadingIcon: { control: false, table: { category: 'Content (Figma: instance-swap icon slot)' } },
    trailingIcon: { control: false, table: { category: 'Content (Figma: instance-swap icon slot)' } },
    children: { control: 'text', table: { category: 'Content' } },
    htmlType: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
      table: { category: 'HTML (no Figma equivalent)' },
    },
    forceState: {
      control: 'inline-radio',
      options: [undefined, 'hover', 'focus', 'pressed'],
      table: { category: 'Docs only — never ship' },
    },
  },
  args: { variant: 'primary', children: 'Book a bay' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Turn every knob. This is the one to reach for when checking a combination. */
export const Playground: Story = {}

/** All Types side by side. */
export const Types: Story = {
  render: (args) => (
    <div className="sbx-row">
      {(['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info', 'ghost'] as const).map((v) => (
        <div className="sbx-stack" key={v}>
          <span className="sbx-label">{v}</span>
          <Button {...args} variant={v} />
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
          <Button {...args} forceState={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
}

/** Default (web/mobile) vs Large — Large is the Kiosk touch-target size only. */
export const Sizes: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">default — web / mobile</span>
        <Button {...args} size="default" />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">large — kiosk only</span>
        <Button {...args} size="large" />
      </div>
    </div>
  ),
}

/** Label-only vs leading icon, trailing icon and icon-only. */
export const Icons: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">label only</span>
        <Button {...args} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">leading icon</span>
        <Button {...args} leadingIcon={IconCalendarCheck} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">trailing icon</span>
        <Button {...args} trailingIcon={IconArrowRight} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">icon only</span>
        <Button {...args} onlyIcon leadingIcon={IconCalendarCheck} />
      </div>
    </div>
  ),
}
