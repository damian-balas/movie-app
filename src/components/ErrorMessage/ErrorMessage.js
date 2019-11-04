import React from "react";

import "./ErrorMessage.sass";

const ErrorMessage = ({ errorMessage }) =>
  <h2 className="error-message">{errorMessage}</h2>;

export default ErrorMessage;
