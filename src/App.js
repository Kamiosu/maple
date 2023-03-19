import logo from './logo.svg';
import Frontpage from './Frontpage';
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';
import LocData from "./locations.csv"
import Ranking from "./Ranking"


function App() {
  return (
    <div className="App">
      <main>
        <Address/>
      </main>
      
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
          let severity = results.data[i][2];
          let addressArray = result.split("\n"); // split the address by newline character
          let street = addressArray[0]; // first value is street address
          let cityProvincePostal = addressArray[1]; // second value is city, province, and postal code
          let distance = addressArray[2]; // third value is distance
        }
        
      }, 
    });

  }, []); 

  return ( 
    // return the street, city, province, postal code, distance 
      
    <div className='App'>
      <main>

      </main>
    </div>

    
  );
}


export default App;
