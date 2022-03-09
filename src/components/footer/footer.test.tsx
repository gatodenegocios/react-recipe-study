import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from ".";

describe(Footer, () => {
  it("render", () => {
    render(<Footer />);
    const element = screen.getByTestId("footer");
    expect(element);
  });
});
