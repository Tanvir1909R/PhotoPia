import React, { useEffect, useState } from "react";
import Service from "../../components/service/Service";
import Loader from '../../components/spinner/Loader'
import useTitle from '../../hooks/useTitle'
import "./services.scss";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle('services')
  useEffect(() => {
    setLoading(true);
    fetch(`https://service-review-server.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <section>
      <div className="serviceBanner">
        <div className="Container">
          <div className="title">
            <p>SERVICE</p>
            <h1>All Service</h1>
          </div>
        </div>
      </div>
      <div className="allServices">
        <div className="Container">
          <div className="allServiceWrapper">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
