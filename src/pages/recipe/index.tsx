import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { HeaderComponent } from "../../components/header";
import { useRecipeById } from "../../hooks/useRecipeById";
import { RecipeBody } from "./components/recipe_body";
import "./index.scss";

type RecipePageParams = {
  id: string;
};

export function RecipePage() {
  const params = useParams<RecipePageParams>();
  const history = useHistory();
  const { loading, recipe } = useRecipeById(params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function toHomePage() {
    history.push("/");
  }

  function throwError() {
    throw new Error("botao");
  }

  return (
    <div className="content">
      <HeaderComponent />
      <div className="recipe">
        <RecipeBody loading={loading} recipe={recipe} />

        <Button onClick={throwError}>Back</Button>
      </div>
    </div>
  );
}
