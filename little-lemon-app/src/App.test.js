// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

test("Renders the Header heading and navigates on button click", () => {
  render(<App />);

  // Select the button using its accessible role and label
  const reserveButton = screen.getByRole("button", { name: /reserve/i });
  expect(reserveButton).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(reserveButton);

  // Verify navigation effect (example: heading change)
  const formHeading = screen.getByText("Book Now");
  expect(formHeading).toBeInTheDocument();
});
