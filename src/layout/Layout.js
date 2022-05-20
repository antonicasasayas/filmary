import React, { useContext } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { StyledLayout } from "../components/styles/Layout.styled";
import { StyledFlexContainer } from "../components/styles/FlexContainer.styled";
import { SidebarStyled } from "../components/styles/Sidebar.styled";
const genres = [
  {
    id: 28,
    en: "Action",
    es: "Acción",
  },
  {
    id: 12,
    en: "Adventure",
    es: "Aventuras",
  },
  {
    id: 16,
    en: "Animation",
    es: "Animación",
  },
  {
    id: 35,
    en: "Comedy",
    es: "Comedia",
  },
  {
    id: 80,
    en: "Crime",
    es: "Crimen",
  },
  {
    id: 99,
    en: "Documentary",
    es: "Documental",
  },
  {
    id: 18,
    en: "Drama",
    es: "Drama",
  },
  {
    id: 10751,
    en: "Family",
    es: "Familia",
  },
  {
    id: 14,
    en: "Fantasy",
    es: "Fantasía",
  },
  {
    id: 36,
    en: "History",
    es: "Historia",
  },
  {
    id: 27,
    en: "Horror",
    es: "Terror",
  },

  {
    id: 9648,
    en: "Mystery",
    es: "Misterio",
  },
  {
    id: 10749,
    en: "Romance",
    es: "Romance",
  },
  {
    id: 878,
    en: "Science Fiction",
    es: "Ciencia Ficción",
  },
  {
    id: 53,
    en: "Thriller",
    es: "Thriller",
  },
];
const Layout = ({ children }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Header />

      <StyledFlexContainer>
        <SidebarStyled>
          {genres.map((genre) => (
            <section key={genre.id} className="">
              <Link to={"/genre/" + genre.id}>
                <span className="cursor-pointer ">
                  {language === "en" ? genre.en : genre.es}
                </span>
              </Link>
            </section>
          ))}
        </SidebarStyled>
        <StyledLayout>
          <main>{children}</main>
        </StyledLayout>
      </StyledFlexContainer>
    </>
  );
};

export default Layout;
