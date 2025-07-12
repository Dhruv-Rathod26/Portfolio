  // App.jsx
  import { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import './index.css';
  import Home from './pages/Home';
  import About from './pages/About';
  import Projects from './pages/Projects';
  import Contact from './pages/Contact';

  export default function App() {
    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

    return (
      <div style={{ background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)' }}>
        <header
        className="shadow sticky-top d-flex align-items-center"
        style={{ background: 'linear-gradient(to right, #4a00e0, #8e2de2)', height: '50px' }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="fs-6 fw-bold m-0 text-white">Dhruv Rathod</h1>
          <nav>
  <a href="#home" >Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>
        </div>
      </header>


        <main>
          <section id="home" className="py-5">
            <div className="container">
              <Home />
            </div>
          </section>

          <section id="about" className="py-5 bg-white">
            <div className="container">
              <About />
            </div>
          </section>

          <section id="projects" className="py-5" style={{ background: 'linear-gradient(to right, #fdfbfb, #ebedee)' }}>
            <div className="container">
              <Projects />
            </div>
          </section>

          <section id="contact" className="py-5 bg-white">
            <div className="container">
              <Contact />
            </div>
          </section>
        </main>

        <footer className="text-white text-center py-4 mt-5" style={{ background: '#141e30', backgroundImage: 'linear-gradient(to right, #243b55, #141e30)' }}>
          <p className="mb-1">© {new Date().getFullYear()} Dhruv Rathod — MERN Stack Developer</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/Dhruv-Rathod26" target="_blank" className="text-white text-decoration-none">GitHub</a>
             <a href="https://www.linkedin.com/in/dhruv-rathod-b78398321" target="_blank" className="text-white text-decoration-none">LinkedIn</a>
          </div>
        </footer>
      </div>
    );
  }

  
