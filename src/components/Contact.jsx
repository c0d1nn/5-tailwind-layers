import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'



const Contact = () => {
  return (
    <div className='px-6 pt-16 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]' id="contact">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10
                     bg-black/40 rounded-xl md:rounded-full">
            <div class="mb-4">
                <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto ">
                    <h2
                        class="mb-4 font-bold tracking-tight text-gray-200 text-3xl sm:text-5xl">
                        Let´s connect
                    </h2>
                    <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-400">
                        and start working on amazing things
                    </p>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="grid md:grid-cols-2">
                    <div class="my-auto pr-6">
                        <ul>
                            <li class="flex">
                                <AiFillLinkedin className='w-[70px] h-auto text-gray-300'/>
                                <div class="m-5">
                                    <h3 class="text-lg font-bold text-gray-200">Our Address</h3>
                                    <p class="text-gray-400">1111 xxx Street</p>
                                    <p class="text-gray-400">xxx city</p>
                                </div>
                            </li>
                            <li class="flex">
                                    <AiFillGithub className='w-[70px] h-auto text-gray-300'/>
                                <div class="m-5">
                                    <h3 class="text-lg font-bold text-gray-200">Contact
                                    </h3>
                                    <p class="text-gray-400">Mobile: xxxx</p>
                                    <p class="text-gray-400">Mail: xxx@xxx.com</p>
                                </div>
                            </li>
                            <li class="flex">
                                    <AiFillInstagram className='w-[70px] h-auto text-gray-300'/>
                                <div class="m-5">
                                    <h3 class="text-lg font-bold text-gray-200">Working
                                        hours</h3>
                                    <p class="text-gray-400">Monday - Friday: 08:00 - 17:00</p>
                                    <p class="text-gray-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="max-w-6xl p-5 md:p-12" id="form">
                        <h2 class="mb-4 text-2xl font-bold text-gray-300">Ready to Get Started?</h2>
                        <form action="https://getform.io/f/zbqO1Gep" method="POST">
                            <div class="mb-6">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0" name="name"/>
                                    </div>
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0" name="email"/>
                                    </div>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact