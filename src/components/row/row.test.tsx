import { render, screen } from "@testing-library/react";
import { Row } from ".";

describe(Row, () => {
  it("render", () => {
    render(<Row title={""} imgSrc={""} />);
    const element = screen.getByTestId("row");
    expect(element);
  });

  it("render with right props", () => {
    const testTitle = "testTitle";
    const testSrc = "testSrc";

    render(<Row title={testTitle} imgSrc={testSrc} />);

    const elementTitle: HTMLSpanElement = screen.getByTestId("row--title");
    expect(elementTitle.innerHTML).toBe(testTitle);

    const elementImg: HTMLImageElement = screen.getByTestId("row--img");
    expect(elementImg.src).toBe(`http://localhost/${testSrc}`);
  });
});
