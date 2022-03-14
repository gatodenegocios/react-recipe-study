import React, { forwardRef, useImperativeHandle, useState } from "react";
import { waitSeconds } from "../../utils/await_timer";
import "./index.scss";

export enum SnackbarState {
  show,
  hidden,
}

export enum SnackbarStatus {
  success,
  fail,
  other,
}

type SnackbarProps = {};

export type SnackbarHandle = {
  show: (message: string, status: SnackbarStatus) => void;
};

export const Snackbar = forwardRef<SnackbarHandle, SnackbarProps>(
  ({ ...props }: SnackbarProps, ref) => {
    const [showStateSnackbar, setStateSnackbar] = useState<SnackbarState>(
      SnackbarState.hidden
    );
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<SnackbarStatus>(SnackbarStatus.other);

    const isShowing = () => showStateSnackbar === SnackbarState.show;

    async function show(message: string, status: SnackbarStatus) {
      if (isShowing()) return;

      setStateSnackbar(SnackbarState.show);
      setMessage(message);
      setStatus(status);
      await waitSeconds(2);

      setStateSnackbar(SnackbarState.hidden);
    }

    useImperativeHandle(ref, () => ({
      show(message: string, status: SnackbarStatus) {
        show(message, status);
      },
    }));

    function getSymbol() {
      switch (status) {
        case SnackbarStatus.success:
          return <h1>&#10004;</h1>;

        case SnackbarStatus.fail:
          return <h1>&#10008;</h1>;

        default:
          return <h1>&#8500;</h1>;
      }
    }

    function getBackgroundColor(): string {
      switch (status) {
        case SnackbarStatus.success:
          return "success";

        case SnackbarStatus.fail:
          return "fail";

        default:
          return "other";
      }
    }

    function getId() {
      switch (showStateSnackbar) {
        case SnackbarState.show:
          return "show";

        case SnackbarState.hidden:
          return "hidden";
      }
    }

    return (
      <div
        id={getId()}
        className={`snackbar ${getBackgroundColor()}`}
        data-testid="snackbar"
      >
        <div className={"symbol"}>{getSymbol()}</div>
        <div className="message">{message}</div>
      </div>
    );
  }
);
