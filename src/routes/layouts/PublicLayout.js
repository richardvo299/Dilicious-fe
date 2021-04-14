import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from "../../components/PublicNavbar";
import Footer from "../../components/Footer";
import PrivateRoute from '../PrivateRoute'

import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import AuthPage from "../../pages/AuthPage";
import AboutUsPage from "../../pages/AboutUsPage";
import CheckoutPage from "../../pages/CheckoutPage";
import DeliveryPage from "../../pages/DeliveryPage";
import AdminPage from "../../pages/AdminPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ThankyouPage from "../../pages/ThankyouPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/delivery" component={DeliveryPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/thanks" component={ThankyouPage} />
          <Route path="/search/:keywords" component={HomePage} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <PrivateRoute path="/:id" exact component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default PublicLayout;