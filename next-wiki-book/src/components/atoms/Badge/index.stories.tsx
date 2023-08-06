import { Meta, StoryObj } from '@storybook/react'
import Badge from './index'
import { type } from 'os'

const meta: Meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '배지 테스트',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Orange: Story = {
  args: {
    content: '1',
    backgroundColor: '#ed9f28',
  },
}

export const Green: Story = {
  args: {
    content: '2',
    backgroundColor: '#32bf00',
  },
}

export const Red: Story = {
  args: {
    content: '10',
    backgroundColor: '#d4001a',
  },
}
