import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { brushAction } from "../../store/action-creators/toolAction";
import { UsersDataType } from "../../types/data";
import { IState } from "../../types/state";
import {GalleryWrapper, NotFoundWrap, PicText, PicWrapper} from "./Gallery.style";

export interface IProps {
  fetch: () => Promise<void>;
}

const Gallery: React.FC<IProps> = ({ fetch }) => {
  const state = useSelector((state: IState) => state);
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
      {state.data.users.length > 0 ? (
        state.data.users.map((user: UsersDataType) => (
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
        </NotFoundWrap>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;