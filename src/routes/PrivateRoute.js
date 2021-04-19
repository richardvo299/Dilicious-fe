import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.user.role);
  // const [isadmin, setIsadmin] = useState(false);
  console.log("role?", role);
  if (isAuthenticated && role==="admin") return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={() => <Redirect to="/auth" />} />;
};

export default PrivateRoute;