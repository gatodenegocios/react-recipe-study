import "./index.scss";
import { RecipeTile } from "../../../../components/recipe_tile";
import { RecipeDescriptionType } from "../../../../types/recipe_description_type";

export type LastRecipeProps = {
  openRecipe: Function | undefined;
  recipes: RecipeDescriptionType[] | undefined;
};

export function LastRecipes({ ...props }: LastRecipeProps) {
  function openRecipe(id: string) {
    if (props.openRecipe === undefined) return;

    props.openRecipe(id);
  }

  return (
    <div id="last-recipes-container" data-testid="last-recipes">
      <span id="last-recipes-title">Last recipes</span>
      <div id="recipes-list" data-testid="last-recipes--list">
        {props.recipes?.map((elem) => {
          return (
            <RecipeTile
              key={elem.id}
              onClick={() => openRecipe(elem.id.toString())}
              {...elem}
            />
          );
        })}
      </div>
    </div>
  );
}
