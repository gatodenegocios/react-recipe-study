import { render, screen } from "@testing-library/react";
import { CategoriesPane } from ".";

describe(CategoriesPane, () => {
  it("renders", () => {
    render(<CategoriesPane></CategoriesPane>);
    const element = screen.getByTestId("categories-pane");
    expect(element);
  });
});
