import styled from "styled-components";

export const SidebarStyled = styled.aside`
  display: none;
  flex-direction: column;
  background-color: ${(({ theme }) => theme.darkBlue)};
   width: 200px;

   section{
       font-size: 1.1rem;
       margin: 10px 0 10px 25px;
       
   }
`;
