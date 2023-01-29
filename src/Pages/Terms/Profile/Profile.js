import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          defaultValue={user?.email}
          readOnly
          placeholder="Enter your email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
