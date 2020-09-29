import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Info from "./Component/Info/Info";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import More from "./Component/More/More";
import Detail from "./Component/Detail/Detail";
import NotFound from "./Component/NotFound/NotFound";
import DaynamicDetails from "./Component/DaynamicDetails/DaynamicDetails";
import Login from "./Component/Login/Login";

import { useEffect } from "react";
import { useAuth, PrivateRoute } from "./Component/Login/UseAuth";
import CheckOut from "./Component/Checkout/CheckOut";
function App() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div style={{ background: "#212529" }}>
      {auth.user ? (
        <div>
          <Header />
          <Router>
            <Switch>
              <Route path="/home">
                <Info />
              </Route>
              <Route exact path="/details">
                <Detail />
              </Route>
              <Route path="/more">
                <More />
              </Route>
              <Route exact path="/">
                <Info />
              </Route>
              <Route path="/details/:userName">
                <DaynamicDetails />
              </Route>
              <PrivateRoute path="/checkout">
                <CheckOut />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
