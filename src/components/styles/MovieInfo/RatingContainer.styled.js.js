import styled from "styled-components";

export const SCRatingContainer = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  width: 3rem;
  border-radius: 0.375rem;
  background-color: ${({theme}) => theme.darkBlue} ;
  @media (min-width: 1024px) {
    width: 6rem;
  }
`;
