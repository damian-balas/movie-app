import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

import Spinner from "../../components/Spinner";

const LoadingIndicator = ({off}) => {
  const { promiseInProgress } = usePromiseTracker();
  return !off && promiseInProgress && <Spinner />;
};

export default LoadingIndicator;
