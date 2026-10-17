import portrait from './assets/me-portrait.jpeg'
import Capstone from './Capstone'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <span className="logo">Abraham Guerrero</span>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#capstone">Capstone</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img className="portrait" src={portrait} alt="Portrait of Abraham Guerrero" />
          <h1>Hi, I'm Abraham Guerrero</h1>
          <p>Software Engineer | Specializing in Full-Stack Development & System Design</p>
          <a className="button" href="https://github.com/AbeGue02" target="_blank">
            View my GitHub
          </a>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            Driven by a background in software engineering and a Bachelor of Science in Computer Science from Southern New Hampshire University, I am a dedicated full-stack developer specializing in the MERN stack and high-performance React Native mobile applications. I leverage my technical expertise in mobile app development and efficiency-focused workflows to build scalable, user-centric solutions. I am committed to continuous technical growth, focusing on the intersection of AI-driven development and modern cross-platform architecture.
          </p>
        </section>

        <Capstone />
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
