import styled from "styled-components";

export const SCSearchPageContainer = styled.div`
  padding-top: 3rem;
  h1 {
    margin-bottom: 3rem;
    font-size: 3rem;
    line-height: 1;
    font-weight: 800;
    text-align: center;
  }

  section {
    display: grid;
    gap: 2.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    padding-top: 0;
  }
`;
