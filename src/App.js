import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "../src/layout/Layout";
import SearchPage from "./pages/SearchPage";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./components/styles/Theme";
export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Layout>
            <Routes>
              <Route element={<MovieDetails />} path="/movies/:id" />
              <Route element={<Home />} path="/" />
              <Route element={<SearchPage />} path="/search/:query" />
            </Routes>
          </Layout>
        </LanguageContext.Provider>
      </ThemeProvider>
    </Router>
  );
}
