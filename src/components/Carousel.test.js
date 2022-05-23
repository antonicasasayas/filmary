import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { BrowserRouter } from "react-router-dom";

const horrorMovies = [
  {
    genres: ["Animation", "Comedy"],
    id: 808,
    overview:
      "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire- breathing dragon,Shrek teams up with an unlikely compatriot-- a wisecracking donkey.",
    poster_path: "/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    release_date: "2001-05-18",
    title: "Shrek",
    vote_average: 7.7,
  },
];

test("renders content", () => {
  

    render(
      <BrowserRouter>
            
    <Carousel
      title={{ en: "Horror", es: "Terror" }}
      movies={horrorMovies}
      language={"en"}
    />
      </BrowserRouter>
  );

  const titleText = screen.getByText("Horror");

  expect(titleText).toHaveTextContent("Horror");
});

