// AddData.js (React Component)
import React, { useState } from 'react';
import axios from 'axios';

const AddData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/data', { name, age })
      .then(response => {
        console.log('Data added:', response.data);
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddData;