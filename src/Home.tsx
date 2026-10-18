import portrait from './assets/me-portrait.jpeg'

function Home() {
  return (
    <>
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
            Driven by a background in software engineering and a Bachelor of Science in Computer Science from Southern New Hampshire University, I am a full-stack developer specializing in the MERN stack and high-performance React Native mobile applications. My journey through the SNHU program and my professional experiences have shaped my technical goals and values, preparing me to deliver scalable, user-centric solutions.
          </p>
          <p>
            Throughout my career, I have prioritized meeting project requirements to meet stakeholders’ and instructors’ expectations to translate business needs into a technical solution. For example, when developing the custom e-commerce platform and React Native application for Best Perfumes Miami and managing their retail infrastructure migration at the same time, clear communication was essential to deliver the final products aligned with business objectives. Similarly, collaborating in a team environment has been vital to my growth; participating as a system designer and front-end engineer during a sustainability Hackathon to build the "WasteWatcher" application taught me how to organize software development with a diverse team to meet deadlines.
          </p>
          <p>
            Technically, my coursework and hands-on projects have displayed my expertise across the core pillars of computer science. I use software engineering and database principles to build full-stack applications, using tools like MongoDB and Express.js. I also apply advanced data structures and algorithms to optimize the performance of projects, such as implementing instant search functionalities that practically eliminate load times. All the while making sure there is a strict security policy. I approach development with a security mindset to make sure data privacy and the prevention of vulnerabilities are never an issue.
          </p>
          <p>
            The artifacts presented in this ePortfolio are a showcase of my growth across these topics
          </p>
        </section>
    </>
  )
}

export default Home
