import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: ${({ direction }) => direction || "row"};

`;
