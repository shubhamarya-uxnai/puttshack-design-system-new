import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingRegistration } from './BookingRegistration'

const meta = {
  title: 'Screens/Booking Registration',
  component: BookingRegistration,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A real screen from the Booking & Perks Flow consumption file (Figma: X5YJsGIXBKazkrUaxk0jR9, node 1122:118083) — "Who are you registering?". Built to test the component library and tokens against a real downstream screen, not promoted as a reusable component.',
      },
    },
  },
} satisfies Meta<typeof BookingRegistration>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
