import App from './App';
import LocData from "./locations.csv"
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';

function Card(itemData) {
    console.log(itemData.data)
    return (
        <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
            <div className="bg-[rgb(150,3,26)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
            {/* Add data from itemData to div */}
            <div className="lg:w-[92.34%] md:w-[94.14%] sm:w-[95.54%] xs:w-[96.62%] xxs:w-[97.44%] tn:w-[98.07%] flex flex-col w-[90.04%] relative grow mt-[50px] mx-auto mb-[74px]">
                <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-semibold text-[64px] leading-[1.2] font-Inter text-[rgb(150,3,26)] tracking-[0px] w-[20.32%] relative my-0 mx-auto ">
                    {itemData.data}
                </h1>
            </div>
          </div>
    );
}
// Create iterative function 
function Address () { 
    const [data, setData] = useState([]);

    useEffect(() => { 
        Papa.parse(LocData, {  
            download: true, 
            delimiter:',', 
            complete: (results) => { 
                let dataArray = [];
                for (let i = 1; i < results.data.length; i++) {
                    let result = results.data[i][0];
                    let severity = results.data[i][2];
                    let addressArray = result.split("\n"); // split the address by newline character
                    let street = addressArray[0]; // first value is street address
                    let cityProvincePostal = addressArray[1]; // second value is city, province, and postal code
                    let distance = addressArray[2]; // third value is distance
                    // add data to array 
                    dataArray.push(result)
                }
                setData(dataArray);
            }, 
        });
    }, []); 

    // Use `data` state variable wherever needed in the component
    // ...
    return data;
}


export default function Ranking(props) {
    //Change
    const dataArray = Address();

    return (
        <div className="ranking flex flex-col bg-[rgb(56,56,81)] relative overflow-hidden">
            <div className="xl:w-[75.6%] lg:w-[88.8%] md:w-[91.36%] sm:w-[93.37%] xs:w-[94.95%] xxs:w-[96.16%] tn:w-[97.09%] flex flex-col w-[81.68%] relative grow mt-6 mx-auto mb-[123px]">
                <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-semibold text-[64px] leading-[1.2] font-Inter text-white tracking-[0px] w-[20.32%] relative my-0 mx-auto ">
                    Ranking
                </h1>
                
                <div className="flex flex-col bg-[rgb(217,217,217)] rounded-[30px] relative mt-[38px] mx-0 mb-0 overflow-auto max-h-[600px]">
                    
                <div className="lg:my-0 lg:mx-4 md:my-0 md:mx-3 xs:flex-wrap xs:justify-start xs:content-start xs:gap-y-4 xs:my-0 xs:mx-2 flex items-center relative my-0 mx-5">
            <div className="xs:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] xs:min-w-[unset] flex flex-col relative grow basis-[133px]">
              <div className="flex flex-col bg-[rgb(217,217,217)] rounded-[18.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                <div className="font-[771] text-[14px] leading-[1.21] font-Inter text-black tracking-[0px] relative grow mt-[9px] mr-1.5 mb-[9px] ml-[7px]">
                  Sort by proximity
                </div>
              </div>
            </div>
            <div className="xs:hidden basis-[49px]" />
            <div className="xs:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] xs:min-w-[unset] flex flex-col relative grow basis-[133px]">
              <div className="flex flex-col bg-[rgb(217,217,217)] rounded-[18.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                <div className="sm:mt-[9px] sm:mx-1 sm:mb-[7px] font-[771] text-[14px] leading-[1.21] font-Inter text-black tracking-[0px] relative grow min-h-[21px] mt-[9px] mx-[11px] mb-[7px]">
                  Sort by severity
                </div>
              </div>
            </div>
          </div>
                    <div className="lg:w-[92.34%] md:w-[94.14%] sm:w-[95.54%] xs:w-[96.62%] xxs:w-[97.44%] tn:w-[98.07%] flex flex-col w-[90.04%] relative grow mt-[50px] mx-auto mb-[74px]">
                        {
                            dataArray.map((itemData, index) => (
                                
                                <Card key={index} data={itemData} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Ranking.inStorybook = true;
