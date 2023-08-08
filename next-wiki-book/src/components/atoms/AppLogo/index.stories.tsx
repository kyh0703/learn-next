import { Meta, StoryObj } from '@storybook/react'

import AppLogo from './index'

const meta: Meta<typeof AppLogo> = {
  title: 'Atoms/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppLogo>

export const Logo: Story = {}
