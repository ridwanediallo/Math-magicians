import { render, screen } from "@testing-library/react";

import Home from "../components/Home";

test('should render welcome title', () => {
    render(<Home />);
    const welcomeTitle = screen.getByText('Welcome to our Page');
    expect(welcomeTitle).toBeInTheDocument();
 });
