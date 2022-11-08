import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import Loader from '../../components/spinner/Loader'
import "./common.scss";

const Login = () => {
    const { loading, providerLogin } = useContext(authContext);
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = ()=>{
        providerLogin(provider)
        .then(res => {
            console.log(res.user);
        })
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
            <Form className="w-50">
              <h1>Please Login</h1>

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
              <div className="googleLogin" onClick={handleGoogleLogin}>
                <p>Login With Google <FcGoogle /></p>
              </div>
              <p className="text-center">Don't have an account? <Link className="text-danger" to='/register'>Register</Link></p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
