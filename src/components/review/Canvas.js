import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import './review.scss'

function OffCanvasExample({ ...props }) {
  const { user } = useContext(authContext)
  const [show, setShow] = useState(false);
  const service = props.service;
  const reviews = props.reviews;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        See Reviews
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
          {
            user?.email ?
            <Link to={`/add-review/${service.name}`}>Give Review</Link>
            :
            <p className="m-0"><Link to='/login'><u>Login</u></Link> to add review</p>
          }
        </Offcanvas.Header>
        <Offcanvas.Body>
          {reviews.map((rev) => {
            return (
              <div key={rev._id} className="singleReview my-4">
                <div className="reviewImg">
                  <img src={rev.photo} alt="user" />
                  <p>{rev.name}</p>
                  <p>Rating: {rev.rating}</p>
                </div>
                <div className="reviewDesc">
                  <p>{rev.message}</p>
                </div>
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example({ service }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/reviews?name=${service.name}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [service.name]);

  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample
          key={idx}
          placement={placement}
          service={service}
          reviews={reviews}
        />
      ))}
    </>
  );
}

export default Example;
