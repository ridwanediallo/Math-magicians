import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Quotes from '../components/Quotes';

test('Should render Quote', () => {
  const { container } = render(<Quotes />);
  expect(container).toBeInTheDocument();
});

it('renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
