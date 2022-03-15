import { render, screen } from "@testing-library/react";
import { RecipeNumber } from ".";

describe(RecipeNumber, () => {
  it("render", () => {
    render(<RecipeNumber />);
    const elem = screen.getByTestId("recipe-pane");
    expect(elem);
  });
});
