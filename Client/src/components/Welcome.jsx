// src/Welcome.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Welcome.css';

const Welcome = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleYearSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSemesterSubmit = (e) => {
    e.preventDefault();
    navigate('/books', { state: { studyYear: year, semester } });
  };

  return (
    <div className="welcome">
      {step === 1 && (
        <div>
          <h1>Welcome to Our Bookstore!</h1>
          <p>Please select your university study year to personalize your experience.</p>
          <form onSubmit={handleYearSubmit}>
            <select value={year} onChange={(e) => setYear(e.target.value)} required>
              <option value="" disabled>Select your study year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            <button type="submit" className='welcome-button'>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1>Welcome to Our Bookstore!</h1>
          <p>Please select your semester.</p>
          <form onSubmit={handleSemesterSubmit}>
            <select value={semester} onChange={(e) => setSemester(e.target.value)} required>
              <option value="" disabled>Select your semester</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
            </select>
            <button type="submit" className='welcome-button'>Continue</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Welcome;
