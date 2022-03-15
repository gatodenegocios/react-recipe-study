import { LocalButton, LocalButtonProps } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(LocalButton, () => {
  let buttonText = "text";
  let container: HTMLDivElement;

  const renderButton = (props?: LocalButtonProps) => {
    render(<LocalButton {...props}>{buttonText}</LocalButton>);
  };

  const getButton = () => {
    return screen.getByTestId("local-button").children[0];
  };

  const getButtonByText = () => {
    return screen.getByText(buttonText);
  };

  it("renders button correctly", () => {
    renderButton();
    expect(getButton());
  });

  it("renders button with the text", () => {
    renderButton();
    expect(getButtonByText());
  });

  it("calls onclick function", () => {
    const onClick = jest.fn();

    renderButton({ onClick: onClick });

    userEvent.click(getButton());

    expect(onClick).toHaveBeenCalled();
  });

  it("do not call onclick function when the button is disabled", () => {
    const onClick = jest.fn();

    renderButton({ onClick: onClick, disabled: true });

    userEvent.click(getButton());

    expect(onClick).not.toHaveBeenCalled();
  });
});
