import { ButtonHTMLAttributes } from "react";
import "./index.scss";

type BigTextProps = ButtonHTMLAttributes<HTMLSpanElement>;

export function BigText({ ...props }: BigTextProps) {
  return <span className="big-text" {...props} />;
}
