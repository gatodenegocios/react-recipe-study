import * as ReactDOM from "react-dom";
import React from "react";
import { Button } from ".";
import { render } from "@testing-library/react";

describe(Button, () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    render(<Button>a</Button>);
  });

  it("if renders", () => {});
});
