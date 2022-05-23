import styled from 'styled-components'

export const SCSectionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.4rem;
  text-align: ${({ align }) => align || "left"};
  @media (max-width: 500px) {
    font-size: 1rem;
    margin: ${({ margin }) => margin || "5px"};
  }
`;