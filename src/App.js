import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from '../src/layout/Layout'
import ScrollToTop from "./components/ScrollToTop";
import Genre from "./pages/Genre";
import SearchPage from "./pages/SearchPage";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./components/styles/Theme";
export default function App() {
  const [language, setLanguage] = useState('en')

  return (
    <Router>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ScrollToTop />

        <Layout>
          <Routes>
            <Route element={<MovieDetails />} path="/movies/:id" />
            <Route element={<Home />} path="/" />
            <Route element={<Genre />} path="/genre/:id" />
            <Route element={<SearchPage />} path="/search/:query" />
          </Routes>
        </Layout>
      </LanguageContext.Provider>
    </Router>
  );
}