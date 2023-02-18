import React from "react";
import { useRouteError } from 'react-router-dom';


function ErrorPage() {
  const error = useRouteError;
  console.log(error.message);
  return (
    <div id="error-page">
      <img src="/error.png" alt="not found" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;