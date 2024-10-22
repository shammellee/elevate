import { useRouteError } from 'react-router-dom';

import './Error.css'

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="page-error">
      <h1>Uh oh!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;

