import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { authContext } from "../../contexts/UserContext";
import Loader from "../../components/spinner/Loader";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import "./myreview.scss";

const MyReview = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://service-review-server.vercel.app/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`https://service-review-server.vercel.app/reviews/${id}`,{
        method:'delete'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
            const filterReviews = reviews.filter(review => review._id !== id);
            setReviews(filterReviews)
        }
    })
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
        <Table striped bordered hover className="w-50">
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
                      onClick={()=> handleDelete(review._id)}
                    />
                    <GrDocumentUpdate
                      role="button"
                      className="fs-5"
                      title="Update"
                    />
                  </td>
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
