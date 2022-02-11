import styled from "styled-components";
import {Text} from "../sidebar/Sidebar.style";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  max-height: 90vh;
  overflow-y: scroll;
  padding: 10px;
`
export const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;
`

export const PicText = styled(Text)`
  color: #565656;
`