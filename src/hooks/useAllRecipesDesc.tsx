import axios from "axios";
import { useEffect, useState } from "react";
import { RecipeDescriptionType } from "../types/recipe_description_type";

export function useAllRecipesDesc() {
  const [recipes, setRecipes] = useState<RecipeDescriptionType[]>();

  async function searchAllRecipesDesc() {
    const response = await axios.get(`http://localhost:3005/recipes`);

    if (response.status === 200) {
      const recipes = response.data.map((elem: any) => ({
        id: elem.id,
        name: elem.name,
        description: elem.description,
        imgUrl: elem.url,
      }));

      setRecipes(recipes);
    } else {
      // throw new Error(response.status.toString());
      //throw
    }
  }

  useEffect(() => {
    searchAllRecipesDesc();
  }, []);

  return recipes;
}
