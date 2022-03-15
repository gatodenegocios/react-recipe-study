import { BigText } from "../../../../components/text/big_text";
import { MediumText } from "../../../../components/text/medium_text";
import "./index.scss";

export function RecipeNumber() {
  return (
    <div id="recipe-pane" data-testid="recipe-pane">
      <MediumText>More than</MediumText>
      <BigText>3</BigText>
      <MediumText>recipes</MediumText>
    </div>
  );
}
