import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";


describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
  });
});
