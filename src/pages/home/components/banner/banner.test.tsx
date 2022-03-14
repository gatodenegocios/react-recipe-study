import { render, screen } from "@testing-library/react";
import { Banner } from ".";

describe(Banner, () => {
  it("renders", () => {
    render(<Banner></Banner>);
    const element = screen.getByTestId("banner");
    expect(element);
  });
});
