import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const HomeWrap = styled.div`
  height: 90vh;
  display: flex;
`;

export const Home: React.FC = (): JSX.Element => {
  return (
    <HomeWrap>
      <Sidebar />
    </HomeWrap>
  );
};

export default Home;
