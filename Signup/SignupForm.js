import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './StepOne';
import Step2 from './StepTwo';
import Step3 from './StepThree';
import Step4 from './StepFour';
import { UserContext } from "../App";

const SignupForm = () => {

  const{state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phone: '',
    major: '',
    year_of_study: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    
    try {
      const response = await fetch('http://localhost:8080/student/signup/stepone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        const data = await response.json();
          setStep(step + 1);
        
      } else {
        console.log('Email is already taken. Please choose a different email.');
      }
    } catch (error) {
      console.error('Error during email availability check:', error);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      // Send formData to the backend
      const response = await fetch('http://localhost:8080/student/signup/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        dispatch({type: "USER" , payload: true})
        navigate('/Home');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <Step1 onNext={handleNext} onChange={handleChange} data={formData} />
      )}
      {step === 2 && (
        <Step2 onNext={handleNext} onPrev={handlePrev} onChange={handleChange} data={formData} />
      )}
      {step === 3 && (
        <Step3 onNext={handleNext} onPrev={handlePrev} onChange={handleChange} data={formData} />
      )}
      {step === 4 && (
        <Step4 onPrev={handlePrev} onSubmit={handleSubmit} onChange={handleChange} data={formData} />
      )}
    </div>
  );
};

export default SignupForm;
