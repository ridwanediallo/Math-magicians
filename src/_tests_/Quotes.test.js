import renderer from 'react-test-renderer';

import Quotes from '../components/Quotes';

it('render quote component', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
