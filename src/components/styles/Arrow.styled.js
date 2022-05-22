import styled from 'styled-components'

export const SCArrow = styled.button`
  border: none;
  border-radius: .3rem;
  flex-grow: 0;
  padding: 0 0.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 10;
  margin: 0.25rem 0;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
  }
  div {
    transition: transform 150ms ease-in-out;
  }
  &:hover div {
    transform: scale(1.1);
  }

  ${(props) =>
    props.type === "right"
      ? "border-top-right-radius: 0px; border-bottom-right-radius: 0"
      
      : "border-bottom-left-radius: 0; border-top-left-radius: 0"}
`;