import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const StepFour = ({ onPrev, onSubmit, onChange, data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px' }}>
        <h2 className="text-center mb-4">Sign up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Major</Form.Label>
            <Form.Control
              type="text"
              placeholder="Major"
              name="major"
              value={data.major}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year of Study</Form.Label>
            <Form.Control
              type="number"
              placeholder="Year of Study"
              name="year_of_study"
              value={data.year_of_study}
              onChange={onChange}
            />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="primary" onClick={onPrev}>
              Previous
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default StepFour;
