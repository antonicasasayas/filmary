import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from '../src/layout/Layout'
import ScrollToTop from "./components/ScrollToTop";
import Genre from "./pages/Genre";
import SearchPage from "./pages/SearchPage";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route element={<MovieDetails />} path="/movies/:id" />
          <Route element={<Home />} path="/" />
          <Route element={<Genre />} path="/genre/:id" />
          <Route element={<SearchPage />} path="/search/:query" />
        </Routes>
      </Layout>
    </Router>
  );
}