import React from 'react';
import App from './App';

function Card(name, location, severity) {
    return (
    <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
        <div className="bg-[rgb(150,3,26)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
    </div>
    );
}
// Create iterative function 

export default function Ranking(props) {
    return (
        <div className="ranking flex flex-col bg-[rgb(56,56,81)] relative overflow-hidden">
            <div className="xl:w-[75.6%] lg:w-[88.8%] md:w-[91.36%] sm:w-[93.37%] xs:w-[94.95%] xxs:w-[96.16%] tn:w-[97.09%] flex flex-col w-[81.68%] relative grow mt-6 mx-auto mb-[123px]">
                <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-semibold text-[64px] leading-[1.2] font-Inter text-white tracking-[0px] w-[20.32%] relative my-0 mx-auto ">
                    Ranking
                </h1>

                <div className="flex flex-col bg-[rgb(217,217,217)] rounded-[30px] relative mt-[38px] mx-0 mb-0 overflow-auto max-h-[600px]">
                    <div className="lg:w-[92.34%] md:w-[94.14%] sm:w-[95.54%] xs:w-[96.62%] xxs:w-[97.44%] tn:w-[98.07%] flex flex-col w-[90.04%] relative grow mt-[50px] mx-auto mb-[74px]">
                        
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                        <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
                            <div className="bg-[rgb(150,3,26)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
                        </div>

                        <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
                            <div className="bg-[rgb(197,0,31)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
                        </div>

                        <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
                            <div className="bg-[rgb(255,122,0)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
                        </div>

                        <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[20px] relative mt-9 mx-0 mb-0">
                            <div className="bg-[rgb(255,199,0)] rounded-[20px] w-[14.21%] relative grow min-h-[121px] mt-0 mr-0 mb-0 ml-[85.79%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Ranking.inStorybook = true;
