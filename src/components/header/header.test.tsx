import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeaderComponent } from ".";

describe(HeaderComponent, () => {
  it("render", () => {
    render(<HeaderComponent />);
    const element = screen.getByTestId("header");
    expect(element);
  });
});
