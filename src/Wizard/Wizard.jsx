import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function Wizard() {
  //* Page Change State
  const [currentPage, setCurrentPage] = useState(1);

  //* Form Data for Summary Page
  const [formData, setFormData] = useState({});

  //* Changing Page Options
  const handleNext = (data, e) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  //* Getting countries from the backend
  const { data: countries, isLoading: countriesLoading } = useQuery(
    ['countries'],
    () =>
      fetch('http://localhost:5000/country/')
        .then((res) => res.json())
        .then((data) => data.map((country) => country.name))
  );

  //* After selecting a country, cities in that country are pulled from the backend
  const { data: cities } = useQuery(
    ['cities', formData.country],
    (_) =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            fetch(`http://localhost:5000/city?country=${formData.country}`)
              .then((res) => res.json())
              .then(resolve),
          2000
        )
      ),
    {
      enabled: formData.country !== undefined,
    }
  );

  //* After selecting a city, districts in that country are pulled from the backend
  const { data: districts } = useQuery(
    ['districts', formData.city],
    (_) =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            fetch(`http://localhost:5000/district?city=${formData.city}`)
              .then((res) => res.json())
              .then(resolve),
          2000
        )
      ),
    {
      enabled: formData.city !== undefined,
    }
  );

  const isLoading = countriesLoading;

  return (
    <div>
      {currentPage === 1 && <Page1 onNext={handleNext} isLoading={isLoading} />}
      {currentPage === 2 && (
        <Page2
          onNext={handleNext}
          onPrevious={handlePrevious}
          formData={formData}
          countries={countries}
          cities={cities}
          districts={districts}
          isLoading={isLoading}
          setFormData={setFormData}
        />
      )}
      {currentPage === 3 && (
        <Page3 onPrevious={handlePrevious} formData={formData} />
      )}
    </div>
  );
}

export default Wizard;
