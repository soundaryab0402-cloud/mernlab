import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
  ];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fruit List Filter</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;