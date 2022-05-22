import styled from 'styled-components'

export const SCSlider = styled.div`
  display: flex;
  width: 90%;
  flex-grow: 1;
  margin: 0 0.25rem;
  transform: translateX(calc(${({ carouselIndex }) => carouselIndex * -100}%));
  ${({ isTransitionActive }) =>
    isTransitionActive ? "transition: transform 500ms ease-in-out" : ""}
`;