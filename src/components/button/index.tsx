import { ButtonHTMLAttributes } from "react";
import "./index.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...props }: ButtonProps) {
  return <button {...props} data-testid="button" />;
}
