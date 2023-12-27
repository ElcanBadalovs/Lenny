import React, { useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";
import { paths } from "../../utils/constant";

const Error = () => {
  const { status, statusText } = useRouteError();
  useEffect(() => {
    document.title = "Error !";
  }, []);
  return (
    <div className="Error">
      <h1>
        {statusText} {status}
      </h1>
      <Link to={paths.HOME}>Home Page</Link>
    </div>
  );
};

export default Error;
