import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <>
      <section>
        <div className="banner">
          <div className="Container">
            <div className="bannerText">
              <h1>PhotoPia Photography Service</h1>
              <p>I am here for your quality photography services</p>
              <button>Hire</button>
            </div>
          </div>
        </div>
        <div className="aboutSec">
          <div className="Container">
            <div className="aboutWrapper">
              <div className="aboutText">
                <div className="title">
                  <p>WELCOME</p>
                  <h1>About PhotoPia</h1>
                </div>
                <p className="aboutPera">
                  All kinds of photography I make for the client. the other
                  services I provide include video editing, video production,
                  timelapse, etc. More information down below
                </p>
                <div className="workInfo">
                  <div>
                    <h2>100+</h2>
                    <p>Successful Project</p>
                  </div>
                  <div>
                    <h2>500+</h2>
                    <p>World Wide Client</p>
                  </div>
                  <div>
                    <h2>8+</h2>
                    <p>Years Experience</p>
                  </div>
                </div>
                <button>Learn more</button>
              </div>
              <div className="aboutImg">
                <img src="./img/about-1.jpg" alt="drone with man" />
                <img src="./img/about-2.jpg" alt="drone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
