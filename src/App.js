import React, { useState, useEffect } from "react";
import './Componentes/Converso.css'
import Options from "./Componentes/Options";

function App() {
  const [currencyoptions, setCurrencyOptions] = useState([]);
  
  const BASE_URL = 'https://free.currconv.com/api/v7/currencies?apiKey=a981e09f9fa864f3d62f'
  
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCurrencyOptions([...Object.values(data.results).sort()])
      })
  }, [])
  
  return (      
    <div className="equipe-cards">
      <div className="card">
        <h2>Currency Converter</h2>        
        <Options currencyoptions={currencyoptions}/>       
      </div>
    </div>    
  );
}

export default App;
