import styled from "styled-components";

export const SCOverviewContainer = styled.div`
  display: flex;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.375rem;
  border-width: 1px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: 3rem;
      line-height: 1;
    }
  }
  span {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  @media (min-width: 1024px) {
    height: 24rem;
  }
`;
