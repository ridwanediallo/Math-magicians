import { render } from "@testing-library/react";

import Home from "../components/Home";

test('should render Home', () => {
    const {home} = render(<Home />);
    expect(home).toBeInTheDocument();
 })
