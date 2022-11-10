import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import "./add.scss";

const AddReview = () => {
  const { user } = useContext(authContext);
  const { email } = user;
  const { name } = useParams();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const rating = form.rating.value;

    const myReview = {
      serviceName: name,
      name: user.displayName,
      email,
      message,
      rating,
    };
    const serviceReview = {
      serviceName: name,
      photo: user.photoURL,
      name: user.displayName,
      email,
      message,
      rating,
    };
    fetch("https://service-review-server.vercel.app/myreviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => {});

    fetch("https://service-review-server.vercel.app/servicereviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
      });
  };

  return (
    <section>
      <div className="addBanner">
        <div className="Container">
          <div className="title">
            <h1>Add Review</h1>
          </div>
        </div>
      </div>
      <div className="addForm">
        <Form className="w-50" onSubmit={handleAdd}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter message"
              name="message"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rating"
              name="rating"
              required
            />
          </Form.Group>
          <Button type="submit" className="submitBtn">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddReview;
