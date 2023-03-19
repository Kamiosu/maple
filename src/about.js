import React from 'react';



export default function About(props) {
  return (
    <div className="untitled-page flex flex-col bg-[rgb(172,156,185)] relative overflow-hidden">
      <div className="flex flex-col w-[81.6%] relative grow mt-6 mx-auto mb-[292px]">
        <div className="xl:m-0 flex flex-col relative grow">
          <div className="flex flex-col relative">
            <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-0 mr-[7px] mb-0 ml-0">
              <h1 className="lg:text-[56px] lg:text-left md:text-[48px] sm:text-[40px] xs:text-[36px] xxs:text-[32px] tn:text-[28px] font-normal text-[64px] leading-none font-Roboto text-black tracking-[0px] w-[32.15%] relative grow min-h-[72px] mt-[9px] mr-[29.15%] mb-2.5 ml-[38.7%]">
                {' '}
                About Us
              </h1>
            </div>

            <div className="lg:flex-wrap lg:justify-start lg:content-start lg:gap-y-4 md:mt-[35px] md:mr-0 md:mb-0 md:ml-1 flex items-center relative mt-[35px] mr-0 mb-0 ml-[9px]">
              <div className="lg:flex-[0_0_calc(1/2_*_100%_-_16px_/_2)] lg:min-w-[unset] md:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] flex flex-col relative grow basis-[262px]">
                <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                  <div className="lg:mt-[26px] lg:mx-2 lg:mb-[29px] xs:mt-[26px] xs:mx-1 xs:mb-[29px] flex flex-col relative grow mt-[26px] mx-[13px] mb-[29px]">
                    <div className="flex flex-col relative">
                      <img
                        src={require('./images/william.jpeg')}
                        alt="alt text"
                        className="w-full h-auto aspect-[1] align-top object-cover object-[center_center] relative"
                      />
                    </div>

                    <div className="lg:mt-1.5 lg:mx-7 lg:mb-0 md:mt-1.5 md:mx-6 md:mb-0 sm:mt-1.5 sm:mx-5 sm:mb-0 xxs:mt-1.5 xxs:mx-4 xxs:mb-0 flex flex-col bg-[rgb(217,217,217)] rounded-[27.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-1.5 mx-9 mb-0">
                      <h1 className="lg:text-[28px] lg:text-left lg:mt-2 lg:mr-4 lg:mb-[9px] lg:ml-5 md:text-[24px] md:mt-2 md:mx-4 md:mb-[9px] sm:text-[20px] sm:mt-2 sm:mr-3 sm:mb-[9px] sm:ml-4 tn:text-[16px] xs:mt-2 xs:mx-3 xs:mb-[9px] xxs:mt-2 xxs:mr-2 xxs:mb-[9px] xxs:ml-3 font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] relative grow mt-2 mr-[21px] mb-[9px] ml-[25px]">
                        William{' '}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:shrink-0 lg:basis-4 lg:min-w-[unset] md:hidden basis-[59px]" />
              <div className="lg:flex-[0_0_calc(1/2_*_100%_-_16px_/_2)] lg:min-w-[unset] md:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] flex flex-col relative grow basis-[262px]">
                <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                  <div className="md:mt-[26px] md:mr-[11px] md:mb-[29px] md:ml-2 sm:mt-[26px] sm:mr-1 sm:mb-[29px] sm:ml-2 tn:mt-[26px] tn:mx-1 tn:mb-[29px] flex flex-col relative grow mt-[26px] mr-[11px] mb-[29px] ml-[15px]">
                    <div className="flex flex-col relative">
                      <img
                        src={require('./images/jimmy.jpeg')}
                        alt="alt text"
                        className="w-full h-auto aspect-[1] align-top object-cover object-[center_center] relative"
                      />
                    </div>

                    <div className="lg:mt-1.5 lg:mx-7 lg:mb-0 md:mt-1.5 md:mx-6 md:mb-0 sm:mt-1.5 sm:mx-5 sm:mb-0 xxs:mt-1.5 xxs:mx-4 xxs:mb-0 flex flex-col bg-[rgb(217,217,217)] rounded-[27.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-1.5 mx-9 mb-0">
                      <h1 className="lg:text-[28px] lg:text-left md:text-[24px] md:mt-[7px] md:mr-1.5 md:mb-2.5 md:ml-5 sm:text-[20px] sm:mt-[7px] sm:mr-1.5 sm:mb-2.5 sm:ml-4 tn:text-[16px] xs:mt-[7px] xs:mr-1.5 xs:mb-2.5 xs:ml-3 font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] relative grow mt-[7px] mr-1.5 mb-2.5 ml-[27px]">
                        Jimmy{' '}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden basis-[63px]" />
              <div className="lg:flex-[0_0_calc(1/2_*_100%_-_16px_/_2)] lg:min-w-[unset] md:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] flex flex-col relative grow basis-[262px]">
                <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                  <div className="lg:mt-[26px] lg:mx-2 lg:mb-[29px] xs:mt-[26px] xs:mx-1 xs:mb-[29px] flex flex-col relative grow mt-[26px] mx-[13px] mb-[29px]">
                    <div className="flex flex-col relative">
                      <img
                        src={require('./images/ohm.jpg')}
                        alt="alt text"
                        className="w-full h-auto aspect-[1] align-top object-cover object-[center_center] relative"
                      />
                    </div>

                    <div className="lg:mt-1.5 lg:mx-7 lg:mb-0 md:mt-1.5 md:mx-6 md:mb-0 sm:mt-1.5 sm:mx-5 sm:mb-0 xxs:mt-1.5 xxs:mx-4 xxs:mb-0 flex flex-col bg-[rgb(217,217,217)] rounded-[27.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-1.5 mx-9 mb-0">
                      <h1 className="lg:text-[28px] lg:text-left md:text-[24px] sm:text-[20px] tn:text-[16px] font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] w-[54.27%] relative grow mt-[7px] mr-[20.73%] mb-2.5 ml-1/4">
                        Ohm
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:shrink-0 lg:basis-4 lg:min-w-[unset] md:hidden basis-[63px]" />
              <div className="lg:flex-[0_0_calc(1/2_*_100%_-_16px_/_2)] lg:min-w-[unset] md:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] flex flex-col relative grow basis-[262px]">
                <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative grow">
                  <div className="lg:mt-[26px] lg:mr-3 lg:mb-[29px] lg:ml-[11px] sm:mt-[26px] sm:mr-2 sm:mb-[29px] sm:ml-1 flex flex-col relative grow mt-[26px] mr-[17px] mb-[29px] ml-[11px]">
                    <div className="flex flex-col relative">
                      <img
                        src={require('./images/jason.png')}
                        alt="alt text"
                        className="w-full h-auto aspect-[0.99] align-top object-cover object-[center_center] relative"
                      />
                    </div>

                    <div className="lg:mt-1.5 lg:mx-7 lg:mb-0 md:mt-1.5 md:mx-6 md:mb-0 sm:mt-1.5 sm:mx-5 sm:mb-0 xs:mt-1.5 xs:mr-4 xs:mb-0 xs:ml-5 xxs:mt-1.5 xxs:mx-4 xxs:mb-0 tn:mt-1.5 tn:mr-3 tn:mb-0 tn:ml-4 flex flex-col bg-[rgb(217,217,217)] rounded-[27.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-1.5 mr-[34px] mb-0 ml-9">
                      <h1 className="lg:text-[28px] lg:text-left lg:mt-2.5 lg:mr-5 lg:mb-[7px] lg:ml-7 md:text-[24px] md:mt-2.5 md:mr-4 md:mb-[7px] md:ml-6 sm:text-[20px] sm:mt-2.5 sm:mr-4 sm:mb-[7px] sm:ml-5 tn:text-[16px] tn:mt-2.5 tn:mx-3 tn:mb-[7px] xs:mt-2.5 xs:mr-3 xs:mb-[7px] xs:ml-4 font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] relative grow mt-2.5 mr-[25px] mb-[7px] ml-8">
                        Jason
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[rgb(145,173,194)] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-[69px] mr-0 mb-0 ml-[7px]">
            <div className="lg:w-[92.53%] md:w-[94.29%] sm:w-[95.66%] xs:w-[96.71%] xxs:w-[97.51%] tn:w-[98.12%] flex flex-col w-[90.28%] relative grow mt-10 mx-auto mb-[76px]">
              <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-0 mr-0 mb-0 ml-[3px]">
                <h1 className="lg:text-[28px] lg:text-left md:text-[24px] sm:text-[20px] tn:text-[16px] tn:w-[44.53%] xxs:w-[37.57%] font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] w-[31.12%] relative grow mt-[43px] mx-auto mb-10">
                  What Does Our App Do?
                </h1>
              </div>

              <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-[47px] mr-0 mb-0 ml-[3px]">
                <h3 className="lg:text-[16px] lg:text-left lg:mt-7 lg:mx-5 lg:mb-9 md:mt-7 md:mx-4 md:mb-9 sm:mt-7 sm:mr-4 sm:mb-9 sm:ml-3 xs:mt-7 xs:mx-3 xs:mb-9 tn:mt-7 tn:mr-3 tn:mb-9 tn:ml-2 font-normal text-[20px] leading-tight font-Righteous text-black tracking-[0px] relative grow min-h-[134px] mt-7 mr-[25px] mb-9 ml-6">
                  This website serves as a comprehensive resource for individuals looking to support food banks in
                  Ontario, Canada. In addition to providing a directory of food bank locations, the website ranks the
                  food banks based on the severity of their need for donations. This feature allows donors to prioritize
                  their contributions to those food banks that are most in need. By providing this information, the
                  website helps ensure that donations are distributed more equitably and effectively across the
                  province.
                </h3>
              </div>

              <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-[57px] mr-[3px] mb-0 ml-0">
                <h1 className="lg:text-[28px] lg:text-left md:text-[24px] sm:text-[20px] tn:text-[16px] tn:w-[44.53%] xxs:w-[37.57%] font-[837] text-[32px] leading-[1.18] font-Roboto text-black tracking-[0px] w-[31.12%] relative grow mt-[43px] mx-auto mb-10">
                  {' '}
                  How Did We Build It?
                </h1>
              </div>

              <div className="flex flex-col bg-[rgb(254,249,255)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative mt-[52px] mr-[3px] mb-0 ml-0">
                <h3 className="lg:text-[16px] lg:text-left md:mt-[11px] md:mr-[3px] md:mb-3 md:ml-5 sm:mt-[11px] sm:mr-[3px] sm:mb-3 sm:ml-4 xs:mt-[11px] xs:mr-[3px] xs:mb-3 xs:ml-3 font-normal text-[20px] leading-tight font-Righteous text-black tracking-[0px] relative grow mt-[11px] mr-[3px] mb-3 ml-[27px]">
                  The app was built using a combination of different technologies and tools. Firstly, Figma was used to
                  design the website and ensure that it looked visually appealing. Then, a React app was created using
                  libraries such as Tailwind and Next.js. These libraries made it easier to build a responsive and
                  interactive website. Additionally, the team incorporated the Google Maps API, which allowed them to
                  implement the mapping function and mark the food banks on the map. This feature made it easier for
                  users to locate nearby food banks and contribute to those that were most in need. Overall, the team
                  used a variety of tools and technologies to create a user-friendly app that was both functional and
                  visually appealing
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.inStorybook = true;
