import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useTitle from '../../hooks/useTitle'
import './add.scss'

const AddService = () => {

  useTitle('addService')

    const notify=()=>{
        toast.success('Service added is successful', {
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
    const handleAdd = (e)=>{
        e.preventDefault()
        const form = e.target;
    
        const name = form.name.value;
        const urlThumb = form.urlThumb.value;
        const urlDetails = form.urlDetails.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newService = {
            name,
            price,
            rating,
            thumb:urlThumb,
            detailImg:urlDetails,
            description,
        }

        fetch(`https://service-review-server.vercel.app/services`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){;
                notify()
                form.reset()
            }
        })
      }
  return (
    <section>
        <div className="addBanner">
            <div className="Container">
                <div className="title">
                    <h1>Add Service</h1>
                </div>
            </div>
        </div>
        <div className="addForm">
        <Form className="w-50" onSubmit={handleAdd}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>PhotoUrl Thumb</Form.Label>
                <Form.Control type="text" placeholder="Enter url" name="urlThumb" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>PhotoUrl for Details</Form.Label>
                <Form.Control type="text" placeholder="Enter url" name="urlDetails" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" name="price" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" placeholder="Rating" name="rating" required />
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' type="text" placeholder="Description" name="description" required />
              </Form.Group>

              <Button type="submit" className="submitBtn">
                Submit
              </Button>
            </Form>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default AddService