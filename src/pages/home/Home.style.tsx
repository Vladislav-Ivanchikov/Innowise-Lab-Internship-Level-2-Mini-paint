import styled from "styled-components";

export const HomeWrap = styled.div`
  height: 90vh;
  display: flex;
  
  @media ${({theme}) => theme.media.small}{
    flex-direction: column;
  }

  @media ${({theme}) => theme.media.medium}{
    flex-direction: column;
  }
`;