import { useEffect } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Capstone from './Capstone'
import Home from './Home'
import Projects from './Projects'
import './App.css'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="header">
        <span className="logo">Abraham Guerrero</span>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/capstone">Capstone</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capstone" element={<Capstone />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abraham Guerrero</p>
        <div className="social-links">
          <a href="mailto:abrahamgue02@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <a href="https://github.com/AbeGue02" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abrahamdguerrero/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default App
