import { useEffect, useState } from "react";

function GetCurrencyData({ currency , }) {
  let [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/5fb9997f705abff4896c43dc/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.
            conversion_rates
            );
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, [currency]);

  return apiData;
}

export default GetCurrencyData;
