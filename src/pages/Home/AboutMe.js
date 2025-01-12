import React from "react";
import prashant from "../../assets/prashant1.jpg";
import "../../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about__me" id="about_me">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">Get To Know Me More</h1>
          </div>
        </div>
        <div className="row d-flex flex-row align-items-center">
          <div className="col-md-4">
            <img src={prashant} alt="prashant_dhavale" className="img-fluid w-100" />
          </div>
          <div className="col-md-8 mt-md-0 mt-5">
            <h3 className="dark__green__color fw-bold">
              🚀 Frontend | Web | UI Developer 🚀
            </h3>

            <p className="gray__color mt-3">👋 Hi, I am <strong>Prashant Dhavale</strong>, a results-driven Frontend Developer with 9+ years of experience in designing and developing high-performance, scalable, and user-centric web applications. My expertise lies in React.js, Vue.js, TypeScript, and JavaScript (ES6+), where I craft seamless digital experiences that enhance usability and drive business growth.</p>
            <p className="gray__color mt-3">💻 With a strong background in UI/UX development, performance optimization, and Agile methodologies, I focus on writing clean, maintainable, and efficient code to create visually appealing and highly interactive web applications.</p>    
            <p className="gray__color mt-3">🔥 I am passionate about modern UI frameworks, design systems, and responsive web development, ensuring pixel-perfect interfaces with smooth interactions. My experience in leading teams, conducting code reviews, and collaborating with cross-functional teams makes me a strong contributor to any development environment.</p>
            <p className="gray__color mt-3">🔍 Looking for opportunities in UI development, frontend engineering, and web technologies. Let’s connect and collaborate on exciting projects!</p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
