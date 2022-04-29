import React, {useContext} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
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
  const {language} = useContext(LanguageContext)
  return (
    <>
      <Header />

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content  flex flex-col items-center  justify-center">
          <main className=" text-white h-full lg:pt-12  ">{children}</main>
        </div>
        
        <div className="drawer-side">
        
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  bg-sidebar overflow-y-auto w-64 text-white ">
            {genres.map((genre) => (
              <div key={genre.id} className=" inline-block my-1.5  text-xl">
                <Link to={"/genre/" + genre.id}>
                  <span className="cursor-pointer ">{language === 'en' ? genre.en : genre.es}</span>
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