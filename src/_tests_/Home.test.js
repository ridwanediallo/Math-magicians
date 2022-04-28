import { render} from '@testing-library/react';

import Home from '../components/Home';

test('should render Home', () => {
  const {container} = render(<Home />);
  expect(container).toBeInTheDocument();
});
