import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/Hooks";

const Login = () => {
  const { googleSignIn, userLogin, githubSignIn, setLoading } =
    useContext(AuthContext);
  const provier = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  let location = useLocation();
  let navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useTitle('Login')

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(provier)
      .then((result) => {
        // const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  const handleManualSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        // const user = result.user;
        form.reset();
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "400px",
          marginTop: "150px",
        }}
      >
        <Form className="align-items-center" onSubmit={handleManualSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Text className="text-muted  mb-3">
              <p>
                Not an user yet? <Link to="/registration">Register</Link>
              </p>
            </Form.Text>
          </Form.Group>
          <Button
            className="mt-3"
            style={{ width: "400px" }}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
        <div className="mt-5">
          <ListGroup as="ul">
            <Button
              onClick={handleGoogleSignIn}
              variant="light"
              className="mb-2"
            >
              <FcGoogle className="me-3"></FcGoogle>
              Continue with Google
            </Button>
            <Button onClick={handleGithubSignIn} variant="light">
              <FaGithub className="me-3"></FaGithub>
              Continue with Github
            </Button>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Login;
