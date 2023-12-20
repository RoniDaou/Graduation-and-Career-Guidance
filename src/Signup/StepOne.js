import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const StepOne = ({ onNext, onChange, data }) => {
  const handleFormData = (fieldName) => (e) => {
    onChange(e);
  };

  const submitFormData = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px' }} className="mx-auto">
        <Card.Body>
          <h2 className="text-center mb-4">Sign-in</h2>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ border: data.error ? "2px solid red" : "" }}
                name="first_name"
                value={data.first_name}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("first_name")}
              />
              {data.error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: data.error ? "2px solid red" : "" }}
                name="last_name"
                value={data.last_name}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("last_name")}
              />
              {data.error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{
                  border: data.error ? "2px solid red" : "",
                }}
                name="email"
                value={data.email}
                type="text"
                placeholder="Email"
                onChange={handleFormData("email")}
              />
              {data.error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{
                  border: data.error ? "2px solid red" : "",
                }}
                name="password"
                value={data.password}
                type="password"
                placeholder="Password"
                onChange={handleFormData("password")}
              />
              {data.error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={() => window.location.href = 'http://localhost:3000/'}>
                Back
              </Button>
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
