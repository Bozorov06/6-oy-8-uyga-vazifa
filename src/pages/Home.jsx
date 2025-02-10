import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";

function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleChange(){
    setLanguage= ('eng')
    setLanguage= ('rus')
  }
  return (
    <div>
      <h3>{theme}</h3>
      <h3>{language}</h3>
      <button
        onClick={
          (handleChange,
          () => {
            setTheme((prev) => {
              if (prev == "light") {
                return "dark";
              } else {
                return "light";
              }
            });
          })
        }
      >
        Change
      </button>
    </div>
  );
}

export default Home;
