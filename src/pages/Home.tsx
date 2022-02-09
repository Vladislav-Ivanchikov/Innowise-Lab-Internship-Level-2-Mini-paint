import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Gallery from "../components/Gallery";
import styled from "styled-components";

const HomeWrap = styled.div`
  height: 90vh;
  display: flex;
`;

export const Home: React.FC = (): JSX.Element => {
  return (
    <HomeWrap>
      <Sidebar />
      <Gallery />
    </HomeWrap>
  );
};

export default Home;
