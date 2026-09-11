import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromoCodeInput } from './PromoCodeInput'

const meta = {
  title: 'Booking & Perks/PromoCodeInput',
  component: PromoCodeInput,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof PromoCodeInput>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
