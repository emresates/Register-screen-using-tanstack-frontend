import React, { useState } from 'react';

function Page2({
  onNext,
  onPrevious,
  formData,
  countries,
  cities,
  districts,
  isLoading,
  setFormData,
}) {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  //* After the country is selected, it sends the data to formData
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setCity('');
    setDistrict('');
    setFormData({ ...formData, country: event.target.value });
  };

  //* After the city is selected, it sends the data to formData
  const handleCityChange = (event) => {
    setCity(event.target.value);
    setDistrict('');
    setFormData({ ...formData, city: event.target.value });
  };

  //* After the district is selected, it sets the data
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleNext = () => {
    if (country && city && district) {
      onNext({ country, city, district });
    }
  };

  return (
    <div className="page2">
      <form>
        <h1>Where Do You Live?</h1>
        <label>
          Country:
          <select value={country} onChange={handleCountryChange}>
            <option value="" disabled>
              Select a country
            </option>
            {countries &&
              countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c}
                </option>
              ))}
          </select>
        </label>
        <br />
        <label>
          City:
          <select
            value={city}
            onChange={handleCityChange}
            disabled={isLoading || !country}
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities &&
              cities.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </label>
        <br />
        <label>
          District:
          <select
            value={district}
            onChange={handleDistrictChange}
            disabled={isLoading || !city}
          >
            <option value="" disabled>
              Select a district
            </option>
            {districts &&
              districts.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
          </select>
        </label>
        <br />
        <div>
          <button onClick={onPrevious}>Previous</button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isLoading || !country || !city || !district}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page2;
