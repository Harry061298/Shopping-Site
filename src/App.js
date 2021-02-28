import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HfHvFESXf0vDJIqgH76Z7upNdV5pJO4dJXB1hB6WzAtWQQT5jHoSURgkx1Xwx9AGnaJlx6YXl3EJqURSju9i0k200mvM8JzhZ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when app compenent runs
    auth.onAuthStateChanged((authUser) => {
      console.log("THE AUTH USER >> ", authUser);
      if (authUser) {
        // the useer just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is loggd out
        dispatch({
          type: "SET_USER",
          USER: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
