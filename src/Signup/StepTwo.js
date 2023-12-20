import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const StepTwo = ({ onNext, onPrev, onChange, data }) => {
  const handleFormData = (fieldName) => (e) => {
    onChange(e);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px' }}>
        <h2 className="text-center mb-4">Sign up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              value={data.dateOfBirth}
              onChange={handleFormData('dateOfBirth')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                checked={data.gender === 'Male'}
                onChange={handleFormData('gender')}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                checked={data.gender === 'Female'}
                onChange={handleFormData('gender')}
              />
            </div>
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

export default StepTwo;
