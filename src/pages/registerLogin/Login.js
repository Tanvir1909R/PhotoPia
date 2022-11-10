import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import Loader from "../../components/spinner/Loader";
import useTitle from "../../hooks/useTitle";
import "./common.scss";

const Login = () => {
  const { loading, providerLogin, logIn } = useContext(authContext);
  const provider = new GoogleAuthProvider();
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loader />;
  }

  const handleGoogleLogin = () => {
    providerLogin(provider).then((res) => {
      const currentUser = {
        email: res.user.email,
      };
      fetch("http://localhost:7000/jwt", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
        });
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        const currentUser = {
          email: res.user.email,
        };
        console.log(currentUser);
        // get jwt
        fetch("http://localhost:7000/jwt", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
            form.reset();
          });
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <section>
      <div className="LoginBanner"></div>
      <div className="loginFrom">
        <div className="Container">
          <div className="formWrapper">
            <Form className="w-50" onSubmit={handleLogin}>
              <h1>Please Login</h1>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Button type="submit" className="submitBtn">
                Submit
              </Button>
              <div className="googleLogin" onClick={handleGoogleLogin}>
                <p>
                  Login With Google <FcGoogle />
                </p>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <Link className="text-danger" to="/register">
                  Register
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
