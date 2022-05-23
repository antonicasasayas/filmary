import styled from "styled-components";
export const SCRecommendedFilms = styled.div`
  display: grid;
  padding-bottom: 6rem;
  margin: 0 auto ;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
