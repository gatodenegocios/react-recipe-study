import { render, screen } from "@testing-library/react";
import { Rows } from "./rows";

describe(Rows, () => {
  it("render", () => {
    render(<Rows />);
    const elem = screen.getByTestId("rows");
    expect(elem);
  });
});
