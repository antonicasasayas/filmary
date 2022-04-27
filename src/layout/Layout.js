import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  
  {
    id: 53,
    name: "Thriller",
  },
  
];
const Layout = ({children}) => {
  return (
    <>
      <Header />

      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div class="drawer-content  flex flex-col items-center  justify-center">
          <main className=" text-white h-full lg:pt-12 lg:pl-12 ">{children}</main>
        </div>
        
        <div class="drawer-side">
        
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul className="menu p-4  bg-sidebar overflow-y-auto w-64 text-white ">
            {genres.map((genre) => (
              <div key={genre.id} className=" inline-block my-1.5  text-xl">
                <Link to={"/genre/" + genre.id}>
                  <span className="cursor-pointer ">{genre.name}</span>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Layout