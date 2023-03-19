import React from 'react';
import ParsedData from './ParsedData';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";
import ParsedMarkerData from './ParsedMarkerData';

function Card(props) {
    const { name, address, distance, severity } = props.data;
    return (
        <div className="flex items-center relative mt-[33px]">

            <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px]">

                <h5 className="lg:mt-[19px] lg:mr-[27px] lg:mb-[13px] lg:ml-6 md:mt-[19px] sm:mt-[19px] sm:mx-4 sm:mb-[5px] xs:mt-[19px] xs:mr-3 xs:mb-[13px] xs:ml-4 xxs:mt-[19px] xxs:mx-3 xxs:mb-[13px] font-[837] text-[15px] leading-[1.2] font-Roboto text-black tracking-[0px] relative grow min-h-[70px] mt-[5px] mr-[27px] mb-[5px] ml-7">

                    {address}
                </h5>
            </div>

            <div className="bg-[rgb(0,5,45)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
        </div>
    );
}

function Map() {
    const longLatData = ParsedMarkerData();
    console.log(longLatData)
    const mapStyles = {
        height: "85vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 43.004592,
        lng: -81.276454,
    };
    

    return (
        <LoadScript googleMapsApiKey="AIzaSyCk6K7fD5wkj7XOwGDi0HA-tE1GlNWuCPw">
            <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter} >

                {   
                    
                    longLatData.map((cords, index) => (
                        <Marker key={index} position={cords} />
                        
                    ))
                    
                }
            </GoogleMap>

        </LoadScript>
    );
}


export default function Frontpage(props) {

    let dataArray = ParsedData();

    return (

        <div className="tabemono2 flex flex-col bg-[rgb(255,240,159)] relative overflow-hidden">
            <div className="xl:w-[90.27%] lg:w-[92.52%] md:w-[94.29%] sm:w-[95.65%] xs:w-[96.7%] xxs:w-[97.51%] tn:w-[98.12%] flex flex-col w-[87.43%] relative grow my-[76px] mx-auto">
                <div className="flex flex-col bg-[rgb(27,27,30)] rounded-[25px] relative">
                    <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-normal text-[64px] leading-[1.15] font-GermaniaOne text-white tracking-[5px] w-[19.06%] relative grow mt-1.5 mx-auto mb-0.5 pb-3">
                        TABEMONO
                    </h1>
                </div>

                <div className="flex items-center relative mt-8 mx-0 mb-0">
                    <div className="flex flex-col relative w-[100%] mt-[30px] ">
                        <Map />
                    </div>
                    <div className="flex flex-col bg-gradient-to-br from-cyan-500 to-black text-white p-4 rounded-[30px] w-[40.43%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-8 mr-0 mb-0 ml-[5.57%]">
                        <div className="overflow-auto max-h-[750px] mt-[-24px] mb-[-24px]">
                            <div className="md:mt-[18px] md:mx-3 md:mb-[57px] xs:mt-[18px] xs:mx-2 xs:mb-[57px] flex flex-col relative grow mt-[38px] mx-[19px] mb-[57px]">
                                {
                                    dataArray.map((dataArray, index) => (
                                        <Card key={index} data={dataArray} />
                                    ))
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



Frontpage.inStorybook = true;
