import LocData from "./locations.csv"
import latData from "./long-lat.csv"
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';



export default function ParsedData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse(LocData, {
            download: true,
            delimiter: ',',
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                const formattedData = results.data.map((row) => {

                    return {
                        name: row.name, // Use header names instead of index positions
                        address: row.address,
                        distance: row.distance_km,
                        severity: row.severity,
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


function ParsedMarkerData() {
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
                        long: row.lon, // Use header names instead of index positions
                        lat: row.lat,
                        
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