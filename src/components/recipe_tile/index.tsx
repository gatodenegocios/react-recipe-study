import { HTMLAttributes } from "react";
import { RecipeDescriptionType } from "../../types/recipe_description_type";

import "./index.scss";

type RecipeTileProps = HTMLAttributes<HTMLElement> & {
  recipeContent: RecipeDescriptionType;
};

export function RecipeTile({ ...props }: RecipeTileProps) {
  const recipe = props.recipeContent;

  return (
    <div
      className="recipe_tile"
      onClick={props.onClick}
      data-testid="recipe-tile"
    >
      <div className="img-container">
        <img src={recipe.imgUrl} data-testid="recipe-tile--image" />
      </div>
      <div className="recipe_title" data-testid="recipe-tile--name">
        {recipe.name}
      </div>
      <div
        className="recipe_description"
        data-testid="recipe-tile--description"
      >
        {recipe.description}
      </div>
    </div>
  );
}
