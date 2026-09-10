import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'

const meta = {
  title: 'Booking & Perks/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: <p className="pk-text-body-small">Here's what's changing. Nothing's final until you confirm below.</p>,
  },
}

export const WithToastAndTnC: Story = {
  args: {
    showInformation: true,
    showToast: true,
    showTnC: true,
    isSecondModal: true,
    children: <p className="pk-text-body-small">Review the details below before confirming.</p>,
  },
}
