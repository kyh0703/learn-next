import { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import MDXDocument from './StyledButton.mdx';

const meta: Meta = {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
};

export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  render: (props) => (
    <StyledButton {...props} variant='primary'>
      Primary
    </StyledButton>
  ),
};

export const Success: Story = {
  render: (props) => (
    <StyledButton {...props} variant='success'>
      Success
    </StyledButton>
  ),
};

export const Transparent: Story = {
  render: (props) => (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  ),
};

const increnmentAction = action('increment');

export const PrimaryWithAction: Story = {
  render: (props) => {
    const [count, setCount] = useState(0);

    const onClick = (e: React.MouseEvent) => {
      increnmentAction(e, count);
      setCount((c) => c + 1);
    };

    return (
      <StyledButton {...props} variant='primary' onClick={onClick}>
        Primary
      </StyledButton>
    );
  },
};

// const Template: Story = {
//   render: (props) => <StyledButton {...props} />,
// };

// export const TemplateTest = Template.Bind({});

// TemplateTest.args = {
//   variant: 'primary',
//   children: 'primary',
// };
