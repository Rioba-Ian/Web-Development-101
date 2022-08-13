import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar handleClick={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
