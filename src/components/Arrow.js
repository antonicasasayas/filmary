import React from "react";
import { SCArrow } from "./styles/Arrow.styled";
const Arrow = ({ onClick, type, html }) => {
  return (
    <SCArrow data-testid="sliderButton" onClick={() => onClick()} type={type}>
      <div>{html}</div>
    </SCArrow>
  );
};

export default Arrow;
