import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from '../../hooks/useTitle'
import "./update.scss";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useTitle('updateReview')
  const notify = () => {
    toast.info("Update is successful", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const rating = form.rating.value;

    const UpdateReview = {
      message,
      rating,
    };

    fetch(`https://service-review-server.vercel.app/myreviews/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          notify();
          form.reset();
          setTimeout(()=>{
            navigate("/my-review");
          },2500)
        }
      });
  };

  return (
    <section>
      <div className="updateBanner">
        <div className="Container">
          <div className="title">
            <h1>Update Review</h1>
          </div>
        </div>
      </div>
      <div className="updateForm">
        <Form className="w-75" onSubmit={handleUpdate}>
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
      <ToastContainer />
    </section>
  );
};

export default Update;
