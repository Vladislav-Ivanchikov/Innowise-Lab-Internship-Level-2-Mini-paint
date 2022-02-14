import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { brushAction } from "../../store/action-creators/toolAction";
import { UsersDataType } from "../../types/data";
import { IState } from "../../types/state";
import {GalleryWrapper, NotFoundWrap, PicText, PicWrapper} from "./Gallery.style";
import {LinkWrap} from "../navbar/Navbar.style";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export interface IProps {
  fetch: () => Promise<void>;
}

const Gallery: React.FC<IProps> = ({ fetch }) => {
  const { users } = useTypedSelector((state: IState) => state.data);
  const { setStrokeColor, setFillColor, setLineWidth } = useActions();

  useEffect(() => {
    fetch();
    setStrokeColor("black");
    setFillColor("white");
    setLineWidth(1);
    brushAction();
  }, []);

  return (
    <GalleryWrapper>
      {users.length > 0 ? (
        users.map((user: UsersDataType) => (
          <PicWrapper key={user.image}>
            <img
              style={{ background: "white" }}
              src={user.image}
              width={250}
              height={200}
              alt=""
            />
            <PicText>{user.username}</PicText>
          </PicWrapper>
        ))
      ) : (
        <NotFoundWrap>
          <h2>Pictures not found...</h2>
          <LinkWrap to='/' onClick={() => window.location.reload()}>Back to gallery</LinkWrap>
        </NotFoundWrap>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;