import React, { useState } from 'react';

const NumberInputComponent = () => {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const handleInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setInputValue(isNaN(newValue) ? 0 : newValue);
  };
  const handleOutputChange = (inputValue) => {
    fetch(
        `https://u1wh9oseub.execute-api.eu-west-2.amazonaws.com/default/devOps-gatsby?number=${inputValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          setOutputValue(parseFloat(data));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }
  return (
    <div>
      <h1>Number Input Example</h1>
      <form onSubmit={(e) => {
  e.preventDefault();
  handleOutputChange(inputValue);
}}>
  <input
    type="number"
    placeholder="Enter a number"
    value={inputValue}
    onChange={handleInputChange}
  />
  <input type="submit" value="Submit" />
</form>
      <p>Squared number: {outputValue}</p>
    </div>
  );
};

export default NumberInputComponent;