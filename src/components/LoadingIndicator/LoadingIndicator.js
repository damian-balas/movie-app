import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

import Spinner from "../../components/Spinner";

const LoadingIndicator = props => {
  const {off} = props
  const { promiseInProgress } = usePromiseTracker();
  return !off && promiseInProgress && <Spinner />;
};

export default LoadingIndicator;
