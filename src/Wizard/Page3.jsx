import React from 'react';

function Page3({ onPrevious, formData }) {
  //* When click the confirm button, it shows an alert
  const finish = () => {
    alert('Welcome');
  };

  //* Showing the data from formData state
  return (
    <div className="page3">
      <h1>Summary</h1>
      <div className="page3-item">
        <p>Username:</p>
        <p> {formData.username}</p>
      </div>
      <div className="page3-item">
        <p>Surname:</p>
        <p> {formData.surname}</p>
      </div>
      <div className="page3-item">
        <p>Age:</p>
        <p> {formData.age}</p>
      </div>
      <div className="page3-item">
        <p>Country:</p>
        <p>{formData.country}</p>
      </div>
      <div className="page3-item">
        <p>City: </p>
        <p>{formData.city}</p>
      </div>
      <div className="page3-item">
        <p>District: </p>
        <p>{formData.district}</p>
      </div>
      <div className="page3-item">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={finish}>Confirm</button>
      </div>
    </div>
  );
}

export default Page3;
