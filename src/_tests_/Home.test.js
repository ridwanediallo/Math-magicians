import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from '../components/Home';

test('should render Home', () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
