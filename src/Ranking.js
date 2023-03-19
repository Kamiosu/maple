import App from './App';
import LocData from "./locations.csv"
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';

function Card(itemData) {
    return (
        <div className="flex items-center relative mt-[53px] mx-0 mb-0">
            <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[870px]">
              <div className="lg:mt-[18px] lg:mr-7 lg:mb-[22px] lg:ml-[27px] md:mt-[18px] md:mr-6 md:mb-[22px] md:ml-5 sm:mt-[18px] sm:mr-5 sm:mb-[22px] sm:ml-4 xs:mt-[18px] xs:mr-4 xs:mb-[22px] xs:ml-3 tn:mt-[18px] tn:mx-3 tn:mb-[22px] flex flex-col relative grow mt-[18px] mr-[33px] mb-[22px] ml-[27px]">
                <h1 className="lg:text-[28px] lg:text-left md:text-[24px] sm:text-[20px] tn:text-[16px] font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] relative">
                  London Food Drive
                </h1>
                <h1 className="lg:text-[28px] lg:text-left md:text-[24px] sm:text-[20px] tn:text-[16px] font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] relative mt-[5px] mx-0 mb-0">
                  London Food Drive London Food Drive{' '}
                </h1>
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(217,217,217)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[121px]">
              <div className="lg:mt-[9.29px] lg:mx-4 lg:mb-[18px] sm:mt-[9.29px] sm:mx-3 sm:mb-[18px] xxs:mt-[9.29px] xxs:mx-2 xxs:mb-[18px] flex flex-col relative grow mt-[9.29px] mr-[21.33px] mb-[18px] ml-[22px]">
                <h1 className="lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[24px] tn:text-[20px] flex justify-center font-[837] text-[40px] leading-[1.17] font-Roboto text-black text-center tracking-[0px] relative mt-0 mr-0 mb-0 ml-[0.67px]">
                  111
                </h1>
                <h1 className="lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[24px] tn:text-[20px] flex justify-center font-[837] text-[40px] leading-[1.17] font-Roboto text-black text-center tracking-[0px] relative mt-[4.71px] mr-[0.67px] mb-0 ml-0">
                  km
                </h1>
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(150,3,26)] rounded-[0px_10px_10px_0px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[121px]">
              <h1 className="lg:text-[36px] lg:text-left lg:mt-[39px] lg:mx-4 lg:mb-[30px] md:text-[32px] sm:text-[28px] sm:mt-[39px] sm:mx-3 sm:mb-[30px] xs:text-[24px] tn:text-[20px] xxs:mt-[39px] xxs:mx-2 xxs:mb-[30px] font-[837] text-[40px] leading-[1.17] font-Roboto text-white tracking-[0px] relative grow min-h-[52px] mt-[39px] mx-[21px] mb-[30px]">
                76%
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
