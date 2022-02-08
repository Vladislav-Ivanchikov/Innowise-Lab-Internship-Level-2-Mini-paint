import React from "react";
import { LinkWrap } from "../navbar/Navbar.style";
import { SidebarWrap } from "./Sidebar.style";

const Sidebar: React.FC = () => {
  return (
    <SidebarWrap>
      <LinkWrap to="/canvas">Create new picture</LinkWrap>
    </SidebarWrap>
  );
};

export default Sidebar;