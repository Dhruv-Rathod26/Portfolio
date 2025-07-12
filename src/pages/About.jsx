// About.jsx
import React from 'react';

export default function About() {
  return (
    <section data-aos="fade-up" className="bg-white p-4 rounded shadow-sm">
      <h2 className="fw-bold mb-4 text-center text-primary">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-12">
          <p className="fs-5 text-muted">
            Hi! I'm <strong className="text-dark">Dhruv Rathod</strong>, a highly motivated <span className="text-primary">MERN Stack Developer</span> based in Navsari, Gujarat. I specialize in developing responsive, efficient, and scalable web applications using modern JavaScript technologies.
          </p>
          <p className="fs-5 text-muted">
            From building weather apps with real-time APIs to managing complex data flows in POS systems and cloning large-scale backends like Airbnb, I have built a strong foundation in full-stack development. My mission is to deliver clean, user-focused applications that solve real-world problems.
          </p>
          <p className="fs-5 text-muted">
            I'm a fast learner, an effective team player, and constantly exploring the latest in tech. I enjoy mentoring, debugging, and improving the developer experience.
          </p>
          <div className="mt-5">
            <h4 className="fw-semibold mb-3 text-primary border-bottom pb-1">🎓 Education</h4>
            <ul className="list-unstyled text-muted">
              <li><strong>Degree:</strong> BE Computer Engineer</li>
              <li><strong>Institute:</strong> GIDC Degree Engineer College</li>
              <li><strong>University:</strong> Gujarat Technological University</li>
              <li><strong>Year of Passing:</strong> 2025</li>
              <li><strong>CGPA:</strong> 7.94</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="fw-semibold mb-3 text-primary border-bottom pb-1">📍 Address</h4>
            <p className="text-muted">Jalalpor, Navsari, Gujarat, India</p>
          </div>

          <div className="mt-4">
            <h4 className="fw-semibold mb-3 text-primary border-bottom pb-1">📞 Contact Information</h4>
            <ul className="list-unstyled text-muted">
              <li><strong>Phone:</strong> +91 70692 21320</li>
              <li><strong>Email:</strong> dhruvrathod0706@gmail.com</li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/dhruv-rathod-b78398321" target="_blank" rel="noopener noreferrer" style={{color:"black"}}>linkedin.com/in/dhruv</a>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="fw-semibold mb-4 text-center text-secondary">🧰 Tech Stack & Tools</h4>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {[
                "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Git", "GitHub",
                "Postman",  "MySQL", "RESTful APIs", "java", "Tailwind CSS", "EJS", "C Language"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-gradient bg-primary text-light px-3 py-2 m-1 shadow-sm"
                  style={{ borderRadius: '20px', fontSize: '0.9rem' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
