import { render } from '@testing-library/react';

import NavBar from '../components/NavBar';

test('should render NavBar', () => {
  const { container } = render(<NavBar />);
  expect(container).toBeInTheDocument();
});
