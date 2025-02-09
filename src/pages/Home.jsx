import React, {useContext} from 'react'
import { LanguageContext } from '../App'

function Home() {
  const {language, setLanguage} = useContext(LanguageContext)

  setLanguage('rus')
  setLanguage('eng')
  return (
    <div>
      <h3>{language}</h3>

      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Home