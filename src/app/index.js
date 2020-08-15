import React, { useEffect, useContext } from "react";
// import Button from "./components/Button";
// import Dropdown from "./components/Dropdown";
// import logo from "./styles/images/Advert.png";

import { Switch, Route } from "react-router-dom";
import { AdvertsContext } from "../providers/advertisments.provider";
// import { IsAuthenticatedContext } from "../providers/isAuthenticated.provider";
// import { LogoutContext } from "../providers/logout.provider";
// import { DropdownContext } from "../providers/dropdown.provider";

import Home from "./pages/Home";
import UserAdverts from "./pages/UserAdverts";
import Register from "./pages/Register";
import MobileMenu from "./pages/MobileMenu";
import Createadvert from "./pages/CreateAdvert";
// import Settings from "./pages/Settings";
import Single from "./pages/Single";
// import { TokenContext } from "../providers/token.provider";
// import { UserNameContext } from "../providers/userName.provider";
import HeaderMain from "./components/HeaderMain";
import HeaderFollowing from "./components/HeaderFollowing";
// import Hero from "./components/Hero";

const App = () => {
  // let itemsPerPage = 5;
  // let currentPage = 1;
  // const { userName } = useContext(UserNameContext);
  // const { logout } = useContext(LogoutContext);
  // const { token } = useContext(TokenContext);
  // const { dropdown, toggleDropdown } = useContext(DropdownContext);
  const { getPublicItems } = useContext(AdvertsContext);
  // const { isAuthenticated } = useContext(IsAuthenticatedContext);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPublicItems();
  }, [getPublicItems]);

  return (
    <div className="App">
      <div className="Container">
        <HeaderMain />
        <HeaderFollowing />
        <Switch>
          <Route exact path="/Vinted-copy-frontend/" Component={Home}>
            <Home />
          </Route>
          <Route exact path="/useradverts" Component={UserAdverts}>
            <UserAdverts />
          </Route>
          <Route exact path="/register" Component={Register}>
            <Register />
          </Route>
          <Route exact path="/createadvert" Component={Createadvert}>
            <Createadvert />
          </Route>
          <Route exact path="/content/:id">
            <Single />
          </Route>
          <Route exact path="/mobilemenu" Component={MobileMenu}>
            <MobileMenu />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
