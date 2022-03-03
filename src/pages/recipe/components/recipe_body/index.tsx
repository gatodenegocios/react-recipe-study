import { ImgRecipe } from "../../../../components/img-recipe";
import { RecipeType } from "../../../../types/recipe_type";
import "./index.scss";

type RecipeBodyProps = {
  loading: boolean;
  recipe: RecipeType | undefined;
};

export function RecipeBody({ ...props }: RecipeBodyProps) {
  return (
    <>
      <h1 id="title-recipe">{props.recipe?.name}</h1>
      <div id="recipe-content">
        <h2 id="description-recipe">{props.recipe?.description}</h2>
        <ImgRecipe src={props.recipe?.imgUrl} />
        <h3 className="topic">Ingredients</h3>
        <ul className="topic-items">
          {props.recipe?.ingredients.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
        <h3 className="topic">Directions</h3>
        <ul id="directions-items" className="topic-items">
          {props.recipe?.directions.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
