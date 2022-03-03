import "./index.scss";

import { BigText } from "../../../../components/text/big_text";

import { CategoriesPane } from "../../components/categories_pane";
import { RecipeNumber } from "../../components/recipe_number_pane";
import { Rows } from "../../components/rows/rows";

export function Banner() {
  return (
    <div className="full-page">
      <aside>
        <div className="texts">
          <BigText>easy to make</BigText>
          <BigText>easy to like</BigText>
        </div>
        <img src="https://www.pngplay.com/wp-content/uploads/13/Egg-Bread-PNG-Free-File-Download.png" />
      </aside>
      <main>
        <div className="top-bar">
          <Rows />
        </div>
        <div className="bottom-bar">
          <CategoriesPane />
          <RecipeNumber />
        </div>
      </main>
    </div>
  );
}
