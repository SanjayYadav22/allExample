import empowerment from "../../assets/Empowerment.jpg";
import choice from "../../assets/choice.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div>
        <div className="intro">
          <div className="intro-left">
            <h1>Empowering businesses with smarter IT solutions!</h1>
            <p>
              Innovate, optimize, and scale with our cutting-edge technologies
              and tailored strategies. Transform your challenges into
              opportunity lets shape the future of your business today.
            </p>
            <button>Explore Services</button>
          </div>
          <div className="intro-right">
            <img src={empowerment} alt="Empowerment" />
          </div>
        </div>
        <div className="intro">
          <div className="intro-left">
            <img src={choice} alt="Choice" />
          </div>
          <div className="intro-choice">
            <h1>Why Choose Us?</h1>
            <p>
              We deliver tailored IT solutions with cutting-edge technology and
              industry expertise. Trusted by businesses worldwide, our focus is
              your success, every step of the way.
            </p>
            <button>Discover the differnce</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
