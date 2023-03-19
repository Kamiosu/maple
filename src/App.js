import logo from './logo.svg';
import './App.css';
import Frontpage from './Frontpage';
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';
import LocData from "./locations.csv"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Address/>
    </div>
  );
}


function Address () { 
  const [data, setData] = useState([]); 
  useEffect(() => { 
    Papa.parse(LocData, {  
      download: true, 
      delimiter:',', 
      complete: (results) => { 
        for (let i = 1; i < results.data.length; i++) {
          let result = results.data[i][1];
          let addressArray = result.split("\n"); // split the address by newline character
          let street = addressArray[0]; // first value is street address
          let cityProvincePostal = addressArray[1]; // second value is city, province, and postal code
          let distance = addressArray[2]; // third value is distance
           
          street // log the three separate values
        }
        
      }, 
    });

  }, []); 
  return ( 
    <div> 
      {data.map((row) => ( 
        <div> 
          <p>{row.Location}</p> 
          <p>{row.Rank}</p> 
        </div> 
      ))} 
    </div> 
  );
}


export default App;
