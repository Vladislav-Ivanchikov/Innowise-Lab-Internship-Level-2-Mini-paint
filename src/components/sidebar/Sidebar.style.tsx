import styled from "styled-components";

export const SidebarWrap = styled.div`
  min-width: 20vw;
  background-color: dimgray;
  padding: 20px;
  
  @media ${({theme}) => theme.media.small}{
    padding: 10px;
  }

  @media ${({theme}) => theme.media.medium}{
    padding: 10px;
  }
`;

export const FindWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 42px;

  @media ${({theme}) => theme.media.small}{
    margin-top: 10px
  }

  @media ${({theme}) => theme.media.medium}{
    margin-top: 10px
  }
`

export const Text = styled.p`
  color: white;
  text-align: center;
  margin: 10px 0;
`