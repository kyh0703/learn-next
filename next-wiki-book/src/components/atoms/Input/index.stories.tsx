import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: '보더 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '배리에이션 에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Normal: Story = {}

export const Error: Story = {
  args: {
    hasError: true,
  },
}
