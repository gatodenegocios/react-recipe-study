import React, { ReactNode, useRef } from "react";
import {
  Snackbar,
  SnackbarHandle,
  SnackbarStatus,
} from "../components/snackbar";

type SnackbarContextType = {
  show: Function;
};

type SnackbarContextProviderProps = {
  children: ReactNode;
};

export function SnackbarContextProvider(props: SnackbarContextProviderProps) {
  const snackbarRef = useRef<SnackbarHandle>(null);

  const sampleSnackbarContext: SnackbarContextType = {
    show: (message: string, status: SnackbarStatus) => {
      if (snackbarRef.current) {
        snackbarRef.current.show(message, status);
      }
    },
  };

  return (
    <SnackbarContext.Provider value={sampleSnackbarContext}>
      {props.children}
      <Snackbar ref={snackbarRef} />
    </SnackbarContext.Provider>
  );
}

export const SnackbarContext = React.createContext({} as SnackbarContextType);
