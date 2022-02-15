import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../index";
import { useActions } from "../../utils/useActions";
import { UsersDataType } from "../../types/data";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
import { HomeWrap } from "./Home.style";

export const Home: React.FC = (): JSX.Element => {
  const users: UsersDataType[] | { [field: string]: any } = [];
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
