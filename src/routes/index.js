import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import PublicLayout from "./layouts/PublicLayout";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={PublicLayout} />
      <PrivateRoute path="/admin" />
    </Switch>
  );
};
export default Routes;