import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Loader } from ".";

describe(Loader, () => {
  it("render", () => {
    render(<Loader />);
    const element = screen.getByTestId("loader");
    expect(element);
  });
});
