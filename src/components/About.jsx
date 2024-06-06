import React from 'react'
import aboutImg from "../assets/profilepic.png";

const About = () => {
  return (
    <div className='md:py-10 text-white h-auto max-w-[1400px] mx-auto' id='about'>
      <div className=" flex sm:flex-row flex-col-reverse items-center md:gap-6 px-10 mx-auto">

            <div className='mx-auto p-2'>
                <div className="text-gray-300 my-3 max-w-[500px]">
                    <h3 className="text-3xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-xl text-justify leading-7 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        eos, quam vel quisquam, explicabo sit labore dignissimos optio
                        ratione quibusdam doloribus pariatur consequuntur sint.
                        Reprehenderit cupiditate possimus facere quasi voluptatem?
                    </p>     
                </div>
                
                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">years experience</span></p>
                    </div>
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">happy clients</span></p>
                    </div>
                </div>
            </div>


            <div className="w-[200px] md:w-[500px] h-full">
                <img
                    src={aboutImg}
                    alt=""
                    className="object-cover"
                />
            </div>

      </div> 
    </div>
  )
}

export default About