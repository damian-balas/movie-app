import React from "react";

import "./ErrorMessage.sass";

const ErrorMessage = ({ errorMessage }) =>
  errorMessage && <h1 className="error-message">{errorMessage}</h1>;

export default ErrorMessage;
