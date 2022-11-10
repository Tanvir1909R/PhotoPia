import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from 'react-toastify';
import { authContext } from "../../contexts/UserContext";
import Loader from "../../components/spinner/Loader";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import useTitle from '../../hooks/useTitle'
import "./myreview.scss";
import { Link } from "react-router-dom";

const MyReview = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle('myReview')
  const notify = ()=>{
    toast.info('Delete is successful', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:7000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user.email])

  const handleDelete = (id) => {
    fetch(`https://service-review-server.vercel.app/reviews/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const filterReviews = reviews.filter((review) => review._id !== id);
          setReviews(filterReviews);
          notify()
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="myReviewBanner">
        <div className="title">
          <h1>My review</h1>
        </div>
      </div>

      <div className="reviews">
        {reviews.length !== 0 ? (
          <Table striped bordered hover className="w-75">
            <thead>
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Message</th>
                <th>Rating</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, idx) => {
                return (
                  <tr key={review._id}>
                    <td>{idx + 1}</td>
                    <td>{review.serviceName}</td>
                    <td>{review.message}</td>
                    <td>{review.rating}</td>
                    <td>
                      <AiFillDelete
                        role="button"
                        className="fs-5 me-2"
                        onClick={() => handleDelete(review._id)}
                      />
                      <Link to={`/update-review/${review._id}`}>
                      <GrDocumentUpdate
                        className="fs-5"
                        title="Update"
                      />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p className="m-0">No reviews were added </p>
        )}
      </div>
      <ToastContainer/>
    </section>
  );
};

export default MyReview;
