// Projects.jsx
import { useState } from 'react';

const projectList = [
  {
    title: 'Weather App',
    short: 'Live weather with React & API integration.',
    full: 'This project fetches real-time weather data from an API and displays temperature, humidity, and forecast details. Built with React, it has a responsive layout and error handling for invalid inputs.',
    link: 'https://react-weather-app-q42j.onrender.com/',
    image: '/images/weather-app.jpg'
  },
  {
    title: 'Airbnb Clone (Backend)',
    short: 'Clone of Airbnb backend using Node & MongoDB.',
    full: 'This clone uses Node.js, Express.js, and MongoDB to create RESTful APIs for user authentication, property listings, bookings, and more.',
    link: 'https://my-backend-project-tvxz.onrender.com/',
    image: '/images/airbnb-backend.jpg'
  },
  {
    title: 'POS System',
    short: 'React-based POS with MongoDB integration.',
    full: 'A full Point-of-Sale system using React frontend and Express/MongoDB backend with category filtering, cart system, and dynamic billing.',
    image: '/images/pos-system.jpg'
  },
  {
    title: 'Women Safety App',
    short: 'HTML/CSS/JS + PHP app for emergency contact.',
    full: 'This safety app allows women to send alerts with location to emergency contacts. Backend built with PHP and MySQL. Deployed using 000WebHost.',
    image: '/images/women-safety.jpg'
  },
  {
    title: 'Movie Recommendation Page',
    short: 'React-based frontend app listing recommended movies.',
    full: 'User-friendly page using React to display cards of top movies by category with filter buttons and responsive layout.',
    image: '/images/movie-app.jpg'
  }
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div data-aos="fade-up">
      <h2 className="fw-bold mb-4 text-center text-primary">My Projects</h2>
      <div className="d-flex flex-column gap-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`p-4 bg-white rounded shadow-sm position-relative overflow-hidden text-white project-box animate__animated ${expanded === index ? 'animate__fadeInUp' : ''}`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h4 className="fw-bold">{project.title}</h4>
              <p className="mb-2">{project.short}</p>

              {expanded === index && (
                <div className="mt-3">
                  <p>{project.full}</p>
                  {project.link?.startsWith('http') && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light mt-2"
                    >
                      View Live
                    </a>
                  )}
                </div>
              )}

              <button
                className="btn btn-sm btn-light mt-3"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? 'Hide' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
