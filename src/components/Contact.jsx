import React from 'react'
import Sections from './common/Sections'

const Contact = () => {
  return (
    <div name="CONTACT " className= "bg-indigo-100">
    <Sections title="Lets Connect">
        <h1 className="font-bold mb-4 text-2xl"> Have a Question?</h1>
        <p class ="w-1/2 text-center text-gray-500"> If you would like to reach me, send <br></br>me an email here. 💬</p>
        
       
            <div name = "CONTACT" className="p-4 md:w-2/5 lg:w-2/5 sm:w-2/5 w-full text-left ">
                <form action="https://getform.io/f/f91c3cb2-a531-479b-9c95-58f6788a98eb" method="POST">
                    <div className="gap-4 w-full">

                        <div className="flex flex-col">
                            <label className="capitalize text-sm py-2 font-extralight">
                                Name
                            </label> 
                            <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"></input>
                        </div>

                        <div className="flex flex-col my-3">
                            <label className="capitalize text-sm py-2 font-extralight">
                                Email
                            </label> 
                            <input type="text" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"></input>
                        </div>

                        <div className="flex flex-col my-3">
                            <label className="capitalize text-sm py-2 font-extralight">
                                Message
                            </label> 
                            <textarea name="message" rows ="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
                        </div>


                    </div>
                    <div className="flex items-center justify-center ">
                        <button className ="my-8 bg-gradient-to-r bg-black text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">

                            Send
                        </button>
                    </div>
                </form>
            </div>

    </Sections>
    </div>
  )
}

export default Contact