import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function removeCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <p>List of Cars</p>
      <ul>
        {cars.map((car, index) => (
          <li ket={index} onClick={() => removeCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" onChange={handleYearChange} value={carYear} />
      <br />
      <input
        type="text"
        placeholder="Enter Car Make.."
        value={carMake}
        onChange={handleMakeChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Car Model.."
        value={carModel}
        onChange={handleModelChange}
      />{" "}
      <br />
      <button onClick={addCar}>Add</button>
    </div>
  );
}

export default MyComponent;
