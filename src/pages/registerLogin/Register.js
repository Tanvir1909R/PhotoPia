import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import './common.scss'

const Register = () => {
  return (
    <section>
      <div className="LoginBanner"></div>
      <div className="loginFrom">
        <div className="Container">
          <div className="formWrapper">
            <Form className="w-50">
              <h1>Please Register</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>PhotoUrl</Form.Label>
                <Form.Control type="text" placeholder="Enter url" name="url" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>
                

              <Button type="submit" className="submitBtn">
                Submit
              </Button>
              <p className="text-center">Have an account? <Link className="text-danger" to='/login'>Login</Link></p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register