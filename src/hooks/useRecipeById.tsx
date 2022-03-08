import axios from "axios";
import { useEffect, useState } from "react";
import { RecipeType } from "../types/recipe_type";

export function useRecipeById(id: string) {
  const [recipe, setRecipe] = useState<RecipeType>();
  const [loading, setLoading] = useState<boolean>(true);

  async function searchRecipeById() {
    const response = await axios.get(`http://localhost:3005/recipes/${id}`);

    if (response.status === 200) {
      const elem = response.data;
      const recipe = {
        id: elem.id,
        name: elem.name,
        description: elem.description,
        imgUrl: elem.url,
        ingredients: elem.ingredients,
        directions: elem.directions,
      };

      setLoading(false);

      setRecipe(recipe);
    } else {
    }
  }

  useEffect(() => {
    searchRecipeById();
  }, []);

  return { loading, recipe };
}
