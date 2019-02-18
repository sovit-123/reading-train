import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../Routes/Routes";
import SignOutButton from "../SignOut";
import Search from "../Search/Search";

import "./Navbar.css";

const Navigation = ({ authUser }) => {
  return <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    <div>
      <ul className="navigation-search-auth">
        <li>
          <Link className="links" to={ROUTES.LANDING}>
            Landing
          </Link>
        </li>
        <li>
          <Link className="links" to={ROUTES.HOME}>
            Home
          </Link>
        </li>
        <li>
          <SignOutButton />
        </li>
        <Search />
      </ul>
    </div>
  );
};

const NavigationNonAuth = () => (
  <ul className="navigation-search-nonauth">
    <li>
      <Link className="links" to={ROUTES.LANDING}>
        Landing
      </Link>
    </li>
    <li>
      <Link className="links" to={ROUTES.SIGN_IN}>
        Sign In
      </Link>
    </li>
    <Search />
  </ul>
);

export default Navigation;
