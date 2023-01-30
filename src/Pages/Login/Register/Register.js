import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../useTitle";

const Register = () => {
  useTitle("Register");
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        updateUserProfile(name);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUser(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger">
        {error && <p>Something went wrong!</p>}
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAccepted}
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms"> Terms and condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
