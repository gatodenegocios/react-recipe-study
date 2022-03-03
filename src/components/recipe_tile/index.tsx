import { HTMLAttributes } from "react";
import { RecipeDescriptionType } from "../../types/recipe_description_type";

import "./index.scss";

type RecipeTileProps = HTMLAttributes<HTMLElement> & {
  recipeContent: RecipeDescriptionType;
};

export function RecipeTile({ ...props }: RecipeTileProps) {
  const recipe = props.recipeContent;

  return (
    <div className="recipe_tile" onClick={props.onClick}>
      <div className="img-container">
        <img src={recipe.imgUrl} />
      </div>
      <div className="recipe_title">{recipe.name}</div>
      <div className="recipe_description">{recipe.description}</div>
    </div>
  );
}
