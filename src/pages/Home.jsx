// Home.jsx
import React from 'react';
import 'animate.css';

export default function Home() {
  return (
    <div className="text-center animate__animated animate__fadeIn">
      <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown animate__delay-1s">
        Welcome to My Portfolio
      </h1>
      <p className="lead animate__animated animate__fadeInUp animate__delay-2s">
        Hi, I'm <span className="fw-bold">Dhruv Rathod</span>, a passionate MERN Stack Developer.
        I design and build clean, scalable, full-stack web applications.
      </p>
      <div className="mt-5 animate__animated animate__zoomIn animate__delay-3s">
        <a href="#projects" className="btn btn-primary btn-lg px-4 py-2">
          View My Work
        </a>
      </div>
    </div>
  );
}
