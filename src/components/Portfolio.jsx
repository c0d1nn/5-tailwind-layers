import React from 'react'
import proj1 from '../assets/project1.png'
import proj2 from '../assets/project2.png'
import proj3 from '../assets/project3.png'
import proj4 from '../assets/project4.png'
import proj5 from '../assets/project5.png'
import proj6 from '../assets/project6.png'
import mobile from '../assets/mobileR.png'
import {AiFillGithub, AiFillChrome} from 'react-icons/ai'

const Portfolio = () => {
  return (
    <div className='px-6 pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 max-w-[1400px] mx-auto' id="portfolio">

      <div className='grid grid-cols-2 mb-6 '>
        <div>
          <img src={mobile} className='w-[320px]  mx-auto' alt="alt img"/>
        </div>
        <div className='text-gray-300 my-auto text-left'>
          <h1 className='text-5xl mb-8 tracking-tight'>My Work</h1>
          <p className='text-xl leading-relaxed max-w-[500px]'>lorem ipsum eaihjfajkhfaljk laehf lkjeahf lkjaefh lakjfha lkjfhal kfjhaelfkj haeflkj haflkjaheflk jahfelkaj halekjha flkjeahf lkjeafhlakjehflak jhlakjfhalkefjh lkjfhealfkj</p>
        </div>
      </div>

      <div class=" grid md:grid-cols-3 gap-6">
        <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj1} alt="" class="h-[200px] w-full object-cover object-top transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
        </div>
        <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj2} alt="" class="h-[200px] w-full object-cover object-top  transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
          </div>


          <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj3} alt="" class="h-[200px] w-full object-cover object-top transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
          </div>

          <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj5} alt="" class="h-[200px] w-full object-cover object-top transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
          </div>


          <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj4} alt="" class="h-[200px] w-full object-cover object-top transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
          </div>


          <div class="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1">
            <a href="/" class="group col-span-3">
                <img src={proj4} alt="" class="h-[200px] w-full object-cover object-top transition 
                                                duration-200 group-hover:scale-110 rounded-lg" />
            </a>

            <div class="p-4">
              <h2 class="text-gray-200">
                  Project #1
              </h2>
              <p class="text-gray-400">
                Lorem ipsum dolor sit adipiscing elit.
              </p>
            </div>

            <div class="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
                      <a className='cursor-pointer' href="#"><AiFillGithub className='w-[35px] h-auto'/></a>
                      <a className='cursor-pointer' href="#"><AiFillChrome className='w-[35px] h-auto'/></a>
            </div>
          </div>

          


        

      </div>
    </div>
  )
}

export default Portfolio