import { RecipeDescriptionType } from "./recipe_description_type";

export type RecipeType = RecipeDescriptionType & {
  ingredients: string[];
  directions: string[];
};