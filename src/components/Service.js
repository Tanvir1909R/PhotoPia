import React from "react";

const Service = ({service}) => {
    const { name, thumb, price, rating, description } = service
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
        <button>View more</button>
      </div>
    </div>
  );
};

export default Service;
