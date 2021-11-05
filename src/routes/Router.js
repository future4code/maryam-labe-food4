import React             from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch }        from "react-router-dom";
import { Route }         from "react-router-dom";

import Footer            from "../components/Footer/Footer";
import Login             from "../pages/Login/Login";
import SignUp            from "../pages/SignUp/SignUp";
import Address           from "../pages/Address/Address";
import Profile           from "../pages/Profile/Profile";
import Cart              from "../pages/Cart/Cart";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import ChangeProfile     from "../pages/ChangeProfile/ChangeProfile"
import Home              from "../pages/Home/Home";


const Router = () => {



  return (
    <BrowserRouter>
      <Switch>


        <Route exact path="/signUp">
          <SignUp />
          <Footer/>
        </Route>

        <Route exact path="/">
          <Login />
          <Footer/>
        </Route>

        <Route exact path="/signup-address">
          <Address />
          <Footer/>
        </Route>

        <Route exact path="/profile">
          <Profile />
          <Footer/>
        </Route>

        <Route exact path="/cart">
          <Cart />
          <Footer/>
        </Route>

        <Route exact path="/restaurant/:id?/">
          <RestaurantDetails />
        </Route>

        <Route exact path="/change-profile">
          <ChangeProfile />
          <Footer/>
        </Route>

        <Route exact path="/home/">
          <Home />
          <Footer/>
        </Route>

      </Switch>



    </BrowserRouter>
  );
};

export default Router;
