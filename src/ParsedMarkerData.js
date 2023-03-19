import LocData from "./locations.csv"
import latData from "./long-lat.csv"
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';

export default function ParsedMarkerData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse(latData, {
            download: true,
            delimiter: ',',
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                const formattedData = results.data.map((row) => {

                    return {
                         // Use header names instead of index positions
                        lat: row.lat,
                        lng: row.lng,
                        
                    };
                });
                setData(formattedData);
            },
        });
    }, []);

    // Use `data` state variable wherever needed in the component
    // ...
    return data;
}