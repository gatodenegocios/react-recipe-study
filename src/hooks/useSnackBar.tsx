import React from "react";

import { SnackbarStatus } from "../components/snackbar";
import { SnackbarContext } from "../context/snackbar_context";
import { UNIMPLEMENTED_YET } from "../utils/consts";

export function useSnackbar() {
  const snackbarContext = React.useContext(SnackbarContext);

  const showSuccess = (message: string) => {
    snackbarContext.show(message, SnackbarStatus.success);
  };
  const showFail = (message: string) => {
    snackbarContext.show(message, SnackbarStatus.fail);
  };

  const showOther = (message: string) => {
    snackbarContext.show(message, SnackbarStatus.other);
  };

  //i don't think this goes right here
  const showUnimplementedFunction = () => {
    snackbarContext.show(UNIMPLEMENTED_YET, SnackbarStatus.other);
  };

  return {
    showSuccess,
    showFail,
    showOther,
    showUnimplementedFunction,
  };
}
