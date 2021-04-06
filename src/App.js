import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
// import authActions from "./redux/actions/auth.actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSearch,
  faShoppingCart,
);

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     dispatch(authActions.getCurrentUser(accessToken));
  //   } else {
  //     dispatch(authActions.logout());
  //   }
  // }, [dispatch]);
  return (
    <div className='App'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
