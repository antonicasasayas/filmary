import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const SCLink = styled(Link)`
  display: flex;
  flex: 0 0 20%;
  object-fit: cover;
  aspect-ratio: 16/9;
  width: 20%;
  padding: 0.25rem;
  border-radius: 0.4rem;
  @media (max-width: 500px) {
    width: 70%;
    padding: 0.1rem;
    border-radius: 0.2rem;
  }
`;