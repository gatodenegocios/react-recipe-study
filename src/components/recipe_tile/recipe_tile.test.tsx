import * as ReactDOM from "react-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecipeTile } from ".";

describe(RecipeTile, () => {
  it("render", () => {
    render(<RecipeTile id={""} name={""} description={""} imgUrl={""} />);
    const element = screen.getByTestId("recipe-tile");
    expect(element);
  });

  it("render with the right props", () => {
    const id = "testId";
    const name = "testName";
    const description = "testDescription";
    const imgUrl = "testImgUrl";
    render(
      <RecipeTile
        id={id}
        name={name}
        description={description}
        imgUrl={imgUrl}
      />
    );

    const elementName = screen.getByTestId("recipe-tile--name");
    expect(elementName.innerHTML).toBe(name);

    const elementDescription = screen.getByTestId("recipe-tile--description");
    expect(elementDescription.innerHTML).toBe(description);

    const elementImg: HTMLImageElement =
      screen.getByTestId("recipe-tile--image");
    expect(elementImg.src).toBe(`http://localhost/${imgUrl}`);
  });
});
