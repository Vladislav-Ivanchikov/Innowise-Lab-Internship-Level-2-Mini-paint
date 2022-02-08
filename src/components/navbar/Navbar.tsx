import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RouteName } from "../../types/routes";
import { Context } from "../../index";
import { useAuth } from "../../context/AuthContext";
import { LinkWrap, NavbarWrap } from "./Navbar.style";

const Navbar: React.FC = (): JSX.Element => {
  const { auth } = useContext(Context);
  let [user] = useAuthState(auth);
  const { logOut } = useAuth();

  return (
    <NavbarWrap>
      <LinkWrap to="/">Mini Paint</LinkWrap>
      {user ? (
        <LinkWrap to="/" onClick={logOut}>
          Sign out
        </LinkWrap>
      ) : (
        <div>
          <LinkWrap to={RouteName.SIGNIN_ROUTE}>Sign in</LinkWrap>|
          <LinkWrap to={RouteName.REG_ROUTE}>Register</LinkWrap>
        </div>
      )}
    </NavbarWrap>
  );
};

export default Navbar;