import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

import Spinner from "../../components/Spinner";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return !props.off && promiseInProgress && <Spinner />;
};

export default LoadingIndicator;
