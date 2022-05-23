import styled from "styled-components";

export const SCRatingSpan = styled.span`
  ${({ size }) =>
    size === "large"
      ? "font-size: 1.875rem;line-height: 2.25rem; font-weight: 700; @media (min-width: 1024px) { font-size: 4.5rem; line-height: 1}"
      : "font-size: 1.25rem;line-height: 1.75rem; font-weight: 700; @media (min-width: 1024px) { font-size: 2.25rem;line-height: 2.5rem }"}
`;
