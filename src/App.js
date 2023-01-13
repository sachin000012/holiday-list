import React from 'react';
import './App.css';


function App() {
  const cities = [
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" }
  ];

  const filteredCities = cities.filter(city => city.country === "India");

  return (
    <div>
      <h2>Holiday Cities List</h2>
      <ol>
        {filteredCities.map((city, index) => (
          <li key={`location${index + 1}`}>{city.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
