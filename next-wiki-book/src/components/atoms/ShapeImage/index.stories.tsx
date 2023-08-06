import type { Meta, StoryObj } from '@storybook/react'
import ShapeImage from './index'

const meta: Meta<typeof ShapeImage> = {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['circle', 'squre'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '이미지 형태',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: { summary: 320 },
      description: '너비',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '높이',
      defaultValue: { summary: 320 },
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ShapeImage>

export const Circle: Story = {
  args: {
    width: 320,
    height: 320,
    src: '/images/sample/1.jpg',
    shape: 'circle',
  },
}

export const Square: Story = {
  args: {
    width: 320,
    height: 320,
    src: '/images/sample/1.jpg',
    shape: 'square',
  },
}
