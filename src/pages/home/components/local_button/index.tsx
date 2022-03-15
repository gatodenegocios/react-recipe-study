import { ButtonHTMLAttributes } from "react";
import { Button } from "../../../../components/button";
import "./index.scss";

export type LocalButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function LocalButton({ ...props }: LocalButtonProps) {
  return (
    <div data-testid="local-button">
      <Button {...props} />
    </div>
  );
}
