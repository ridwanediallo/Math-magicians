import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from '../components/Home';

test('should render welcome title', () => {
  render(<Home />);
  const welcomeTitle = screen.getByText('Welcome to our Page');
  expect(welcomeTitle).toBeInTheDocument();
});


it('render home component', () => {
  const tree = renderer
  .create(<Home />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
