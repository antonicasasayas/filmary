import styled from 'styled-components'

export const SCNavbar = styled.nav`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  form {
    position: relative;
    button {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
      color: #000000;
    }
  }

  select {
    padding: 0.375rem;
    color: #000000;
    border-radius: 0.375rem;
  }

  @media (min-width: 1024px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;