import React from "react";
import { Link } from "react-router-dom";
import './service.scss'

const Service = ({service}) => {
    const { _id, name, thumb, price, rating, description } = service
  return (
    <div className="service">
      <img src={thumb} />
      <div className="serviceText">
        <h1>{name}</h1>
        <small>Price: ${[price]}</small>
        <small>Rating: {rating}</small>
        <p>
            {description.length >= 100 && description.slice(0, 80) + '...'}
        </p>
        <Link to={`/service/${_id}`} >View more</Link> 
      </div>
    </div>
  );
};

export default Service;
