import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const StepThree = ({ onNext, onPrev, onChange, data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px' }}>
        <h2 className="text-center mb-4">Sign up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              value={data.address}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={onChange}
            />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="primary" onClick={onPrev}>
              Previous
            </Button>
            <Button variant="primary" onClick={onNext}>
              Next
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default StepThree;
