import React from "react";
import { useHistory } from "react-router-dom";

import { useSnackbar } from "../../hooks/useSnackBar";
import { UNIMPLEMENTED_YET } from "../../utils/consts";
import { Button } from "../button";
import "./index.scss";

export function HeaderComponent() {
  const history = useHistory();
  const { showUnimplementedFunction } = useSnackbar();

  const singInButton = showUnimplementedFunction;
  const signUpButton = showUnimplementedFunction;

  function toHomePage() {
    history.push("/");
  }

  return (
    <header data-testid="header">
      <span onClick={toHomePage} id="title">
        comidocas
      </span>
      <div className="menu-buttons">
        <Button onClick={singInButton}>Sign-in</Button>
        <Button onClick={signUpButton} className="darker">
          Sign-up
        </Button>
      </div>
    </header>
  );
}
