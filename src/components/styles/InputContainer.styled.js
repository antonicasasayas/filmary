import styled from "styled-components";

export const SCInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-right: 0.5rem;
    color: #ef4444;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  input {
    padding-left: 1rem;
    color: #000000;
    width: 10rem;
    border-radius: 0.375rem;
    height: 2.25rem;
    @media (min-width: 1024px) {
      width: 24rem;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;
