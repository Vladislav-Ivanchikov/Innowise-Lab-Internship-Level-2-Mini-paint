import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { RouteConst } from "../../types/routes";
import { Context } from "../../index";
import { useAuth } from "../../context/AuthContext";
import styled from "styled-components";

const NavbarWrap = styled.header`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-evenly;
  background-color: gray;
`;

export const LinkWrap = styled(Link)`
  font-size: 20px;
  color: aliceblue;
  background-color: transparent;
  text-decoration: none;
  margin: 0 10px;
  transition: 0.2s;

  :hover {
    font-size: 24px;
    color: white;
  }
`;

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
          <LinkWrap to={RouteConst.SIGNIN_ROUTE}>Sign in</LinkWrap>|
          <LinkWrap to={RouteConst.REG_ROUTE}>Register</LinkWrap>
        </div>
      )}
    </NavbarWrap>
  );
};

export default Navbar;