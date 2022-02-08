import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrap = styled.header`
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
