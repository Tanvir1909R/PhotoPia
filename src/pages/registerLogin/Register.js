import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/UserContext';
import Loader from '../../components/spinner/Loader'
import useTitle from '../../hooks/useTitle'
import './common.scss'

const Register = () => {
  const { createUser, updateUser, loading } = useContext(authContext)
  const navigate = useNavigate()
  useTitle('Register')
  const updatePro = (name, url)=>{
    const user = {
      displayName:name,
      photoURL:url
    }
    updateUser( user)
    .then(res =>{})
    .catch(e => console.log(e.message))
  }

  const handleRegister = (e)=>{
    e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(res =>{
      updatePro(name, url)
      navigate('/')
      console.log(res.user);
    })
    .catch(e => console.log(e.message))
  }

  if(loading){
    return <Loader/>
  }

  return (
    <section>
      <div className="LoginBanner"></div>
      <div className="loginFrom">
        <div className="Container">
          <div className="formWrapper">
            <Form className="w-50" onSubmit={handleRegister}>
              <h1>Please Register</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>PhotoUrl</Form.Label>
                <Form.Control type="text" placeholder="Enter url" name="url" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" required />
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