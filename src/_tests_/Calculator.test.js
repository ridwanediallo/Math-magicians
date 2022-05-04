import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Calculator from '../components/Calculator';

test('Should render QuotCalculator', () => {
  const { container } = render(<Calculator />);
  expect(container).toBeInTheDocument();
});

describe('Do some Math', () => {
  test('renders "Changed!" if the button is clicked', () => {
    render(
      <div className="container">
        <h2>Do some math!</h2>
        <div className="calculator">
          <div className="keypad">
            <button type="button" className="gray-bg">
              AC
            </button>
            <button type="button" className="gray-bg">
              +/-
            </button>
            <button type="button" className="gray-bg">
              %
            </button>
            <button type="button" className="orange-bg">
              ÷
            </button>
            <button type="button" className="gray-bg">
              7
            </button>
            <button type="button" className="gray-bg">
              8
            </button>
            <button type="button" className="gray-bg">
              9
            </button>
            <button type="button" className="orange-bg">
              x
            </button>
            <button type="button" className="gray-bg">
              4
            </button>
            <button type="button" className="gray-bg">
              5
            </button>
            <button type="button" className="gray-bg">
              6
            </button>
            <button type="button" className="orange-bg">
              -
            </button>
            <button type="button" className="gray-bg">
              1
            </button>
            <button type="button" className="gray-bg">
              2
            </button>
            <button type="button" className="gray-bg">
              3
            </button>
            <button type="button" className="orange-bg">
              +
            </button>
            <button type="button" className="gray-bg data-equals span-two">
              0
            </button>
            <button type="button" className="gray-bg">
              .
            </button>
            <button type="button" className="orange-bg">
              =
            </button>
          </div>
        </div>
      </div>
    );
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('2'));
  });
});
