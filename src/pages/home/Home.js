import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../components/service/Service";
import useTitle from "../../hooks/useTitle";
import Loader from '../../components/spinner/Loader'
import "./home.scss";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true)
  useTitle('Home')

  useEffect(()=>{
    setLoading(true)
    fetch(`https://service-review-server.vercel.app/services?limit=3`)
    .then(res => res.json())
    .then(data =>{
      setServices(data)
      setLoading(false);
    })
  },[])
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
        <div className="clientsSec">
          <div className="Container">
            <div className="clientsWrapper">
            <div className="title">
              <p>Clients</p>
              <h1>My Clients</h1>
            </div>
            <div className="clients">
              <img src="./img/client/1.png" alt="logo" />
              <img src="./img/client/2.png" alt="logo" />
              <img src="./img/client/3.png" alt="logo" />
              <img src="./img/client/4.png" alt="logo" />
              <img src="./img/client/5.png" alt="logo" />
              <img src="./img/client/6.png" alt="logo" />
              <img src="./img/client/7.png" alt="logo" />
              <img src="./img/client/8.png" alt="logo" />
              <img src="./img/client/9.png" alt="logo" />
              <img src="./img/client/10.png" alt="logo" />
            </div>
            </div>
          </div>
        </div>
        <div className="servicesSec">
          <div className="Container">
            <div className="servicesWrapper">
              <div className="title">
                <p>Services</p>
                <h1>My Services</h1>
              </div>
              <div className="services">
                {
                  loading ?
                  <Loader/>
                  :
                  services.map((service => <Service key={service._id} service={service} />))
                }
              </div>
            </div>
            <div className="seeAllBtn">
              <Link to='/services'>See All</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
