import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";

function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

    function handleChange(){
      setLanguage((prev) => (prev === "eng" ? "rus" : "eng"));
    }
  return (
    <div>
      <h3>{theme}</h3>
      <h3>{language}</h3>
      <button
        onClick={() => {
          handleChange();
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Home;
