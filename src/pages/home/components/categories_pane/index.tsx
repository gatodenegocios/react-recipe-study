import { useSnackbar } from "../../../../hooks/useSnackBar";
import { LocalButton } from "../local_button";
import "./index.scss";
export function CategoriesPane() {
  const { showUnimplementedFunction } = useSnackbar();

  return (
    <div id="categories-pane">
      <LocalButton onClick={showUnimplementedFunction}>Meat</LocalButton>
      <LocalButton onClick={showUnimplementedFunction}>Soup</LocalButton>
      <LocalButton onClick={showUnimplementedFunction}>Fish</LocalButton>
      <LocalButton onClick={showUnimplementedFunction}>Vegan</LocalButton>
    </div>
  );
}
