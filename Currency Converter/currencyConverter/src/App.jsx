import { useEffect, useState } from 'react';
import GetCurrencyData from './Api/CurrencyApi';
import './App.css';
import InputField from './Components/InputField';

function App() {
  const [currencyData, setCurrencyData] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('pkr');  // this will store selected currency from InputField

  const fetchedCurrencyData = GetCurrencyData({ currency: selectedCurrency });

  useEffect(() => {
    if (Object.keys(fetchedCurrencyData).length > 0) {
      setCurrencyData(fetchedCurrencyData);
      console.log('Currency Data:', fetchedCurrencyData);
    }
  }, [fetchedCurrencyData]);

  let countryName = Object.keys(fetchedCurrencyData); 
  let priceRate = Object.values(fetchedCurrencyData);

  // Function to receive selected currency from InputField
  const handleSelectedCurrency = (selected) => {
    setSelectedCurrency(selected); 
    console.log('Selected currency from InputField:', selected);
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <InputField
        countryName={countryName}
        fetchedCurrencyData={fetchedCurrencyData}
        sendDataToApp={handleSelectedCurrency} 
      />
    </>
  );
}

export default App;
