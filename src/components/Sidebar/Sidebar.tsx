import React from "react";
import styled from "styled-components";
import { LinkWrap } from "../Navbar/Navbar";

const SidebarWrap = styled.div`
  width: 20vw;
  background-color: dimgray;
  padding: 20px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarWrap>
      <LinkWrap to="/canvas">Create new picture</LinkWrap>
    </SidebarWrap>
  );
};

export default Sidebar;