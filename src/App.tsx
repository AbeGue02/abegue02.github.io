import portrait from './assets/me-portrait.jpeg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <span className="logo">Abraham Guerrero</span>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img className="portrait" src={portrait} alt="Portrait of Abraham Guerrero" />
          <h1>Hi, I'm Abraham Guerrero</h1>
          <p>Software Engineer</p>
          <a className="button" href="https://github.com/AbeGue02" target="_blank">
            View my GitHub
          </a>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I am a Software Engineer recently graduated from Southern New Hampshire University. I focus my skills on building high-performance mobile and web applications. Currently, I am building using React Native and Swift while exploring the novelty of AI engineering in these applications.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abraham Guerrero</p>
        <div className="social-links">
          <a href="https://github.com/AbeGue02" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abrahamdguerrero/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default App
