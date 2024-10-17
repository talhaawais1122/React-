import React, { useState } from "react";
import './InputField.css';

function InputField({ countryName, fetchedCurrencyData, sendDataToApp }) { 
  const [num, setNum] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedRate, setSelectedRate] = useState(0);
  const [convertCurrency, setConvertCurrency] = useState("");
  const [convertRate, setConvertRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleChange = (e) => {
    let userAmount = Number(e.target.value);
    setNum(userAmount);
  };

  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    setSelectedCurrency(selected);
    setSelectedRate(fetchedCurrencyData[selected]);

    // Send selected currency to App
    sendDataToApp(selected);
  };

  const handleCurrencyChange1 = (e) => {
    const selected = e.target.value;
    setConvertCurrency(selected);
    setConvertRate(fetchedCurrencyData[selected]);
  };

  const calculateConvertedAmount = () => {
    if (selectedRate && convertRate) {
      const convertedAmountValue = (num / selectedRate) * convertRate;
      setConvertedAmount(convertedAmountValue);
    }
  };

  return (
    <div className="input-container">
      <label htmlFor="myInput">Amount:</label>
      <input
        onChange={handleChange}
        type="number"
        id="myInput"
        name="myInput"
        placeholder="Enter The Amount"
        required
      />
      <div className="currency-row">
        <div className="currency-select-container">
          <label htmlFor="currency-select">Select Currency:</label>
          <select id="currency-select" onChange={handleCurrencyChange}>
            <option value="">--Please choose an option--</option>
            {countryName.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="currency-select-container">
          <label htmlFor="currency-convert">Convert Into:</label>
          <select id="currency-convert" onChange={handleCurrencyChange1}>
            <option value="">--Please choose an option--</option>
            {countryName.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>



      <button onClick={calculateConvertedAmount}>Convert Amount</button>

      <p>Converted Amount: {convertedAmount ? convertedAmount.toFixed(2) : "N/A"}</p>
    </div>
  );
}

export default InputField;
