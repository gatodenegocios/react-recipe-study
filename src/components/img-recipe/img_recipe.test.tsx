import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImgRecipe } from ".";

describe(ImgRecipe, () => {
  it("render", () => {
    render(<ImgRecipe />);
    const element = screen.getByTestId("img-recipe-component");
    expect(element);
  });

  it("render with the correct image url", () => {
    const testUrl = "testUrl";
    render(<ImgRecipe src={testUrl} />);

    const element: HTMLImageElement = screen.getByTestId("img-recipe");
    expect(element.src).toBe(`http://localhost/${testUrl}`);
  });
});
