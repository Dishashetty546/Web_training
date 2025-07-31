import React, { useState, useEffect } from 'react';

const citiesList = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];

const FormStorage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [cities, setCities] = useState([]);
  const [phone, setPhone] = useState('');


  useEffect(() => {
    const data = sessionStorage.getItem('formData');
    if (data) {
      const { name, email, gender, cities, phone } = JSON.parse(data);
      setName(name || '');
      setEmail(email || '');
      setGender(gender || '');
      setCities(cities || []);
      setPhone(phone || '');
    }
  }, []);


  useEffect(() => {
    sessionStorage.setItem(
      'formData',
      JSON.stringify({ name, email, gender, cities, phone })
    );
  }, [name, email, gender, cities, phone]);

  const handleCityChange = (city) => {
    setCities((prev) =>
      prev.includes(city)
        ? prev.filter((c) => c !== city)
        : [...prev, city]
    );
  };

  return (
    <div>
      <h1>FORM STORAGE</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </label>
          <label>
            <input type="text" name="gender" value="male" onChange={()=> setGender('female')}/>
            Female
          </label>
        </div>
        <div>
          Cities:
          {citiesList.map((city) => (
            <label key={city}>
              <input
                type="checkbox"
                value={city}
                checked={cities.includes(city)}
                onChange={() => handleCityChange(city)}
              />
              {city}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FormStorage;
