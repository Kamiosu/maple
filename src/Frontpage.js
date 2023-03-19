import React from 'react';
import { useMemo } from "react";
import ParsedData from './ParsedData';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// function Map(){ 
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY",
//       });

//       const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//       return (
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//           <Marker position={center} />
//         </GoogleMap>
//       );
// }

export default function Frontpage(props) {


    return (

        <div className="tabemono flex flex-col bg-[rgb(255,240,159)] relative overflow-hidden">
            <div className="xl:w-[90.27%] lg:w-[92.52%] md:w-[94.29%] sm:w-[95.65%] xs:w-[96.7%] xxs:w-[97.51%] tn:w-[98.12%] flex flex-col w-[87.43%] relative grow my-[76px] mx-auto">
                <div className="flex flex-col bg-[rgb(27,27,30)] rounded-[25px] relative">
                    <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-normal text-[64px] leading-[1.15] font-GermaniaOne text-white tracking-[0px] w-[19.06%] relative grow mt-1.5 mx-auto mb-0.5">
                        Tabemono
                    </h1>
                </div>


                <div className="flex flex-col bg-[rgb(151,220,229)] rounded-[30px] w-[29.43%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-8 mr-0 mb-0 ml-[70.57%]">
                    <div className="overflow-auto max-h-[550px] mt-10">
                        <div className="md:mt-[18px] md:mx-3 md:mb-[57px] xs:mt-[18px] xs:mx-2 xs:mb-[57px] flex flex-col relative grow mt-[38px] mx-[19px] mb-[57px]">
                            <div className="flex items-center relative">
                                <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px]">
                                    <h5 className="lg:mt-[19px] lg:mr-[27px] lg:mb-[13px] lg:ml-6 md:mt-[19px] md:mx-5 md:mb-[13px] sm:mt-[19px] sm:mx-4 sm:mb-[13px] xs:mt-[19px] xs:mr-3 xs:mb-[13px] xs:ml-4 xxs:mt-[19px] xxs:mx-3 xxs:mb-[13px] font-[837] text-[15px] leading-[1.2] font-Roboto text-black tracking-[0px] relative grow min-h-[70px] mt-[19px] mr-[27px] mb-[13px] ml-7">
                                        London Food Drive Address, Is going to be displayed here.
                                    </h5>
                                </div>

                                <div className="bg-[rgb(150,3,26)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
                            </div>

                            <div className="flex items-center relative mt-[23px] mx-0 mb-0">
                                <div className="bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px] min-h-[102px]" />
                                <div className="bg-[rgb(150,3,26)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
                            </div>

                            <div className="flex items-center relative mt-9 mx-0 mb-0">
                                <div className="bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px] min-h-[102px]" />
                                <div className="bg-[rgb(150,3,26)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
                            </div>

                            <div className="flex items-center relative mt-9 mx-0 mb-0">
                                <div className="bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px] min-h-[102px]" />
                                <div className="bg-[rgb(150,3,26)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
                            </div>

                            <div className="flex items-center relative mt-9 mx-0 mb-0">
                                <div className="bg-[rgb(254,249,255)] rounded-[10px_0px_0px_10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[325px] min-h-[102px]" />
                                <div className="bg-[rgb(150,3,26)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative basis-[26px] min-h-[102px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Frontpage.inStorybook = true;
