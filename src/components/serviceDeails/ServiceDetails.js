import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Loader from "../../components/spinner/Loader";
import Canvas from '../review/Canvas'
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
  }, [id]);

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
              <PhotoProvider>
                <PhotoView src={service.detailImg}>
                  <img role='button' src={service.detailImg} alt={service.name} />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="serviceDesc">
              <h1>{service.name}</h1>
              <p>Price: ${service.price}</p>
              <p>Rating: {service.rating}</p>
              <p>{service.description}</p>

              <Canvas service={service}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
