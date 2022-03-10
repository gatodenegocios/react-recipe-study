import { HTMLAttributes } from "react";
import { RecipeDescriptionType } from "../../types/recipe_description_type";

import "./index.scss";

export type RecipeTileProps = HTMLAttributes<HTMLElement> &
  RecipeDescriptionType;

export function RecipeTile({ ...props }: RecipeTileProps) {
  //const recipe = props.recipeContent;

  return (
    <div
      className="recipe_tile"
      onClick={props.onClick}
      data-testid="recipe-tile"
    >
      <div className="img-container">
        <img src={props.imgUrl} data-testid="recipe-tile--image" />
      </div>
      <div className="recipe_title" data-testid="recipe-tile--name">
        {props.name}
      </div>
      <div
        className="recipe_description"
        data-testid="recipe-tile--description"
      >
        {props.description}
      </div>
    </div>
  );
}
