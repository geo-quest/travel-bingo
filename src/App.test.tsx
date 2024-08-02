import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders travel bingo image", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Travel Bingo/i);
  expect(linkElement).toBeInTheDocument();
});
