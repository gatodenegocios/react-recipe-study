import "./index.scss";
import { ImgHTMLAttributes } from "react";

type ImgRecipeProps = ImgHTMLAttributes<HTMLImageElement>;
export function ImgRecipe({ ...props }: ImgRecipeProps) {
  return (
    <div className="img-recipe" onClick={props.onClick}>
      <div className="img-container">
        <img src={props.src} />
      </div>
    </div>
  );
}
