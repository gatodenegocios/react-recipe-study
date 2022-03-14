import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LastRecipes, LastRecipeProps } from ".";
import { RecipeDescriptionType } from "../../../../types/recipe_description_type";

describe(LastRecipes, () => {
  let recipes: RecipeDescriptionType[] = [
    {
      id: "1",
      name: "Rice",
      description:
        "This is it—the foolproof recipe for making perfect rice on the stove. If cooking rice makes you nervous, know that you are not alone.",
      imgUrl:
        "https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2015/08/rice-in-bowl-horiz-with-spoon-copy-768x768.jpg.webp",
    },
    {
      id: "2",
      name: "Rice",
      description:
        "This is it—the foolproof recipe for making perfect rice on the stove. If cooking rice makes you nervous, know that you are not alone.",
      imgUrl:
        "https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2015/08/rice-in-bowl-horiz-with-spoon-copy-768x768.jpg.webp",
    },
    {
      id: "3",
      name: "Rice",
      description:
        "This is it—the foolproof recipe for making perfect rice on the stove. If cooking rice makes you nervous, know that you are not alone.",
      imgUrl:
        "https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2015/08/rice-in-bowl-horiz-with-spoon-copy-768x768.jpg.webp",
    },
  ];

  it("render", () => {
    render(<LastRecipes openRecipe={undefined} recipes={undefined} />);
    const element = screen.getByTestId("last-recipes");
    expect(element);
  });

  it("render with recipes", () => {
    render(<LastRecipes openRecipe={undefined} recipes={recipes} />);

    const element = screen.getByTestId("last-recipes--list");

    expect(element.children.length).toBe(recipes.length);

    userEvent.click(element.children[0]);
  });

  it("redirect function", () => {
    const onClick = jest.fn();

    render(<LastRecipes openRecipe={onClick} recipes={recipes} />);

    const element = screen.getByTestId("last-recipes--list");

    expect(element.children.length).toBe(recipes.length);

    userEvent.click(element.children[0]);

    expect(onClick).toHaveBeenCalled();
  });
});
