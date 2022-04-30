import { render } from '@testing-library/react';

import Quotes from '../components/Quotes';

test('Should render Quote', () => {
  const { container } = render(<Quotes />);
  expect(container).toBeInTheDocument();
});
