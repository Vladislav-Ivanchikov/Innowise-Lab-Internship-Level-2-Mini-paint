import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { brushAction } from "../../store/action-creators/toolAction";
import { GalleryWrapper, PicText, PicWrapper } from "./Gallery.style";
import { UsersDataType } from "../../types/data";
import { IState } from "../../types/state";

export interface IProps {
  fetch: () => Promise<void>;
}

const Gallery: React.FC<IProps> = ({ fetch }) => {
  const state = useSelector((state: IState) => state);
  const { setStrokeColor, setFillColor, setLineWidth } = useActions();

  useEffect(() => {
    fetch();
    setStrokeColor("black");
    setFillColor("transparent");
    setLineWidth(1);
    brushAction();
  }, []);

  return (
    <GalleryWrapper>
      {state.data &&
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
        ))}
    </GalleryWrapper>
  );
};

export default Gallery;