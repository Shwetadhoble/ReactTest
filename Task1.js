import React, { useState } from 'react';
import './Task1.css';

const Task1= () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
  
    if (currentStep === 1 && (!firstName || !lastName)) {
      alert('Please fill all fields in Step 1');
      return;
    }
    if (currentStep === 2 && (!email || !phone)) {
      alert('Please fill all fields in Step 2');
      return;
    }
    if (currentStep === 3 && (!address || !city || !zipcode)) {
      alert('Please fill all fields in Step 3');
      return;
    }

    
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    
    console.log({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipcode
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setZipcode('');
    setCurrentStep(1);
  };

  return (
    <div className="multi-step-form-container">
      <h2>Multi-Step Form</h2>
      {currentStep === 1 && (
        <div className="step">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      )}
      {currentStep === 2 && (
        <div className="step">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      )}
      {currentStep === 3 && (
        <div className="step">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      )}
      <div className="buttons">
        {currentStep > 1 && (
          <button className="previous" onClick={handlePrevious}>Previous</button>
        )}
        {currentStep < 3 ? (
          <button className="next" onClick={handleNext}>Next</button>
        ) : (
          <button className="next" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Task1;