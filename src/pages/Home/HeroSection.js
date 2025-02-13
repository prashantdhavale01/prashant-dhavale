import { Link } from "react-router-dom";
import "../../styles/HeroSection.scss";
import resume from "../../assets/PrashantDhavale_9_Years_Experience_Immediate_Joiner.pdf";

const HeroSection = () => {
  return (
    <section className="hero__section" id="hello">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 d-flex flex-column justify-content-center column">
            <div className="first">
              {" "}
              <p className="lightGray__color mb-0">Hi all. I am</p>
              <h1 className="text-white fw-bold">Prashant Dhavale</h1>
              <h3 className="blue__color mt-3">Sr. Software Engineer</h3>
            </div>

            <div className="second">
            <p className="mt-5 gray__color">&#47;&#47; you can also download my resume</p>
              <p className="gray__color">
                <span className="blue__color fw-bold">const</span>{" "}
                <span className="green__color fw-bold">resume</span> =
                <span className="orange__color fw-bold">
                  <Link
                    to={resume}
                    target="_blank"
                    className="orange__color mx-2 text-decoration-none fw-bold"
                  >
                    "download_resume"
                  </Link>
                </span>
              </p>
              <p className="gray__color mt-5">&#47;&#47; Turning Code Into Creative Solutions</p>
              <p className="gray__color">&#47;&#47; you can see it on my Github page</p>
              <p className="gray__color">
                <span className="blue__color fw-bold">const</span>{" "}
                <span className="green__color fw-bold">githubLink</span> =
                <a
                  href="https://github.com/prashantdhavale01"
                  className="orange__color mx-2 text-decoration-none fw-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "https://github.com/prashantdhavale01"
                </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
