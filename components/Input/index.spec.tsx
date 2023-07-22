import { render, screen, RenderResult } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the label', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    expect(inputNode).toHaveValue('');
  });
});
