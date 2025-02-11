import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { useEffect, useState , createContext} from "react";

export const LanguageContext = createContext();
export const ThemeContext = createContext()

function App() {
  const [language, setLanguage ] = useState('uz')
  const [theme, setTheme] = useState("light")
  const [token , setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(function(){
    if (!token) {
      navigate('/login')
    }
  }, [token])

  return (
    <ThemeContext.Provider value={{theme,setTheme}} >
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/about" element={token ? <About /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App
