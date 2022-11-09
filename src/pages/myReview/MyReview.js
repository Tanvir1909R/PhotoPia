import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { authContext } from "../../contexts/UserContext";
import Loader from '../../components/spinner/Loader'
import "./myreview.scss";

const MyReview = () => {
    const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:7000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false)
      });
  }, []);

  if(loading){
    return <Loader/>
  }

  return (
    <section>
      <div className="myReviewBanner">
        <div className="title">
          <h1>My review</h1>
        </div>
      </div>

      <div className="reviews">
        <Table striped bordered hover className="w-50">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Message</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, idx) => {

              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{review.serviceName}</td>
                  <td>{review.message}</td>
                  <td>{review.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default MyReview;
