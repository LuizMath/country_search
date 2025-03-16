import { useEffect } from "react";

const ErrorService = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener("axios-error", (event) => {
      alert(event);
    });
    return () => {
      window.addEventListener("axios-error", (event) => {
        alert(event);
      });
    };
  }, []);
  return <></>;
};
