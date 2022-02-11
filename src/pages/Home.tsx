import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Gallery from "../components/gallery/Gallery";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";
import { useActions } from "../hooks/useActions";

const HomeWrap = styled.div`
  height: 90vh;
  display: flex;
`;

export const Home: React.FC = (): JSX.Element => {
  const users: any = [];
  const { fetchUsersPicture } = useActions();
  const fetch = async () => {
    const usersCollection = await getDocs(collection(db, "users"));
    usersCollection.forEach((doc) => users.push(doc.data()));
    fetchUsersPicture(users);
  };

  return (
    <HomeWrap>
      <Sidebar />
      <Gallery fetch={fetch} />
    </HomeWrap>
  );
};

export default Home;
