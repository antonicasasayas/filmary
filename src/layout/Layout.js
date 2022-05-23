import React from "react";
import Header from "./Header";
import { StyledLayout } from "../components/styles/Layout.styled";
import { StyledFlexContainer } from "../components/styles/FlexContainer.styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <StyledFlexContainer>
        
        <StyledLayout>
          <main>{children}</main>
        </StyledLayout>
      </StyledFlexContainer>
    </>
  );
};

export default Layout;
