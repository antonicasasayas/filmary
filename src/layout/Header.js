import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch} from "react-icons/ai";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SCNavbar } from "../components/styles/Navbar.styled";
import { SCLogo } from "../components/styles/Logo.styled";
import { SCInputContainer } from "../components/styles/InputContainer.styled";
const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  
  
  const [query, setQuery] = useState("");
  const [displayError, setDisplayError] = useState(false)
  const showError = () => {
    setDisplayError(true)
    setTimeout( () => setDisplayError(false), [3000])
  }
  const sendQuery = (e) => {
    e.preventDefault();

    if (query.length > 2) {
    window.location.href = "/search/" + query;
    } else showError()
  };
  return (
    <SCNavbar>
      
      <Link to="/">
        <SCLogo>
          Filmary
        </SCLogo>
      </Link>

      <form onSubmit={(e) => sendQuery(e)}>
        <SCInputContainer>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder={language === 'en' ? 'Search...' : 'Buscar...'}
            
          ></input>
          {displayError && (
            <span>
              { language === 'en' ? 'Type more than 2 char.' : 'Escribe más de 2 caracteres.'}
            </span>
          )}
        </SCInputContainer>

        <button type="submit">
          <AiOutlineSearch size={30} />
        </button>
      </form>
      <select onChange={ (e) => setLanguage(e.target.value)}  name="language" id="">
        <option value="en">
          English
        </option>
        <option  value="es">
          Español
        </option>
      </select>
    </SCNavbar>
  );
};

export default Header;
