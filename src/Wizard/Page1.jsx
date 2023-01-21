import React, { useState } from 'react';

function Page1({ onNext, formData }) {
  //* States
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  //* Changing States
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  //* Saves the data to formData and moves to the next page
  const handleNext = () => {
    if (username && surname && age) {
      onNext({ username, surname, age });
    }
  };

  const handleRangeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="page1">
      <form>
        <h1>Register</h1>
        <label>
          Username:
          <br />
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Surname:
          <br />
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </label>
        <br />
        <label>
          Age: (18-100)
          <br />
          <input type="number" value={age} onChange={handleAgeChange} />
          <input
            type="range"
            min="18"
            max="100"
            value={age}
            onChange={handleRangeChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Page1;
