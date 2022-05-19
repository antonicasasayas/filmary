import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieInfo from "./MovieInfo";
test("renders content", () => {
  const info = {
    genres: ["Animation", "Comedy"],
    id: 808,
    overview:
      "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire- breathing dragon,Shrek teams up with an unlikely compatriot-- a wisecracking donkey.",
    poster_path: "/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    release_date: "2001-05-18",
    title: "Shrek",
    vote_average: 7.7,
  };

  const recommendedFilms = [
    {
      genres: ["Animation", "Comedy"],
      id: 809,
      overview:
        "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire- breathing dragon,Shrek teams up with an unlikely compatriot-- a wisecracking donkey.",
      poster_path: "/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
      release_date: "2001-05-18",
      title: "Shrek 2",
      vote_average: 7.7,
    },
  ];

  render(
    <BrowserRouter>
      <MovieInfo
        info={info}
        recommendedFilms={recommendedFilms}
        language="en"
      />
    </BrowserRouter>
  );

  const movieDescription = screen.getByText(info.overview);

  expect(movieDescription).toHaveTextContent(info.overview);
});
