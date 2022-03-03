import { ButtonHTMLAttributes } from "react";
import "./index.scss";

type MediumTextProps = ButtonHTMLAttributes<HTMLSpanElement>;

export function MediumText({ ...props }: MediumTextProps) {
  return <span className={"medium-text"} {...props} />;
}
