import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/spinner/Loader";
import "./detail.scss";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://service-review-server.vercel.app/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="SingleServiceBanner">
        <div className="Container">
          <div className="title">
            <p>SERVICE</p>
            <h1>{service.name}</h1>
          </div>
        </div>
      </div>
      <div className="serviceDetail">
        <div className="Container">
          <div className="serviceDetailWrapper">
            <div className="serviceImg">
              <img src={service.detailImg} alt={service.name} />
            </div>
            <div className="serviceDesc">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
