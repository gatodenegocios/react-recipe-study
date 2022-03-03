import { HomePage } from "../pages/home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "../pages/not_found";
import { RecipePage } from "../pages/recipe";

import { SnackbarContextProvider } from "../context/snackbar_context";

function App() {
  return (
    <SnackbarContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/recipe/:id">
              <RecipePage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </SnackbarContextProvider>
  );
}

export default App;
