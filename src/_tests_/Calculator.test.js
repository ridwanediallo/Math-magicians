import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Calculator from '../components/Calculator';

test('Should render QuotCalculator', () => {
  const { container } = render(<Calculator />);
  expect(container).toBeInTheDocument();
});

describe('Do some Math', () => {
    test('renders "Changed!" if the button is clicked', () => {
        render(<Calculator />);
        const buttonEl = screen.getByRole('button');
        userEvent.click(buttonEl);
        const outputEl = screen.getByText('9')
        expect(outputEl).toBeInTheDocument()

    })
})
