import { ButtonHTMLAttributes } from "react";
import { Button } from "../../../../components/button";
import "./index.scss";

type LocalButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export function LocalButton({ ...props }: LocalButtonType) {
  return <Button {...props} />;
}
