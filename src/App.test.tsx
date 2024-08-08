/* eslint-disable arrow-parens */
import { render } from "@testing-library/react";

import App from "./App";

jest.mock("react-markdown", () => (props: { children: any }) => {
  return <>{props.children}</>;
});

test("renders app", () => {
  render(<App />);
});
