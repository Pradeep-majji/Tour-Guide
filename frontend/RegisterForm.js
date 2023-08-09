import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
    
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUserId">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="Enter user ID" />
      </Form.Group>

      <Form.Group controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" />
      </Form.Group>

      <Form.Group controlId="formUserAddress">
        <Form.Label>User Address</Form.Label>
        <Form.Control type="text" placeholder="Enter user address" />
      </Form.Group>

      <Form.Group controlId="formNumOfPeople">
        <Form.Label>Number of People</Form.Label>
        <Form.Control type="number" placeholder="Enter number of people" />
      </Form.Group>

      <Form.Group controlId="formTravelPlace">
        <Form.Label>Travel Place</Form.Label>
        <Form.Control type="text" placeholder="Enter travel place" />
      </Form.Group>

      <Form.Group controlId="formNumDays">
        <Form.Label>Number of Days</Form.Label>
        <Form.Control type="number" placeholder="Enter number of days" />
      </Form.Group>

      <Form.Group controlId="formGroupId">
        <Form.Label>Group ID</Form.Label>
        <Form.Control type="text" placeholder="Enter group ID" />
      </Form.Group>

      <Form.Group controlId="formUserPhone">
        <Form.Label>User Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter user phone" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </>
  );
};

export default RegisterForm;
