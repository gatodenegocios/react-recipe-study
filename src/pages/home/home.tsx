import "./home.scss";
import { HeaderComponent } from "../../components/header";
import { Banner } from "./components/banner";

import { Footer } from "../../components/footer";
import { useHistory } from "react-router-dom";
import { LastRecipes } from "./components/last_recipes_list";
import { useAllRecipesDesc } from "../../hooks/useAllRecipesDesc";

export function HomePage() {
  const history = useHistory();
  const recipes = useAllRecipesDesc();

  function openRecipe(id: String) {
    history.push(`/recipe/${id}`);
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Banner></Banner>
      <LastRecipes recipes={recipes} openRecipe={openRecipe} />
      <Footer />
    </>
  );
}
