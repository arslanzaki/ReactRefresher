import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div>Error: {error.statusText}</div>
      <div>Status Code: {error.status}</div>
    </div>
  );
};

export default Error;
