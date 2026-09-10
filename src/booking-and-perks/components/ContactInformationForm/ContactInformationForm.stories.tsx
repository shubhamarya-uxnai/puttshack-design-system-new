import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactInformationForm } from './ContactInformationForm'

const meta = {
  title: 'Booking & Perks/ContactInformationForm',
  component: ContactInformationForm,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ContactInformationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const OnlyJunior: Story = {
  args: { onlyJunior: true },
}
